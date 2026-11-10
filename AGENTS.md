# AGENTS.md

Guidance for any AI coding agent (Claude Code, Codex, Gemini, Copilot, Cursor, …) picking this repo up on a fresh machine. Humans: see `README.md`.

## What this is

Mario Tristan's personal site, live at https://mariotristan.github.io/personal-site-2027/ (GitHub Pages). It is a migration of the older `quickstart` site (https://mariotristan.github.io/quickstart/), restyled after two of Mario's other sites:

- **Visual design:** `tristan-second-brain-public` (pill nav, uppercase hero, rounded panels, mono labels, drifting node network, scroll fade-ups).
- **Colour tokens:** `jarvis-tristan` (indigo `#3F51D8` / cyan `#22D3EE`, deep navy dark theme plus a light variant).

Owner: Mario Tristan (GitHub `mariotristan`).

## Stack and commands

Vite + vanilla JS + plain CSS. No framework, no Bootstrap (both were removed on purpose).

```bash
npm ci
npm run dev       # http://localhost:3000/personal-site-2027/
npm run build     # outputs to docs/
npm run lint      # eslint src
npm run preview   # serve the built docs/
```

Always run `npm run lint && npm run build` before committing.

## Layout

| Path | Purpose |
|---|---|
| `index.html` | Home page shell and static copy (hero, section headings, contact). Lives at the repo root, not in `public/`. |
| `resume.html` + `src/resume.js` | Separate resume page (`/resume.html`), rendered from the `resume` export in `data.js`; has print styles, and its "Print / save as PDF" button uses the browser's print dialog (no PDF file is stored). |
| `src/data.js` | **All list content**: profile, socials, technologies, experience, education, certifications, articles, resume. Edit content here. |
| `src/main.js` | Home page: renders `data.js`, GitHub repos fetch, nav highlighting. |
| `src/common.js` | Shared by both pages: theme toggle, scroll reveal, network canvas, card glow. |
| `src/style.css` | All styling, driven by CSS custom properties; dark default, `[data-theme='light']` override. |
| `public/` | Static files copied as-is by Vite: `images/`, `404.html`, `.nojekyll`. |
| `docs/` | **Build output, committed.** Do not hand-edit; rebuild instead. |
| `.github/workflows/deploy.yml` | On push to `main`: `npm ci`, lint, build, upload `docs/`, deploy to Pages. |

## Deployment

- Pushing to `main` deploys automatically. Check with `gh run list --limit 3`.
- `vite.config.js` sets `base: '/personal-site-2027/'`, `outDir: 'docs'` with `emptyOutDir: true`, and two entry pages (`index.html`, `resume.html`); add any new page to `build.rollupOptions.input`. Anything that must survive a build (`.nojekyll`, `404.html`) has to live in `public/`, never directly in `docs/`.
- Inside `index.html`, root-relative asset URLs (`/images/...`) get the base prefix from Vite. Plain relative links (e.g. `files/...`) are left as written and work because the page is served from the base path.

## Conventions

- Match the existing code style: no framework, small functions, `esc()` around every interpolated string in `main.js` templates, `rel="noopener noreferrer"` on external links.
- New browser globals used in `src/` must be added to `eslint.config.js` (flat config, no `env`), or lint fails with `no-undef`.
- Respect `prefers-reduced-motion`; keep both themes working; keep focus outlines and aria labels.
- Commit messages: conventional prefix (`feat:`, `fix:`), and end with the co-author trailer the harness gives you. To auto-close issues, repeat the keyword per issue (`Closes #2, closes #4`); `Closes #2, #4` only closes the first.
- Commit and push only when Mario asks.

## Decisions already made (don't relitigate)

- **No blog section.** The old site's blog was intentionally left out of the migration.
- **No Vue or Bootstrap.** Removed as unused.
- **Contact email stays `mariotristan@gmail.com`**; Twitter and Instagram stay in the socials.
- **Nine Copilot-generated issues (#1, #2, #4, #5, #7, #9, #10, #11, #15)** were all addressed and closed.

## Known gotchas and open items

The improvement backlog lives in GitHub issues (`gh issue list`); pick one, branch, and open a PR with `Closes #N`. Issues needing Mario's input are labelled `help wanted`.

- **Articles titles are guesses.** LinkedIn blocks automated reads, so titles in `articles` (in `src/data.js`) were inferred from URL slugs. Several are probably slightly wrong (e.g. "Same Loop, Different Levels: Human", "Your Career Cards", the "Passion and Purpose in Consulting…" one). Replace with the real titles when Mario provides them; dates and summaries are also missing.
- **LinkedIn handle unverified.** `https://www.linkedin.com/in/mariotristan/` returns "Profile Not Found" to logged-out requests. The old site used two different LinkedIn URLs. Confirm the real handle with Mario and fix it in `socials`.
- **Resume is an HTML page, not a PDF.** The old 2024 PDF was removed because it contained PII. Keep PII (phone number, home address) out of `data.js` and the repo; the work email is fine. The resume uses `mariotristan@outlook.com`, while the home page contact uses the gmail address, so confirm which one Mario wants.
- **Old resume PDF was purged from git history** in both this repo and `quickstart` (history rewritten and force-pushed on 2026-11-10), so commit hashes before that date no longer exist. `main` is branch-protected against force-pushes; a future history rewrite means temporarily allowing them via the API and restoring the rule afterwards.
- **Resume data differences vs the home page.** The resume (Mario's own baseline text) differs from `experience` in `data.js` on a few dates and titles, e.g. FEMSA Systems Coordinator starts May 2011 vs Sep 2007, Accenture DevOps Manager ends July 2021 vs Aug 2021, Chubb is "DevOps Principal Engineer" vs "Principal DevOps Engineer", and Slalom is Director, Client Delivery from September 2026 (Mario's promotion) plus Senior Principal Platform Engineer from March 2025 to August 2026. The Director bullets come from Mario's own description of the role (culture, delivery, financial health, multimillion-dollar GCP/AWS migrations). The AWS line in the baseline said "AKS" (an Azure service); it was changed to "EKS" on the assumption of a typo.
- **GitHub Actions and Applied Skills certs share one URL** in `certifications` (same as the old site).
- **Recently updated repos** are fetched client-side from the public GitHub API (`/users/mariotristan/repos?sort=pushed`), skipping forks and archived repos, six shown, cached in `sessionStorage` for an hour. Repos with `has_pages` get a "Live site" link (`homepage` if set, otherwise `https://mariotristan.github.io/<repo>/`). Unauthenticated rate limit is 60 requests/hour per IP; on failure the section falls back to a link to GitHub.
- **Stale docs in the repo:** `README.md` still describes Bootstrap/Vue, and `SETUP_SUMMARY.md` and `GITHUB_PAGES_VERIFICATION.md` are leftovers from the initial Copilot scaffolding. Update or delete them when convenient.
- **Hero focus words** ("DevOps · DevSecOps · Cloud · Delivery") and the "19+ years" stat (computed from 2007) were the assistant's choices, derived from job titles.

## Verifying visually

Headless Chrome works for screenshots (it cannot go narrower than about 500px, so it is not a reliable mobile check):

```bash
npm run build && npx vite preview --port 4173 &
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --virtual-time-budget=30000 --run-all-compositor-stages-before-draw \
  --screenshot=/tmp/site.png --window-size=1280,6000 \
  http://localhost:4173/personal-site-2027/
```

Use the long virtual-time budget, otherwise the scroll-reveal sections are captured mid-fade.

## Reading the source sites

- `curl` the raw HTML to get real CSS; fetch tools that return markdown hide styles.
- `https://mariotristan.github.io/jarvis-tristan/assets/site.css` holds the jarvis tokens; the second-brain site has its CSS and scripts inline in its HTML.
