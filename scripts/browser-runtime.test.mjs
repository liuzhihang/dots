import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {after, test} from 'node:test';
import {resolveChromeExecutable, resolvePlaywrightModule} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {createReviewOutputDirectory} from './review-output.mjs';

const temporaryRoot = path.resolve('.artifacts/browser-runtime-tests');
await fs.mkdir(temporaryRoot, {recursive: true});
const testRoot = await fs.mkdtemp(path.join(temporaryRoot, 'case-'));
const fixture = (...parts) => path.join(testRoot, ...parts);

after(async () => {
  await fs.rm(testRoot, {recursive: true, force: true});
});

test('explicit Playwright module override takes precedence and resolves relative paths from cwd', async () => {
  const modulePath = fixture('explicit', 'override', 'playwright.mjs');
  await fs.mkdir(path.dirname(modulePath), {recursive: true});
  await fs.writeFile(modulePath, 'export const chromium = {};');
  const actual = await resolvePlaywrightModule({
    env: {DOTS_PLAYWRIGHT_MODULE: path.relative(process.cwd(), modulePath)},
    cwd: process.cwd(),
    home: fixture('empty-home'),
    localResolver: () => { throw new Error('local should not be consulted'); }
  });
  assert.equal(actual, pathToFileURL(modulePath).href);
});

test('project-local Playwright takes precedence over discovered Codex bundles', async () => {
  const localModule = fixture('local-case', 'local', 'playwright', 'index.mjs');
  const bundledModule = fixture('local-case', 'home', '.cache', 'codex-runtimes', 'runtime-z', 'dependencies', 'node', 'node_modules', 'playwright', 'index.mjs');
  await fs.mkdir(path.dirname(localModule), {recursive: true});
  await fs.mkdir(path.dirname(bundledModule), {recursive: true});
  await Promise.all([fs.writeFile(localModule, ''), fs.writeFile(bundledModule, '')]);
  const actual = await resolvePlaywrightModule({
    env: {},
    home: fixture('local-case', 'home'),
    localResolver: () => localModule
  });
  assert.equal(actual, pathToFileURL(localModule).href);
});

test('Codex Playwright discovery does not depend on a fixed runtime or username', async () => {
  const bundledModule = fixture('codex-case', 'home', '.cache', 'codex-runtimes', 'runtime-a', 'dependencies', 'node', 'node_modules', 'playwright', 'index.mjs');
  await fs.mkdir(path.dirname(bundledModule), {recursive: true});
  await fs.writeFile(bundledModule, 'export const chromium = {};');
  const actual = await resolvePlaywrightModule({
    env: {},
    home: fixture('codex-case', 'home'),
    localResolver: () => { throw new Error('no local package'); }
  });
  assert.equal(actual, pathToFileURL(bundledModule).href);
});

test('DOTS_CHROME_PATH overrides legacy path and invalid overrides fail clearly', async () => {
  const executable = fixture('chrome', 'chrome');
  await fs.mkdir(path.dirname(executable), {recursive: true});
  await fs.writeFile(executable, '#!/bin/sh\n');
  await fs.chmod(executable, 0o755);
  assert.equal(await resolveChromeExecutable({
    env: {DOTS_CHROME_PATH: executable, CHROME_PATH: fixture('missing')},
    platform: 'linux',
    fileCheck: async candidate => candidate === executable
  }), executable);
  await assert.rejects(resolveChromeExecutable({
    env: {DOTS_CHROME_PATH: fixture('missing')},
    platform: 'linux',
    fileCheck: async () => false
  }), /does not point to an executable file/);
});

test('system browser discovery searches PATH when no explicit override exists', async () => {
  const executable = fixture('bin', 'chromium');
  await fs.mkdir(path.dirname(executable), {recursive: true});
  await fs.writeFile(executable, '#!/bin/sh\n');
  await fs.chmod(executable, 0o755);
  assert.equal(await resolveChromeExecutable({
    env: {PATH: path.dirname(executable)},
    pathValue: path.dirname(executable),
    platform: 'linux',
    fileCheck: async candidate => candidate === executable
  }), executable);
});

test('evidence override is the complete shared output directory', () => {
  const override = path.join(testRoot, 'shared-run');
  const original = process.env.DOTS_EVIDENCE_DIR;
  process.env.DOTS_EVIDENCE_DIR = override;
  try {
    assert.equal(resolveEvidenceDirectory('.artifacts/browser-acceptance'), override);
  } finally {
    if (original === undefined) delete process.env.DOTS_EVIDENCE_DIR;
    else process.env.DOTS_EVIDENCE_DIR = original;
  }
});

test('review output supports --output and refuses to replace existing evidence', async () => {
  const output = fixture('candidate-package');
  const created = await createReviewOutputDirectory({name: 'fixture', args: ['--output', output], env: {}});
  assert.equal(created, output);
  assert.equal((await fs.stat(created)).isDirectory(), true);
  await assert.rejects(createReviewOutputDirectory({name: 'fixture', args: ['--output', output], env: {}}), /Refusing to overwrite/);
});
