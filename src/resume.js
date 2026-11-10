import './style.css';
import { initCardGlow, initNetwork, initReveal, initTheme } from './common.js';
import { certifications, education, resume } from './data.js';

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const ext = 'target="_blank" rel="noopener noreferrer"';

initTheme();

$('r-title').textContent = resume.title;
$('r-name').textContent = resume.name;
$('r-contact').innerHTML = [
  `<span><a href="mailto:${esc(resume.email)}">${esc(resume.email)}</a></span>`,
  `<span><a href="${esc(resume.linkedin)}" ${ext}>LinkedIn</a></span>`,
  `<span><a href="https://mariotristan.github.io/personal-site-2027/">mariotristan.github.io</a></span>`,
].join('');
$('r-summary').textContent = resume.summary;
$('r-highlights').innerHTML = resume.highlights.map((h) => `<li>${esc(h)}</li>`).join('');

$('r-roles').innerHTML = resume.roles
  .map(
    (r) => `<article class="card role reveal">
      <span class="tag">${esc(r.period)}</span>
      <h3>${esc(r.title)} · ${esc(r.company)}</h3>
      <ul class="bullets">${r.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    </article>`,
  )
  .join('');

$('r-expertise').innerHTML = resume.expertise
  .map(
    (e) => `<article class="card">
      <h3>${esc(e.area)}</h3>
      <ul class="bullets">${e.lines.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
    </article>`,
  )
  .join('');

$('r-education').innerHTML = education
  .map(
    (e) => `<article class="card">
      <span class="tag">${esc(e.period)}</span>
      <h3>${esc(e.degree)}</h3>
      <p>${esc(e.school)}</p>
    </article>`,
  )
  .join('');

$('r-certs').innerHTML = certifications
  .map(
    (g) => `<article class="card">
      <h3>${esc(g.issuer)} <span class="count">${g.items.length}</span></h3>
      <ul class="cert-list">
        ${g.items
          .map((c) => `<li><a href="${esc(c.href)}" ${ext}>${esc(c.name)}<span aria-hidden="true">↗</span></a></li>`)
          .join('')}
      </ul>
    </article>`,
  )
  .join('');

$('year').textContent = new Date().getFullYear();
$('print').addEventListener('click', () => window.print());

initReveal();
initCardGlow();
initNetwork();
