# The App

To visit the application please navigate to [The App](https://mscvkl.github.io/the-app)

## Development setup

- Install node.js `https://nodejs.org/en/` version 16.13.1.
- Install angular-cli globally `npm i @angular/cli -g` version 13.0.4.
- Run `npm ci` to get `node_modules`.
- Run `ng serve` for a dev server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:7777/`. The app will automatically reload if you change any of the source files.

## Notes

- Generally the application is organized according to official [style guide](https://angular.io/guide/styleguide) with exception:
  - There is no `shared` folder, because there is no need of it.
  - Feature module `posts` contains `components` for dump components and `view` for smart one.
- Delay for 1000 ms was added to `PostsService` to emulate network delays.
- The application was published to GitHub from branch `rxjs-state`.
- Directory for build artifacts was renamed to `docs/` to support publishing using GitHub.
- Hash location strategy was added for the same reason.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
