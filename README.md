# Arnell Consulting

Website for [arnellconsulting.com](https://arnellconsulting.com), built with [Astro](https://astro.build) and deployed to Azure Static Web Apps.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is written to `dist/`. Preview the build locally with:

```bash
npm run preview
```

## Deployment

The site is published to Azure Static Web Apps when a **version tag** is pushed.

1. **One-time setup**
   - Create an [Azure Static Web App](https://portal.azure.com) and connect it to this GitHub repo (or use the deployment token from the Azure resource).
   - In the GitHub repo: **Settings → Secrets and variables → Actions**, add a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` with the deployment token from your Azure Static Web App.

2. **Release a version**
   ```bash
   git tag v1.0.0
   git push --tags
   ```
   Pushing a tag that matches `v*` (e.g. `v1.0.0`, `v2.1.3`) triggers the GitHub Action, which builds the site and deploys it to Azure.

## Project structure

- `src/pages/` – Astro pages (Home, About, Team, Contact)
- `src/layouts/` – Shared layout and meta
- `src/components/` – Nav, Footer, TeamCard
- `src/data/` – Team data (e.g. `team.ts`)
- `src/styles/` – Global CSS
- `public/` – Static assets (favicon, images)
