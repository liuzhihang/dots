import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';

const output = resolveEvidenceDirectory('.artifacts/select-layout');
await fs.mkdir(output, {recursive: true});

const staticRoot = path.resolve(process.env.DOTS_QA_DIST || 'dist');
const vite = await createServer({
  configFile: path.resolve('vite.config.mjs'),
  root: staticRoot,
  server: {host: '127.0.0.1', port: 0, strictPort: true, hmr: false}
});

const measurements = [];
const pageErrors = [];
const consoleErrors = [];
const cleanupErrors = [];
const detailFailures = [];
const fallbackMeasurements = [];
const detailHeaderMeasurements = [];
const editorTabMeasurements = [];
const coarsePointerMeasurements = [];
let browser;
let page;
let fallbackPage;
let coarseContext;
let failure;
let fieldSizingSupported = null;
let selectCapabilities = null;
let selectMode = 'not-detected';
let fallbackSimulation = {status: 'not-run'};
let coarsePointerStatus = 'not-run';
let narrowFourTabMeasurement = {status: 'not-run'};
const keyboardStatus = {
  tabOrder: 'not-run',
  enhancedPickerOpen: 'not-run',
  escapeKeepsDetailOpen: 'not-run',
  languageSelection: 'not-run',
  sortSelection: 'not-run',
  fallbackSelections: 'not-run'
};

async function measureControl(targetPage, selector) {
  return targetPage.locator(selector).evaluate(element => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = style.font;
    const selectedLabel = element.selectedOptions[0]?.textContent.trim() || '';
    const selectedLabelWidth = context.measureText(selectedLabel).width
      + (Array.from(selectedLabel).length - 1) * (parseFloat(style.letterSpacing) || 0);
    const labelSlotWidth = element.clientWidth
      - parseFloat(style.paddingLeft)
      - parseFloat(style.paddingRight);
    const backgroundSize = style.backgroundSize.split(',')[0].trim();
    const backgroundPosition = style.backgroundPosition.split(',')[0].trim();
    const arrowWidth = parseFloat(backgroundSize.split(/\s+/)[0]);
    const positionInset = /(?:right\s+|calc\(100%\s*-\s*)([\d.]+)px/.exec(backgroundPosition);
    const arrowRightInset = positionInset ? Number(positionInset[1]) : null;
    const arrowStart = arrowRightInset === null
      ? NaN
      : rect.right - parseFloat(style.borderRightWidth) - arrowRightInset - arrowWidth;
    const labelStart = rect.left + parseFloat(style.borderLeftWidth) + parseFloat(style.paddingLeft);
    const arrowGap = arrowStart - labelStart - selectedLabelWidth;
    const selectedOption = element.selectedOptions[0];
    const pickerStyle = CSS.supports('selector(select::picker(select))')
      ? getComputedStyle(element, '::picker(select)')
      : null;
    const pickerIconStyle = CSS.supports('selector(select::picker-icon)')
      ? getComputedStyle(element, '::picker-icon')
      : null;
    const selectedOptionStyle = selectedOption ? getComputedStyle(selectedOption) : null;
    const selectedCheckmarkStyle = selectedOption && CSS.supports('selector(option::checkmark)')
      ? getComputedStyle(selectedOption, '::checkmark')
      : null;
    return {
      selector: `#${element.id}`,
      tagName: element.tagName,
      box: {x: rect.x, y: rect.y, width: rect.width, height: rect.height},
      fontSize: parseFloat(style.fontSize),
      borderRadius: parseFloat(style.borderTopLeftRadius),
      paddingLeft: parseFloat(style.paddingLeft),
      paddingRight: parseFloat(style.paddingRight),
      labelSlotWidth,
      selectedLabel,
      selectedLabelWidth,
      labels: [...element.options].map(option => option.textContent.trim()),
      arrowWidth,
      arrowRightInset,
      arrowGap,
      textAlign: style.textAlign,
      textAlignLast: style.textAlignLast,
      appearance: style.appearance,
      backgroundImage: style.backgroundImage,
      fieldSizing: style.fieldSizing,
      ariaLabel: element.getAttribute('aria-label'),
      picker: {
        appearance: pickerStyle?.appearance ?? null,
        display: pickerStyle?.display ?? null,
        backgroundColor: pickerStyle?.backgroundColor ?? null,
        borderRadius: pickerStyle?.borderRadius ?? null,
        minWidth: pickerStyle?.minWidth ?? null
      },
      pickerIconDisplay: pickerIconStyle?.display ?? null,
      selectedOptionStyle: selectedOptionStyle ? {
        display: selectedOptionStyle.display,
        fontSize: parseFloat(selectedOptionStyle.fontSize),
        minHeight: selectedOptionStyle.minHeight,
        backgroundColor: selectedOptionStyle.backgroundColor,
        checkmarkColor: selectedCheckmarkStyle?.color ?? null
      } : null
    };
  });
}

function assertCompactControl(control, viewport, surface, mode = selectMode, pointer = 'fine') {
  const prefix = `${surface} ${control.selector} at ${viewport.width}px`;
  const isDetail = surface === 'detail';
  const expectedHeight = isDetail && pointer === 'fine' ? 36 : 44;
  const expectedPickerWidth = isDetail ? '128px' : '144px';
  const expectedOptionHeight = isDetail && pointer === 'fine' ? '36px' : '44px';
  assert.equal(control.tagName, 'SELECT', `${prefix} remains a native select.`);
  if (isDetail) {
    assert.equal(control.box.height, expectedHeight,
      `${prefix} uses a ${expectedHeight}px ${pointer}-pointer target.`);
    assert.equal(control.fontSize, 12, `${prefix} uses the compact 12px dialog text.`);
    assert(Math.abs(control.borderRadius - 8) <= 0.5,
      `${prefix} uses an 8px compact dialog radius (${control.borderRadius}px).`);
  } else {
    assert(control.box.height >= 44, `${prefix} keeps the gallery's 44px touch target.`);
  }
  assert(control.labelSlotWidth + 0.5 >= control.selectedLabelWidth,
    `${prefix} has room for the full selected label (${control.selectedLabelWidth.toFixed(1)}px in ${control.labelSlotWidth.toFixed(1)}px).`);
  assert(control.arrowGap >= 8 && control.arrowGap <= 14,
    `${prefix} keeps an 8–14px label-to-arrow gap (measured ${control.arrowGap.toFixed(1)}px).`);
  assert(control.box.x >= -0.5 && control.box.x + control.box.width <= viewport.width + 0.5,
    `${prefix} stays inside the viewport.`);
  assert.equal(control.appearance, mode === 'enhanced' ? 'base-select' : 'none',
    `${prefix} uses the ${mode} select appearance.`);
  assert(control.backgroundImage.includes('data:image/svg+xml'), `${prefix} keeps the shared chevron.`);
  assert(control.labels.length > 0 && control.labels.every(label => label.length > 0),
    `${prefix} retains readable native option labels.`);
  if (mode === 'enhanced') {
    assert.equal(control.picker.appearance, 'base-select', `${prefix} exposes the styled native picker.`);
    assert.equal(control.pickerIconDisplay, 'none', `${prefix} keeps the custom background chevron as the only arrow.`);
    assert.equal(control.picker.minWidth, expectedPickerWidth, `${prefix} keeps its ${expectedPickerWidth} picker minimum width.`);
    assert.equal(control.selectedOptionStyle.display, 'flex', `${prefix} lays out selected options with the custom picker style.`);
    assert.equal(control.selectedOptionStyle.minHeight, expectedOptionHeight,
      `${prefix} keeps picker options at ${expectedOptionHeight}.`);
    if (isDetail) assert.equal(control.selectedOptionStyle.fontSize, 12, `${prefix} keeps picker option text at 12px.`);
    assert.notEqual(control.selectedOptionStyle.backgroundColor, 'rgba(0, 0, 0, 0)',
      `${prefix} gives the selected option a visible state.`);
    assert.equal(control.selectedOptionStyle.checkmarkColor, 'rgb(201, 166, 255)',
      `${prefix} styles the selected option checkmark.`);
  }
}

async function measureEditorTabs(targetPage) {
  return targetPage.locator('#studioOverlay .studio-editor-tabs').evaluate(tabs => {
    const rect = element => {
      const box = element.getBoundingClientRect();
      return {x: box.x, right: box.right, width: box.width, height: box.height};
    };
    return {
      box: rect(tabs),
      clientWidth: tabs.clientWidth,
      scrollWidth: tabs.scrollWidth,
      overflowX: getComputedStyle(tabs).overflowX,
      parentWidth: tabs.parentElement?.clientWidth ?? 0,
      controlsWidth: tabs.closest('.studio-editor-controls')?.getBoundingClientRect().width
        ?? tabs.parentElement?.getBoundingClientRect().width ?? 0,
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: innerWidth,
      tabs: [...tabs.querySelectorAll('.studio-editor-tab')].map(button => {
        const style = getComputedStyle(button);
        const buttonRect = rect(button);
        const range = document.createRange();
        range.selectNodeContents(button);
        const textRect = range.getBoundingClientRect();
        return {
          ...buttonRect,
          text: button.textContent.trim(),
          textWidth: textRect.width,
          textHeight: textRect.height,
          clientWidth: button.clientWidth,
          scrollWidth: button.scrollWidth,
          clientHeight: button.clientHeight,
          scrollHeight: button.scrollHeight,
          fontSize: parseFloat(style.fontSize),
          lineHeight: parseFloat(style.lineHeight),
          whiteSpace: style.whiteSpace,
          paddingLeft: parseFloat(style.paddingLeft),
          paddingRight: parseFloat(style.paddingRight),
          borderLeft: parseFloat(style.borderLeftWidth),
          borderRight: parseFloat(style.borderRightWidth)
        };
      })
    };
  });
}

function assertEditorTabLayout(layout, viewport, language, pointer = 'fine') {
  const expectedHeight = pointer === 'coarse' ? 44 : 36;
  const prefix = `${language} editor tabs at ${viewport.width}px (${pointer} pointer)`;
  assert(layout.tabs.length > 0, `${prefix} contain tabs.`);
  assert(layout.box.width > 0 && layout.box.x >= -0.5 && layout.box.right <= viewport.width + 0.5,
    `${prefix} stay inside the viewport.`);
  assert(layout.box.width <= layout.controlsWidth + 1,
    `${prefix} never exceed their editor controls width (${layout.box.width}px / ${layout.controlsWidth}px).`);
  assert(layout.documentWidth <= viewport.width + 1,
    `${prefix} do not create page-level horizontal overflow (${layout.documentWidth}px document width).`);
  assert(['auto', 'scroll'].includes(layout.overflowX),
    `${prefix} use an internal horizontal scrollport when labels need more room.`);
  assert(layout.tabs.every(tab => tab.text && Math.abs(tab.height - expectedHeight) <= 1),
    `${prefix} keep every tab label non-empty and targets ${expectedHeight}px high.`);
  assert(layout.tabs.every(tab => tab.whiteSpace === 'nowrap'
    && Number.isFinite(tab.lineHeight)
    && tab.textHeight <= tab.lineHeight + 1
    && tab.scrollWidth <= tab.clientWidth + 1
    && tab.scrollHeight <= tab.clientHeight + 1
    && tab.textWidth <= tab.clientWidth - tab.paddingLeft - tab.paddingRight + 1),
  `${prefix} keep every label on one unclipped line.`);
  assert(layout.tabs.every(tab => tab.width - tab.textWidth
    <= tab.paddingLeft + tab.paddingRight + tab.borderLeft + tab.borderRight + 4),
  `${prefix} size each tab to its label and padding instead of stretching equal columns.`);
  if (viewport.width >= 600) {
    assert(layout.box.width < layout.controlsWidth - 16,
      `${prefix} leave unused trailing space rather than stretching the tab strip to the full row.`);
  }
  if (language === 'en' && layout.tabs.length > 1) {
    const widths = layout.tabs.map(tab => tab.width);
    assert(Math.max(...widths) - Math.min(...widths) >= 8,
      `${prefix} reflect the different English label lengths with content-sized widths.`);
  }
}

function removeAtRule(source, atRule) {
  const start = source.indexOf(atRule);
  assert.notEqual(start, -1, `The requested CSS enhancement block exists: ${atRule}`);
  const openingBrace = source.indexOf('{', start + atRule.length);
  assert.notEqual(openingBrace, -1, `The CSS enhancement block has an opening brace: ${atRule}`);
  let depth = 0;
  for (let index = openingBrace; index < source.length; index += 1) {
    if (source[index] === '{') depth += 1;
    else if (source[index] === '}') {
      depth -= 1;
      if (depth === 0) return `${source.slice(0, start)}${source.slice(index + 1)}`;
    }
  }
  throw new Error(`The CSS enhancement block is not balanced: ${atRule}`);
}

try {
  await vite.listen();
  const origin = `http://127.0.0.1:${vite.httpServer.address().port}`;
  browser = await launchBrowser({headless: true});
  page = await browser.newPage({viewport: {width: 1280, height: 800}});
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto(`${origin}/#/`, {waitUntil: 'networkidle'});
  await page.waitForFunction(() => document.querySelectorAll('#artworkGrid .artwork-select').length > 0);
  await page.evaluate(() => {
    window.__dropdownChanges = {language: 0, sort: 0};
    document.addEventListener('change', event => {
      if (event.target?.id === 'languagePreference') window.__dropdownChanges.language += 1;
      if (event.target?.id === 'gallerySort') window.__dropdownChanges.sort += 1;
    }, true);
  });
  fieldSizingSupported = await page.evaluate(() => CSS.supports('field-sizing', 'content'));
  assert(fieldSizingSupported, 'The acceptance browser supports field-sizing: content.');
  selectCapabilities = await page.evaluate(() => ({
    baseSelect: CSS.supports('appearance', 'base-select'),
    pickerPseudo: CSS.supports('selector(select::picker(select))'),
    pickerIconPseudo: CSS.supports('selector(select::picker-icon)'),
    optionCheckmarkPseudo: CSS.supports('selector(option::checkmark)'),
    openPseudo: CSS.supports('selector(select:open)')
  }));
  selectMode = await page.evaluate(() => getComputedStyle(document.querySelector('#languagePreference')).appearance === 'base-select'
    ? 'enhanced'
    : 'fallback');
  const galleryMode = await page.evaluate(() => getComputedStyle(document.querySelector('#gallerySort')).appearance === 'base-select'
    ? 'enhanced'
    : 'fallback');
  assert.equal(galleryMode, selectMode, 'Language and sort controls use the same select appearance mode.');
  if (selectMode === 'enhanced') {
    assert(selectCapabilities.baseSelect && selectCapabilities.pickerPseudo && selectCapabilities.optionCheckmarkPseudo,
      'The enhanced mode is backed by base-select, picker, and checkmark support.');
  }

  const viewports = [
    {width: 1280, height: 800},
    {width: 390, height: 844},
    {width: 320, height: 700}
  ];
  const languages = ['en', 'zh-CN'];
  const sorts = ['curated', 'name'];

  async function measureControls(surface, viewport, language) {
    const controls = await Promise.all(['#languagePreference', '#gallerySort']
      .map(selector => measureControl(page, selector)));

    measurements.push({surface, viewport, language, sort: await page.locator('#gallerySort').inputValue(), controls});
    for (const control of controls) assertCompactControl(control, viewport, surface, selectMode);
    return Object.fromEntries(controls.map(control => [control.selector, control]));
  }

  const responsiveWidths = {};
  for (const viewport of viewports) {
    responsiveWidths[viewport.width] = {language: {}, sort: {}};
    await page.setViewportSize(viewport);
    for (const language of languages) {
      const languageSelect = page.locator('#languagePreference');
      await languageSelect.selectOption(language);
      await page.waitForFunction(expected => document.documentElement.lang === expected, language);
      responsiveWidths[viewport.width].language[language] = null;
      responsiveWidths[viewport.width].sort[language] = {};

      for (const sort of sorts) {
        const sortSelect = page.locator('#gallerySort');
        await sortSelect.selectOption(sort);
        await page.waitForFunction(expected => {
          const select = document.querySelector('#gallerySort');
          const query = location.hash.split('?')[1] || '';
          const routeSort = new URLSearchParams(query).get('sort');
          return select.value === expected
            && (expected === 'curated' ? routeSort === null || routeSort === 'curated' : routeSort === expected);
        }, sort);
        const measured = await measureControls('gallery', viewport, language);
        responsiveWidths[viewport.width].language[language] = measured['#languagePreference'].box.width;
        responsiveWidths[viewport.width].sort[language][sort] = measured['#gallerySort'].box.width;
      }
    }

    const widths = responsiveWidths[viewport.width];
    assert(widths.language.en > widths.language['zh-CN'] + 5,
      `The language control shrinks for the shorter Chinese label at ${viewport.width}px.`);
    for (const language of languages) {
      assert(widths.sort[language].curated > widths.sort[language].name + 5,
        `The sort control shrinks from Curated to Name in ${language} at ${viewport.width}px.`);
    }
  }

  await page.setViewportSize(viewports[0]);
  const languageSelect = page.locator('#languagePreference');
  await languageSelect.selectOption('en');
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  const sortSelect = page.locator('#gallerySort');
  await sortSelect.selectOption('curated');
  await page.evaluate(() => document.activeElement?.blur());
  let languageReachedByTab = false;
  for (let index = 0; index < 12; index += 1) {
    await page.keyboard.press('Tab');
    if (await languageSelect.evaluate(element => document.activeElement === element)) {
      languageReachedByTab = true;
      break;
    }
  }
  assert(languageReachedByTab, 'The native language select is reachable in keyboard Tab order.');
  keyboardStatus.tabOrder = 'passed';
  assert.equal(await languageSelect.evaluate(element => element.tabIndex), 0,
    'The native language select remains in the keyboard tab order.');

  await page.locator('#artworkGrid .artwork-select').first().click();
  await page.waitForFunction(() => document.querySelector('#studioOverlay')?.open === true);
  const detailWidths = {};
  for (const viewport of viewports) {
    detailWidths[viewport.width] = {};
    await page.setViewportSize(viewport);
    for (const language of languages) {
      const detailLanguage = page.locator('#studioOverlay #languagePreference');
      await detailLanguage.selectOption(language);
      await page.waitForFunction(expected => document.documentElement.lang === expected, language);
      const detailControl = await measureControl(page, '#studioOverlay #languagePreference');
      detailControl.headerLayout = await page.locator('#studioOverlay .overlay-header').evaluate(header => {
        const box = element => {
          const rect = element.getBoundingClientRect();
          return {x: rect.x, y: rect.y, right: rect.right, bottom: rect.bottom,
            width: rect.width, height: rect.height, centerY: rect.top + rect.height / 2};
        };
        const title = header.querySelector('#overlayTitle');
        const control = header.querySelector('#languagePreference');
        const back = header.querySelector('#overlayBack');
        const backLabel = back.querySelector('span');
        const close = header.querySelector('#overlayClose');
        const headerBox = box(header);
        const titleBox = box(title);
        const controlBox = box(control);
        const backBox = box(back);
        const backLabelBox = box(backLabel);
        const closeBox = box(close);
        const backLabelStyle = getComputedStyle(backLabel);
        return {
          box: headerBox,
          display: getComputedStyle(header).display,
          title: {...titleBox, text: title.textContent.trim(), fontSize: parseFloat(getComputedStyle(title).fontSize)},
          control: {...controlBox, fontSize: parseFloat(getComputedStyle(control).fontSize)},
          back: backBox,
          backLabel: {
            ...backLabelBox,
            text: backLabel.textContent.trim(),
            fontSize: parseFloat(backLabelStyle.fontSize),
            lineHeight: parseFloat(backLabelStyle.lineHeight),
            lineHeightValue: backLabelStyle.lineHeight
          },
          close: closeBox,
          controlTitleGap: controlBox.x - titleBox.right,
          backTitleGap: titleBox.x - backBox.right,
          controlTopInset: controlBox.y - headerBox.y,
          controlBottomInset: headerBox.bottom - controlBox.bottom,
          controlCenterOffset: controlBox.centerY - headerBox.centerY,
          titleCenterOffset: titleBox.centerY - headerBox.centerY,
          backCenterOffset: backBox.centerY - headerBox.centerY,
          closeCenterOffset: closeBox.centerY - headerBox.centerY
        };
      });
      detailHeaderMeasurements.push({viewport, language, ...detailControl.headerLayout});
      detailControl.closeButtonBox = {x: detailControl.headerLayout.close.x, right: detailControl.headerLayout.close.right};
      const editorTabs = await measureEditorTabs(page);
      editorTabMeasurements.push({viewport, language, pointer: 'fine', ...editorTabs});
      const record = {surface: 'detail', viewport, language, sort: 'not-present', controls: [detailControl]};
      measurements.push(record);
      try {
        assertCompactControl(detailControl, viewport, 'detail', selectMode);
        assertEditorTabLayout(editorTabs, viewport, language, 'fine');
        const header = detailControl.headerLayout;
        assert(header.box.x >= -0.5 && header.box.right <= viewport.width + 0.5,
          `The detail header stays inside the ${viewport.width}px viewport.`);
        assert(Math.abs(header.box.height - 44) <= 1,
          `The detail title bar stays 44px high at ${viewport.width}px (${header.box.height}px).`);
        assert(header.box.height >= detailControl.box.height
          && header.box.height <= detailControl.box.height + 10,
        `The 44px title bar contains the 36px language control without excess vertical padding at ${viewport.width}px.`);
        assert(header.controlTopInset >= 3 && header.controlBottomInset >= 3,
          `The 36px detail language control keeps compact vertical breathing room at ${viewport.width}px.`);
        assert.equal(header.control.fontSize, 12,
          `The detail language control uses compact 12px text at ${viewport.width}px.`);
        assert.equal(header.display, 'grid',
          `The detail header uses its grid layout at ${viewport.width}px.`);
        assert(header.back.x >= header.box.x - 0.5 && header.back.right <= header.box.right + 0.5,
          `The detail back button stays inside the header at ${viewport.width}px.`);
        assert.equal(detailControl.box.height, 36,
          `The fine-pointer detail language control is 36px tall at ${viewport.width}px.`);
        assert(Math.abs(header.back.height - detailControl.box.height) <= 1,
          `The detail back button matches the 36px language control at ${viewport.width}px (${header.back.height}px).`);
        assert(Math.abs(header.close.height - 36) <= 1 && Math.abs(header.close.width - 36) <= 1,
          `The detail close target is a compact 36px square at ${viewport.width}px.`);
        assert(header.backTitleGap >= 4,
          `The detail back button keeps at least 4px before the title at ${viewport.width}px (${header.backTitleGap}px).`);
        assert(Number.isFinite(header.backLabel.lineHeight),
          `The detail back label exposes a numeric computed line-height at ${viewport.width}px (${header.backLabel.lineHeightValue}).`);
        assert(header.backLabel.height <= header.backLabel.lineHeight + 1,
          `The detail back label stays on one line at ${viewport.width}px (${header.backLabel.height}px high, line-height ${header.backLabel.lineHeight}px).`);
        assert(Math.abs(header.controlCenterOffset) <= 1.5,
          `The detail language control is vertically centered in the header at ${viewport.width}px.`);
        assert(Math.abs(header.titleCenterOffset) <= 2,
          `The detail title is vertically centered in the header at ${viewport.width}px.`);
        assert(Math.abs(header.backCenterOffset) <= 1.5,
          `The detail back button aligns vertically with the language control at ${viewport.width}px.`);
        assert(Math.abs(header.closeCenterOffset) <= 1.5,
          `The detail close button aligns vertically with the language control at ${viewport.width}px.`);
        assert(header.title.x >= header.box.x - 0.5 && header.title.right <= header.box.right + 0.5,
          `The detail title stays inside the header at ${viewport.width}px.`);
        assert(header.title.right <= header.control.x - 4,
          `The detail title keeps at least 4px before the language control at ${viewport.width}px.`);
        assert.equal(header.title.text, language === 'en' ? 'Character Studio' : '角色工作室',
          `The detail title follows the ${language} locale.`);
        assert(header.title.fontSize >= 12,
          `The detail title remains readable at 12px or larger (${header.title.fontSize}px at ${viewport.width}px).`);
        assert(detailControl.box.x + detailControl.box.width <= detailControl.closeButtonBox.x - 2,
          `The detail language control does not overlap the close button at ${viewport.width}px.`);
      } catch (error) {
        detailFailures.push({viewport: viewport.width, language, message: error.message});
      }
      detailWidths[viewport.width][language] = detailControl.box.width;
    }
    if (!(detailWidths[viewport.width].en > detailWidths[viewport.width]['zh-CN'] + 5)) {
      detailFailures.push({viewport: viewport.width, message: 'The detail language control does not shrink for the shorter Chinese label.'});
    }
  }
  assert.deepEqual(detailFailures, [], 'All six detail language layouts pass compact 36px control, 44px title-bar, tab, and width-response checks.');

  if (selectMode === 'enhanced' && selectCapabilities.openPseudo) {
    await page.setViewportSize(viewports[0]);
    const detailLanguage = page.locator('#studioOverlay #languagePreference');
    await detailLanguage.selectOption('en');
    await page.waitForFunction(() => document.documentElement.lang === 'en');
    await detailLanguage.focus();
    await detailLanguage.press('Space');
    await page.waitForFunction(() => document.querySelector('#languagePreference')?.matches(':open'));
    keyboardStatus.enhancedPickerOpen = 'passed';
    const detailHashBeforeEscape = await page.evaluate(() => location.hash);
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => !document.querySelector('#languagePreference')?.matches(':open'));
    const afterPickerEscape = await page.evaluate(() => ({
      dialogOpen: document.querySelector('#studioOverlay')?.open,
      hash: location.hash,
      focusId: document.activeElement?.id
    }));
    assert.equal(afterPickerEscape.dialogOpen, true, 'Escape closes the enhanced picker without closing the detail dialog.');
    assert.equal(afterPickerEscape.hash, detailHashBeforeEscape, 'Escape from the enhanced picker keeps the detail route.');
    assert.equal(afterPickerEscape.focusId, 'languagePreference', 'Escape returns focus to the language select.');
    keyboardStatus.escapeKeepsDetailOpen = 'passed';

    const languageChangeCount = await page.evaluate(() => window.__dropdownChanges.language);
    await detailLanguage.focus();
    await detailLanguage.press('Space');
    await page.waitForFunction(() => document.querySelector('#languagePreference')?.matches(':open'));
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.documentElement.lang === 'zh-CN'
      && document.querySelector('#languagePreference')?.value === 'zh-CN');
    assert.equal(await page.evaluate(() => document.querySelector('#studioOverlay')?.open), true,
      'Changing language from the enhanced picker keeps the detail dialog open.');
    assert.equal(await detailLanguage.getAttribute('aria-label'), '语言',
      'The language control label follows its selected locale.');
    assert.equal(await page.evaluate(() => document.activeElement?.id), 'languagePreference',
      'Changing language keeps keyboard focus on the same native select.');
    assert((await page.evaluate(() => window.__dropdownChanges.language)) > languageChangeCount,
      'Keyboard selection dispatches the existing language change handler.');
    keyboardStatus.languageSelection = 'passed';

    await page.locator('#overlayClose').click();
    await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
    const galleryLanguage = page.locator('#languagePreference');
    await galleryLanguage.selectOption('en');
    await page.waitForFunction(() => document.documentElement.lang === 'en');
    const gallerySort = page.locator('#gallerySort');
    await gallerySort.selectOption('curated');
    await page.waitForFunction(() => document.querySelector('#gallerySort')?.value === 'curated');
    const sortChangeCount = await page.evaluate(() => window.__dropdownChanges.sort);
    await gallerySort.focus();
    await gallerySort.press('Space');
    await page.waitForFunction(() => document.querySelector('#gallerySort')?.matches(':open'));
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.querySelector('#gallerySort')?.value === 'name'
      && new URLSearchParams(location.hash.split('?')[1] || '').get('sort') === 'name');
    assert((await page.evaluate(() => window.__dropdownChanges.sort)) > sortChangeCount,
      'Keyboard selection dispatches the existing sort change handler.');
    keyboardStatus.sortSelection = 'passed';
  } else {
    keyboardStatus.enhancedPickerOpen = 'not-supported-by-test-browser';
    keyboardStatus.escapeKeepsDetailOpen = 'not-supported-by-test-browser';
    keyboardStatus.languageSelection = 'not-tested-by-headless-fallback';
    keyboardStatus.sortSelection = 'not-tested-by-headless-fallback';
  }

  if (await page.locator('#studioOverlay').evaluate(dialog => dialog.open)) {
    await page.locator('#overlayClose').click();
    await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  }
  await page.setViewportSize({width: 320, height: 700});
  const narrowGalleryLanguage = page.locator('#languagePreference');
  await narrowGalleryLanguage.selectOption('en');
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  const chestnutCard = page.locator('#card-candidate-humans-20261005');
  assert.equal(await chestnutCard.count(), 1, 'The chestnut character case is available in the gallery.');
  await chestnutCard.click();
  await page.waitForFunction(() => document.querySelector('#studioOverlay')?.open === true);
  const chestnutTabs = await measureEditorTabs(page);
  assert.equal(chestnutTabs.tabs.length, 4, 'The 320px chestnut character case exposes all four editor categories.');
  assertEditorTabLayout(chestnutTabs, {width: 320, height: 700}, 'en', 'fine');
  const lastChestnutTab = page.locator('#studioOverlay .studio-editor-tabs .studio-editor-tab').last();
  await lastChestnutTab.evaluate(button => button.scrollIntoView({block: 'nearest', inline: 'nearest'}));
  const lastTabVisibleBeforeClick = await lastChestnutTab.evaluate(button => {
    const nav = button.closest('.studio-editor-tabs').getBoundingClientRect();
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const hit = document.elementFromPoint(x, y);
    return {insideNav: rect.left >= nav.left - 1 && rect.right <= nav.right + 1,
      receivesHit: hit === button || button.contains(hit), text: button.textContent.trim()};
  });
  assert(lastTabVisibleBeforeClick.insideNav && lastTabVisibleBeforeClick.receivesHit,
    `The final 320px chestnut tab is fully visible and hit-testable before click: ${JSON.stringify(lastTabVisibleBeforeClick)}`);
  await lastChestnutTab.click();
  await page.waitForFunction(() => document.querySelector('#studioOverlay .studio-editor-tabs .studio-editor-tab:last-child')?.getAttribute('aria-selected') === 'true');
  narrowFourTabMeasurement = {status: 'passed', language: 'en', viewport: {width: 320, height: 700}, tabs: chestnutTabs, finalTab: lastTabVisibleBeforeClick};

  fallbackPage = await browser.newPage({viewport: {width: 390, height: 844}});
  fallbackPage.on('pageerror', error => pageErrors.push(`fallback: ${error.message}`));
  fallbackPage.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(`fallback: ${message.text()}`);
  });
  let enhancementBlockRemoved = false;
  await fallbackPage.route('**/studio.css*', async route => {
    const response = await route.fetch();
    const source = await response.text();
    const fallbackCss = removeAtRule(source, '@supports (appearance:base-select)');
    enhancementBlockRemoved = fallbackCss !== source;
    await route.fulfill({response, body: fallbackCss});
  });
  await fallbackPage.goto(`${origin}/#/`, {waitUntil: 'networkidle'});
  await fallbackPage.waitForFunction(() => document.querySelectorAll('#artworkGrid .artwork-select').length > 0);
  assert(enhancementBlockRemoved, 'The fallback page removed only the base-select enhancement block.');
  const fallbackSupport = await fallbackPage.evaluate(() => ({
    browserSupportsBaseSelect: CSS.supports('appearance', 'base-select'),
    languageAppearance: getComputedStyle(document.querySelector('#languagePreference')).appearance,
    sortAppearance: getComputedStyle(document.querySelector('#gallerySort')).appearance
  }));
  assert.equal(fallbackSupport.languageAppearance, 'none', 'The simulated fallback uses the existing native-select styling.');
  assert.equal(fallbackSupport.sortAppearance, 'none', 'The simulated fallback uses the existing native-select styling for sort.');
  const fallbackViewport = {width: 390, height: 844};
  const fallbackLanguage = await measureControl(fallbackPage, '#languagePreference');
  const fallbackSort = await measureControl(fallbackPage, '#gallerySort');
  fallbackMeasurements.push({surface: 'gallery', viewport: fallbackViewport, controls: [fallbackLanguage, fallbackSort]});
  assertCompactControl(fallbackLanguage, fallbackViewport, 'simulated fallback', 'fallback');
  assertCompactControl(fallbackSort, fallbackViewport, 'simulated fallback', 'fallback');
  await fallbackPage.locator('#languagePreference').selectOption('zh-CN');
  await fallbackPage.waitForFunction(() => document.documentElement.lang === 'zh-CN'
    && document.querySelector('#languagePreference')?.getAttribute('aria-label') === '语言');
  await fallbackPage.locator('#gallerySort').selectOption('name');
  await fallbackPage.waitForFunction(() => document.querySelector('#gallerySort')?.value === 'name'
    && new URLSearchParams(location.hash.split('?')[1] || '').get('sort') === 'name');
  keyboardStatus.fallbackSelections = 'passed';
  fallbackSimulation = {
    status: 'passed-as-css-degradation-simulation',
    method: 'Removed @supports (appearance:base-select) from the local stylesheet response; the Chromium engine still supports base-select.',
    browserSupportsBaseSelect: fallbackSupport.browserSupportsBaseSelect,
    languageAppearance: fallbackSupport.languageAppearance,
    sortAppearance: fallbackSupport.sortAppearance,
    viewport: fallbackViewport,
    measuredControls: fallbackMeasurements[0].controls.length
  };

  coarseContext = await browser.newContext({
    viewport: {width: 390, height: 844},
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const coarsePage = await coarseContext.newPage();
  coarsePage.on('pageerror', error => pageErrors.push(`coarse: ${error.message}`));
  coarsePage.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(`coarse: ${message.text()}`);
  });
  await coarsePage.goto(`${origin}/#/`, {waitUntil: 'networkidle'});
  await coarsePage.waitForFunction(() => document.querySelectorAll('#artworkGrid .artwork-select').length > 0);
  const coarsePointer = await coarsePage.evaluate(() => matchMedia('(pointer:coarse)').matches);
  assert.equal(coarsePointer, true, 'The touch context actually exposes a coarse primary pointer.');
  await coarsePage.locator('#artworkGrid .artwork-select').first().tap();
  await coarsePage.waitForFunction(() => document.querySelector('#studioOverlay')?.open === true);
  const coarseViewport = {width: 390, height: 844};
  const coarseLanguage = coarsePage.locator('#studioOverlay #languagePreference');
  await coarseLanguage.selectOption('zh-CN');
  await coarsePage.waitForFunction(() => document.documentElement.lang === 'zh-CN');
  const coarseControl = await measureControl(coarsePage, '#studioOverlay #languagePreference');
  assertCompactControl(coarseControl, coarseViewport, 'detail', selectMode, 'coarse');
  const coarseTabs = await measureEditorTabs(coarsePage);
  assertEditorTabLayout(coarseTabs, coarseViewport, 'zh-CN', 'coarse');
  const coarseHeader = await coarsePage.locator('#studioOverlay .overlay-header').evaluate(header => {
    const rect = element => {
      const box = element.getBoundingClientRect();
      return {x: box.x, right: box.right, width: box.width, height: box.height, centerY: box.top + box.height / 2};
    };
    const headerBox = rect(header);
    const back = rect(header.querySelector('#overlayBack'));
    const title = rect(header.querySelector('#overlayTitle'));
    const language = rect(header.querySelector('#languagePreference'));
    const close = rect(header.querySelector('#overlayClose'));
    return {box: headerBox, display: getComputedStyle(header).display, back, title, language, close,
      titleBackGap: title.x - back.right, titleLanguageGap: language.x - title.right,
      controlCloseGap: close.x - (language.x + language.width)};
  });
  assert(Math.abs(coarseHeader.box.height - 48) <= 1,
    `The coarse-pointer dialog title bar stays compact at 48px while holding 44px targets: ${JSON.stringify(coarseHeader)}`);
  assert.equal(coarseHeader.display, 'grid');
  assert(Math.abs(coarseHeader.back.height - 44) <= 1
    && Math.abs(coarseHeader.close.height - 44) <= 1
    && Math.abs(coarseHeader.close.width - 44) <= 1,
  `Coarse-pointer Back and Close retain 44px targets: ${JSON.stringify(coarseHeader)}`);
  assert(coarseHeader.titleBackGap >= 4 && coarseHeader.titleLanguageGap >= 4
    && coarseHeader.controlCloseGap >= 2,
  `Coarse-pointer header controls do not overlap: ${JSON.stringify(coarseHeader)}`);
  coarsePointerMeasurements.push({viewport: coarseViewport, pointer: 'coarse', language: 'zh-CN', control: coarseControl, header: coarseHeader, tabs: coarseTabs});
  coarsePointerStatus = 'passed';
} catch (error) {
  failure = {name: error.name, message: error.message, stack: error.stack};
  if (keyboardStatus.tabOrder === 'not-run') keyboardStatus.tabOrder = 'failed';
} finally {
  try {
    await coarseContext?.close();
  } catch (error) {
    cleanupErrors.push(`coarse context close: ${error.message}`);
  }
  try {
    await browser?.close();
  } catch (error) {
    cleanupErrors.push(`browser close: ${error.message}`);
  }
  try {
    await vite.close();
  } catch (error) {
    cleanupErrors.push(`Vite close: ${error.message}`);
  }
}

const passed = !failure && pageErrors.length === 0 && cleanupErrors.length === 0;
const report = {
  passed,
  testedViewports: [1280, 390, 320],
  testedLanguages: ['en', 'zh-CN'],
  testedSorts: ['curated', 'name'],
  fieldSizingSupported,
  selectCapabilities,
  selectMode,
  fallbackSimulation,
  nonChromiumNativeMenu: 'not-tested-by-this-Chromium-verifier',
  pickerPixelAppearance: 'not-measured-by-headless-layout-verifier',
  responsiveWidths: measurements.filter(item => item.surface === 'gallery').reduce((result, item) => {
    result[item.viewport.width] ||= {};
    result[item.viewport.width][item.language] ||= {};
    const controls = Object.fromEntries(item.controls.map(control => [control.selector, control.box.width]));
    result[item.viewport.width][item.language][item.sort] = controls;
    return result;
  }, {}),
  measurements,
  detailHeaderMeasurements,
  editorTabMeasurements,
  fallbackMeasurements,
  coarsePointer: {status: coarsePointerStatus, measurements: coarsePointerMeasurements},
  narrowFourTab: narrowFourTabMeasurement,
  keyboard: keyboardStatus,
  pageErrors,
  consoleErrors,
  cleanupErrors,
  detailFailures,
  failure
};
await fs.writeFile(path.join(output, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);

if (passed) {
  console.log(JSON.stringify({
    passed,
    viewports: report.testedViewports,
    languages: report.testedLanguages,
    sorts: report.testedSorts,
    controlsMeasured: measurements.reduce((sum, item) => sum + item.controls.length, 0),
    keyboard: report.keyboard,
    report: path.join(output, 'report.json')
  }, null, 2));
} else {
  console.error(JSON.stringify({passed, failure, pageErrors, consoleErrors, cleanupErrors, report: path.join(output, 'report.json')}, null, 2));
  process.exitCode = 1;
}
