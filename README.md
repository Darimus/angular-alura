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

3- O beneficio é se trazermos a lista de fotos do back end, criaremos um novo elemento automaticamente.

## Fazendo a integração com uma WEB API

1- Baixar o arquivo da api;

2- Abrir outro prompt, pois temos que rodar os dois servidores juntos

3- Fazer somente uma vez o npm install, para instalar todas as dependencias da api

4- npm start para subir o servidor

5- Primeiramente precisamos apagar os dados das fotos no arquivo app.component.ts, pois os dados serão consumidos da web api.

6- Agora precisamos nos comunicar com o Web API e essa comunicação será feita atravez do HttpClient (um serviço disponibilizado pelo proprio Angular), mas também poderia ser feito com Ajax, JQuery, entre outros.

7- Em app.module.ts devemos fazer o import na mão: import { HttpClientModule } from '@angular/common/http'

8- Agora devemos fazer o import do modulo HttpClientModule no @NgModule.

9- Com tudo isso feito, o proprio vscode consegue fazer o auto complete de forma correta para o HttpClient no arquivo app.component.ts

10- Agora precisamos fazer a injeção de dependencias. No Angular, precisamos incluir um constructor e usaremos o parametro que dependemos que no caso é o htpp.

11- Constructor:

    constructor(http: HttpClient){ 
        console.log(http);
    }

Devemos explicitar o tipo, ou seja tipar o http, pois o Angular não sabe identificar se é um numero, string ou dado, http: HttpClient, estamos dizendo que o http é o tipo HttpClient.

12- Usamos o console.log para saber se a injeção está sendo feita de forma correta

## Consumindo dados da API

1- Primeiro de tudo, dentro de constuctor precisamos fazer uma operação do tipo get (que pega os dados) do local desejado, no caso da nossa api (http://localhost:3000/flavio/photos), os dados que desejamos está neste caminho.

2- Somente com o get não adianta de nada, precisamos inscrever alguém no observeble (que não precisa ser declarado), assim ele pega os dados de fato.

3- Criamos uma arrow function que ira armazenar esses dados.
    .subscribe(photos => this.photos = photos);

Estamos criando o parametro photos e this.photos recebera os dados de photos (API)

4- Porém precisamos tipar tudo, para o TS saber que tipo de dados sera consumido, por padrão vem do tipo any (qualquer um)

5-  .get<Object[]>('http://localhost:3000/flavio/photos')
    .subscribe(photos => this.photos = photos);

Então falamos que os dados que vierem de localhost será um Object do tipo array

6- Tipamos também o:   photos: Object[] = [];
Para ele receber os dados do tipo array

7- Problemas desta abordagem: Até o momento temos poucos componentes, porém se ao final do projeto existirem 30 componentes e desses 10 precisarem usar os dados desta API? O problema é que teremos que repetir este código 10 vezes, ou mesmo se o endereço não é mais este ou qualquer outro tipo de mudança. Vamos aprender a resolver.

## Isolando a acesso em serviços

1- Vamos isolar a classe de consumo de API, geralmente dentro do mundo de Angular, isto se chama serviço, ou seja, vamos isolar essa classe dentro de um serviço.

2- Dentro da pasta photos/photo (onde existem os arquivos de componente), vamos criar um novo arquivo chamado photo.service.ts

3- Primeiramente vamos criar a classe deste arquivo: export class PhotoService {
    constructor (http: HttpClient){}

    listFromUser(userName){}
}
Criamos a classe do serviço, ele dependera do http para realizar o consumo dos dados da API por isso criamos um constructor e vamos criar um listFromUser para lhe dar com o nome do usuario.
Não podemos esquecer de importar o httpClient.

4- Vamos usar o get e subscribe que estava no app.component dentro do listFromUser, porém o http do list não consegue pegar o http do constructor, por isso vamos usar um metodo do TS e tornar o http privado(Assim tudo dentro deste arquivo pode acessar este construtor):
    constructor (private http: HttpClient){}
E vamos usar o this.http dentro do listFromUser e tornar o http do metodo em string: 
        listFronUser(userName: string){
E iremos retirar o subscribe do metodo, pois somente quer for consumir o serviço ira utilizalo.

5- No arquivo app.component.ts vamos atulizar algumas informaçoes, primeiramente vamos atualizar o constructor: 

  constructor(photoService: PhotoService){
    
    photoService
    .listFronUser('flavio')
    .subscribe(photos => this.photos = photos);
  }
Retiramos o import do httpClient e usamos agora o photoService.

6- Dentro do arquivo photo.service.ts vamos resolver o problema de injeção usamondo o: @Injectable({providedIn: 'root'})