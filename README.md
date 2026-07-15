# FBI Art Crimes Dashboard

A searchable dashboard for the [FBI Art Crimes database](https://www.fbi.gov/investigate/violent-crime/art-theft), built with React and TypeScript.

Browse stolen and missing artwork, filter by title or crime category, and view detailed records for individual cases.

**Live demo:** https://emmamikaelsdotter.github.io/fbi-art-crimes-dashboard/

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — dev server and bundler
- **TanStack Query** — data fetching and caching
- **React Router** — client-side routing
- **Vitest** + **React Testing Library** — unit and component tests
- **Playwright** — end-to-end tests

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

By default the app uses bundled sample data (`VITE_USE_MOCK=true` in `.env`). To hit the live FBI API (`https://api.fbi.gov/artcrimes`) instead, set `VITE_USE_MOCK=false` in `.env`.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit and component tests (Vitest) |
| `npm run test:e2e` | Run end-to-end tests (Playwright) |

## Project structure

```
src/
  api/            # API client (real + mock implementations)
  features/
    artcrimes/    # Table, detail view, search controls, pagination
  hooks/          # useArtCrimes, useArtCrimeDetail, useDebounce
  types/          # Shared TypeScript types
  mocks/          # Sample data for local development
e2e/              # Playwright tests
```

## Key decisions

- **Mock + real data layer behind one interface (env toggle)** — develop offline and avoid the demo API's ~30 req/hour limit.
- **TanStack Query instead of Redux** — caching, loading/error, and smooth pagination without extra state boilerplate.
- **`artcrimes` over `wanted`** — cleaner data, avoids sensitive personal data.
- **Category dropdown** — the API's title search handles spaces poorly, so a spaceless enum filter is more robust.
- **Detail as a route, not a modal** — shareable, refresh-safe URLs that are easier to make accessible.

## Improvements

- Backend proxy to keep the API key secret
- Sync search/filter/page state into the URL
- Broader test coverage + error/empty states
- List virtualization, Storybook, and i18n if the app grows
