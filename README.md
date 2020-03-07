# Authapp

Small project to test  [Auth0](https://auth0.com).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To install [Auth0] (https://manage.auth0.com/dashboard/eu/dev-5ram9se8/applications/y7h2U6ePYBwzqMjE9xGokgoVi3Hiibdb/quickstart):
- npm install @auth0/auth0-spa-js --save
- ng g s services/auth --skipTests 
- ng g guard services/auth --skipTests 
- ng g c components/protegida -is --skipTests