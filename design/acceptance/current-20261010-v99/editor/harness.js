const status = document.querySelector('#harnessStatus');
const response = await fetch('/');
if (!response.ok) throw new Error(`Could not load the local application shell (${response.status}).`);
const source = new DOMParser().parseFromString(await response.text(), 'text/html');
source.querySelectorAll('script').forEach(script => script.remove());
document.title = source.title;
document.documentElement.lang = source.documentElement.lang || 'en';
document.documentElement.dataset.studioBoot = 'manual';
document.body.replaceChildren(...[...source.body.childNodes].map(node => document.importNode(node, true)));

// This external QA harness imports the production bootstrap without bypassing
// public template eligibility. Approved templates open through the same path
// as the deployed application.
const { bootStudio } = await import('/studio.js?v=99');
window.__dotsQAApp = bootStudio({ detailOptions: { reviewHarness: false } });
status.remove();
