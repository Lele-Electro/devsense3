# Anih

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## GitHub Pages deployment

The frontend is configured to deploy from the `develop` branch to:

`https://lele-electro.github.io/devsense3/`

Run the same production build locally with:

```bash
npm ci
npm run typecheck
npm run build:pages
```

The deployable artifact is written to `dist/devsense/browser/browser`. The preparation script verifies the `/devsense3/` base URL, copies `index.html` to `404.html` for Angular route fallback, and creates `.nojekyll` so GitHub Pages serves the generated files directly.

The `github-pages` build overlay disables SSR and prerendering so deployment does not depend on the live WordPress API responding during CI. The existing SSR build commands and server configuration are unchanged.

The workflow at `.github/workflows/pages.yml` validates pull requests into `develop`. Pushes to `develop` and manual workflow runs also publish the artifact through GitHub's official Pages actions. In the repository settings, select **Settings > Pages > Build and deployment > Source > GitHub Actions** before the first deployment.

This deployment publishes the frontend only. The existing Express server and `/api/contact` backend are not uploaded to GitHub Pages, so the contact form will not submit successfully from the Pages URL unless that endpoint is provided separately later. No backend or production environment configuration is changed by the Pages workflow.

The existing Karma suite can be run with `npm run test:ci`. Its current legacy baseline is 29 passing and 101 failing tests, so it is not yet a deployment gate. Type checking and the production Pages build are mandatory workflow gates.

To roll back, revert the faulty commit on `develop` and push the revert. GitHub Actions will build and deploy the restored revision while leaving the currently published site intact if validation fails.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
