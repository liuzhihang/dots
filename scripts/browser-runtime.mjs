import fs from 'node:fs/promises';
import {accessSync, constants, existsSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';

const require = createRequire(import.meta.url);

function moduleSpecifier(value, cwd) {
  if (value.startsWith('file:')) return value;
  if (path.isAbsolute(value) || value.startsWith('.') || value.includes(path.sep)) {
    return pathToFileURL(path.resolve(cwd, value)).href;
  }
  return value;
}

async function isFile(filePath) {
  try {
    return (await fs.stat(filePath)).isFile();
  } catch {
    return false;
  }
}

/**
 * Resolve Playwright in the documented precedence order: explicit override,
 * project-local dependency, then any bundled Codex runtime under the current
 * user's home directory. No machine-specific username is embedded here.
 */
export async function resolvePlaywrightModule({
  env = process.env,
  cwd = process.cwd(),
  home = os.homedir(),
  localResolver = () => require.resolve('playwright'),
  readDirectory = directory => fs.readdir(directory, {withFileTypes: true}),
  fileCheck = isFile
} = {}) {
  const override = env.DOTS_PLAYWRIGHT_MODULE?.trim();
  if (override) {
    const specifier = moduleSpecifier(override, cwd);
    if (specifier.startsWith('file:') && !await fileCheck(new URL(specifier))) {
      throw new Error(`DOTS_PLAYWRIGHT_MODULE does not point to a file: ${override}`);
    }
    return specifier;
  }

  try {
    const localPath = localResolver();
    if (localPath) return pathToFileURL(localPath).href;
  } catch {
    // Playwright is optional in the project's dependency tree.
  }

  const runtimeRoot = path.join(home, '.cache', 'codex-runtimes');
  let entries;
  try {
    entries = await readDirectory(runtimeRoot);
  } catch {
    entries = [];
  }
  const runtimes = entries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort().reverse();
  for (const runtime of runtimes) {
    const packageRoot = path.join(runtimeRoot, runtime, 'dependencies', 'node', 'node_modules', 'playwright');
    for (const filename of ['index.mjs', 'index.js']) {
      const candidate = path.join(packageRoot, filename);
      if (await fileCheck(candidate)) return pathToFileURL(candidate).href;
    }
  }

  throw new Error('Playwright was not found. Set DOTS_PLAYWRIGHT_MODULE, install local playwright, or provide the Codex bundled runtime.');
}

/** Load the Chromium API from the resolved Playwright module. */
export async function loadChromium(options = {}) {
  const moduleUrl = await resolvePlaywrightModule(options);
  const playwright = await import(moduleUrl);
  if (!playwright.chromium?.launch) throw new Error(`Playwright module has no Chromium launcher: ${moduleUrl}`);
  return {chromium: playwright.chromium, moduleUrl};
}

function executableFile(filePath) {
  try {
    accessSync(filePath, constants.X_OK);
    return existsSync(filePath);
  } catch {
    return false;
  }
}

/**
 * Resolve an installed browser binary. An explicit bad override is reported
 * immediately; without one, Playwright may use its managed Chromium build.
 */
export async function resolveChromeExecutable({
  env = process.env,
  home = os.homedir(),
  platform = process.platform,
  pathValue = env.PATH || '',
  fileCheck = async candidate => executableFile(candidate)
} = {}) {
  const override = env.DOTS_CHROME_PATH?.trim() || env.CHROME_PATH?.trim();
  if (override) {
    if (!await fileCheck(override)) throw new Error(`Chrome override does not point to an executable file: ${override}`);
    return override;
  }

  const appCandidates = platform === 'darwin' ? [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    path.join(home, 'Applications/Google Chrome.app/Contents/MacOS/Google Chrome'),
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    path.join(home, 'Applications/Chromium.app/Contents/MacOS/Chromium')
  ] : [];
  for (const candidate of appCandidates) if (await fileCheck(candidate)) return candidate;

  const names = platform === 'win32'
    ? ['chrome.exe', 'chromium.exe']
    : ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome'];
  for (const directory of pathValue.split(path.delimiter).filter(Boolean)) {
    for (const name of names) {
      const candidate = path.join(directory, name);
      if (await fileCheck(candidate)) return candidate;
    }
  }
  return undefined;
}

/** Resolve and launch Chromium, passing an executable only when one is found. */
export async function launchBrowser(options = {}) {
  const {env = process.env, ...launchOptions} = options;
  const {chromium} = await loadChromium({env});
  const executablePath = await resolveChromeExecutable({env});
  if (executablePath) launchOptions.executablePath = executablePath;
  return chromium.launch(launchOptions);
}
