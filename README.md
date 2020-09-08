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


## ---------------------------------------------------------------------------------------------------------

## Anotações pessoais

## Vamos adicionar o bootstrap na single page aplication:

1- Quando formos importar um css global, seja bootstrap, normalize ou reset. Não importamos da maneira comum, ele precisa ser construído junto com o building
do Angular. CSS global é o css que será aplicado a todos os componentes.

2- E onde achamos o local ao qual devemos importar esses css? Na pasta raiz temos o arquivo "angular.json", dentro deste arquivo temos todas as configurações
de build do projeto (até o momento, vamos fazer uma vista grossa para todas as informações), estamos procurando a o "styles" e o "scripts", onde será
colocado todo o css.

3- Vamos baixar o bootstrap via "npm install bootstrap@4.1.4 (utilizaremos este no curso);

4- Devemos agora indicar para o Angular que queremos o bootstrap no build da aplicação e como fazemos isso? Vamos no arquivo "angular.json" e procuramos
o styles e vamos passar o caminho para ele ("./node_modules/bootstrap/dist/css/bootstrap.min.css");

## Criando primeiro componente:

1- Primeiramente vamos criar um new foolder dentro da pasta app (no nosso caso vai ser a pasta photo);

2- Dentro deste novo foolder, vamos criar dois arquivos (photo.component.ts e photo.component.html);

3- Dentro de photo.component.ts vamos importar o component @angular/core, criar o nosso component com os parametros selector: 'ap-photo' (sempre prefixar o nome da empresa ou da aplicação, no nosso caso ap é igual a AluraPic), e vamos passar o templateUrl: 'photo.component.html'.
Logo depois vamos exportar a classe PhotoComponent, que também tera como parametros a description (alt) e url (caminho da foto).

4- Dentro do arquivo photo.component.html, vamos passar a tag <img> com os atributos e classes que queremos, mas não esquecendo de fazer o data binding do src e alt, que respectivamente são a url e description que passamos no photo.component.ts;

5- Não devemos esquecer de declarar esse component dentro do app.module.ts, pois o PhotoComponent precisa estar declarado em algum modulo. (No proprio console log o Angular da pistas);

## Fazendo o PhotoComponent receber valores externos, assim conseguirmos utilizar valores de titulo e descrição diferentes para cada um:

1- Em app.component.html devemos chamar a tag <ap-photo> com url='' e description='', onde colocaremos o caminho da foto e a descrição desejada, no caso vamos chamar a tag duas vezes para visualizarmos duas fotos distintas.

2- Em photo.component.ts devemos tornar description e url em inbound property, ou sejá que recebem valores externos, devemos tirar os valores deles e colocamos @Input() description = '', o proprio Angular importa o Input, devemos fazer o mesmo em url.

## Vamos seprar o module photos do app.module

1- Vamos fazer a separação para precisarmos somente importar o photos.module no app.module, pois ao longo do curso iremos fazer varias melhorias no componente photo, que dizem respeito a somente ao module photos, pois se não fizermos isto teremos muitos components e não saberemos o que é o que. Este module se chama (feature module)

2- Começamos criando uma nova pasta em app chamda photos, e colocaremos a pasta photo dentro dela.

3- Devemos tirar a linha de PhotoComponent do declaretions do arquivo app.module.ts, pois não iremos importar um component e sim um module.

4- Criamos um arquivo photos.module.ts dentro da pasta Photos, neste arquivos devemos passar o @Ng({ declarations, exports}) onde colocaremos os componentes de photo dentro do declarations (PhotoComponent) e exportamos para outros arquivos usarem o PhotosComponents, também precisamos criar a classe PhotosModule e exportar ela.

5- Em app.module.ts devemos adicionar o PhotosModule dentro de imports e não em declarations (somente components aqui).

## Fazendo um array e for para criar automaticamente as fotos na tela de acordo com numero de itens dentro do array

1- Dentro de app.component.html excluimos o segundo <ap-photo> e deixamos somente o primeiro com as seguintes informações:
<ap-photo  
    *ngFor='let photo of photos' (Aqui criamos o for para sempre que existir um item dentro de photos, ele cria um novo photo)
    [url]='photo.url' (Passamos a url de photos para o photo)
    [description]='photo.description'> (mesma coisa)
</ap-photo>
Devemos fazer o data binding do url e description pois queremos o valor desta expressão;

2- Dentro de app.component.ts e dentro da classe AppComponent criamos o array photos com os valores da url e description;