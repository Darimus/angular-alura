# Alurapic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

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

## Anotações pessoais

Vamos adicionar o bootstrap na single page aplication:

1- Quando formos importar um css global, seja bootstrap, normalize ou reset. Não importamos da maneira comum, ele precisa ser construído junto com o building
do Angular. CSS global é o css que será aplicado a todos os componentes.

2- E onde achamos o local ao qual devemos importar esses css? Na pasta raiz temos o arquivo "angular.json", dentro deste arquivo temos todas as configurações
de build do projeto (até o momento, vamos fazer uma vista grossa para todas as informações), estamos procurando a o "styles" e o "scripts", onde será
colocado todo o css.

3- Vamos baixar o bootstrap via "npm install bootstrap@4.1.4 (utilizaremos este no curso);