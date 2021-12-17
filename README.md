# PizzaApp UI

PizzaApp-Ui is the UI part of the PizzaApp created with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.14. It allows the user to create, edit, delete, and get different toppings and pizzas. It also allows to edit the toppings a pizza has.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Configurations

Currently the project is not configurated to run in production mode. And needs the API to run with the url specified in `environment.ts` file:

```
API_URL: "http://localhost:5000/api"
```
