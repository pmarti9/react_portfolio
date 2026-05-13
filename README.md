## Parker Martin Portfolio

Single-page React portfolio site deployed as a static build (GitHub Pages ready).

## Stack

- React 18
- React Router DOM v6 (using `HashRouter` for static-host-safe routing)
- Bootstrap 5
- Font Awesome

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

3. Run tests:

```bash
npm test -- --watchAll=false
```

## Production Build

```bash
npm run build
```

Build output is generated in the `build/` directory.

## Deployment (GitHub Pages)

This project includes `gh-pages` and a `homepage` value in `package.json`.

Deploy:

```bash
npm run predeploy
npx gh-pages -d build
```

The app uses hash-based routing, so static hosting refreshes and deep links work reliably:

- `/#/`
- `/#/portfolio`
- `/#/contact`

## Content Update Guide

- Home/about content: `src/components/pages/home/Home.jsx`
- Contact info: `src/components/pages/contact/Contact.jsx`
- Portfolio links/resume: `src/components/pages/portfolio/Portfolio.jsx`
- Navigation labels/routes: `src/components/navigation/NavTabs.jsx`

## Notes

- TypeScript migration intentionally deferred.
- No axios dependency is used or required.
