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
Criamos a classe do serviço, ele dependera do http para realizar o consumo dos dados da API por isso criamos um constructor e vamos criar metodo listFromUser que recebera como parametro o nome do usuario.
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

6- Dentro do arquivo photo.service.ts vamos resolver o problema de injeção usando o: @Injectable({providedIn: 'root'})

## Tipando nossa API

1- Vamos tipar nosso service para sermos menos sucetives a erros e mantermos o autocomplete caso queremos acessar algum valor da photo, como: userId, description, likes etc.

2- Primeiramente vamos criar um arquivo dentro de photo: photo.ts

3- Vamos criar uma interface e não uma classe, pois queremos moldar, dar a forma aos dados.

 export interface Photo {
    id:number;
    postDate:Date;
    url:string;
    description:string;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number;
}

4- Vamos alterar o photo.service.ts:

return this.http
            .get<Photo[]>(API + '/flavio/photos')

    }

Vamos dizer que é um array do tipo Photo. Pois com a tipagem da interface agora os dados recebidos estão com o tipo correto e podemos utilizar o autocomplete e erramos menos.

## Ciclo de vida de um componente

Tudo dentro de app.component.ts

1- Vamos padronizar nossa aplicação para deixar o constructor somente para injeção de dependencias e qualquer outra fase de lógica iremos colocar em outra fase do ciclo de vida.

2- Vamos implementar o ngOnInit, vamos alterar a linha do export class:

export class AppComponent implements OnInit

Assim iremos evitar de escrever ngOnInit de forma errada, o proprio visual studio ira avisar do erro.

3- Será criado o ngOnInit e moveremos o bloco dentro do constructor para ele. 

    ngOnInit(): void {
        
        this.photoService
        .listFronUser('flavio')
        .subscribe(photos => this.photos = photos);
    }

4- Uma pequena organização: Quem depende de httpClientModule? o app.module ou o photos.module?

5- Vamos organizar somente dois arquivos, são eles app.module.ts e photos.module.ts

6- Em app.module.ts vamos retirar o import do photo.module

7- Em photos.module.ts vamos importar no @NgModule o HttpClientModule:

@NgModule({
    declarations: [ PhotoComponent ],
    exports: [ PhotoComponent ],
    imports: [ HttpClientModule ]
})

## Organizando mais o código

1- Atualmente o componente responsavel pela exibição das fotos é o app.componente.ts, tanto isso é verdade que ele é o primeiro a ser carregada na nossa aplicação. Porém ao pensar qual módulo que guarda tudo responsavel pelas fotos é o photo.module e porque não criar dentro deste módulo um componente responsavel somente por isso?

2- Vamos criar uma pasta photo-list que ira conter todos os arquivos para tal tarefa, porém usaremos o Angular CLI para isso e assim agilizando o processo:

    ng generate component photos/photo-list

Todo componente gerado de forma automatica fica dentro de app, por isso mudando a rota.

3- Agora vamos começar a mudar um poucos as coisas de local.

4- Em app.component.ts vamos mover todo conteudo dentro de AppComponent (e não esquecendo de retirar o onInit e import e coisas que não ter mais necessidade):
    
  photos: any[] = [];

  constructor(private photoService: PhotoService){ }
  
  ngOnInit(): void {
    
    this.photoService
    .listFronUser('flavio')
    .subscribe(photos => this.photos = photos);
  }

E colocaremos dentro de photo-list.component, fazemos os imports.

5- Salvaremos as alterações. AppComponent não está utilizando nada de photos.module.ts, e se observarmos este arquivo, PhotoComponent está em exports. Isto porque app.module.ts importa PhotosModule e, para que ele tenha acesso ao PhotoComponent, ele teve que ser exportado em photos.module.ts.

Mas se tudo que diz respeito a imagens está dentro de "photos" e de photos.module.ts, não é necessário exportarmos tal componente, já que ninguém externo a este módulo irá utilizá-lo. Se isso acontecer, daí o exportaremos, sob demanda. O importante é entendermos que em declarations há PhotoComponent e PhotoListComponent. Por fazerem parte do array de declarations, um enxerga o outro, e isso é o suficiente.

6- Agora precisamos lidar com um problema, queremos que hora exiba um componente e hora outro e como fazemos isso? Vamos ver isso ainda.

7- Vamos recortar o código do app.component.html e colar no photo-list.component.html.

8- Por quais motivos criamos um componente próprio de listagem de imagens?
    Para separar melhor a responsabilidade (e assim facilidade de manutenção)
    Melhor testabilidade

## Roteamento de uma single page aplication

1- Criamos mais um componente chamado photo-form com o comando ng create component photo/photo-form, ele já faz os imports e tudo certinho para a gente.

2- Não podemos esquecer de importar o CommonModule no photos.module.ts

3- Dentro da pasta app vamos criar o arquivo app.routing.module.ts

4- Este arquivo criado vamos exportas sua classe:

    export class AppRoutingModule {}

5- Criamos também o NgModule: 

    @NgModule ({

})

Ele já faz o import sozinho do NgModule.

6- Vamos criar uma constante com o nome de routes que vai ser um array JS:

    conts routes = [];

7- Daremos os dados do array, que irão ser o path e componente a ser carregado ao acessar este path:

    const routes = [
    { path: 'user/flavio', component: PhotoListComponent},
    { path: 'p/add', component:  PhotoFormComponent}
];

8- Vamos também importar o Routes do Angular CLI:

    import {Routes} from '@angular/router';

9- E vamos dizer que o routes é do tipo Routes, para assim evitar erros de sintaxe:

    const routes: Routes

10- Vamos importar o RouterModule para levar em consideração a lista de rotas do array:

    @NgModule ({
    imports: [ RouterModule.forRoot(routes) ]
})

11- Vamos importar o AppRoutingModule no arquivo app.module.ts

DICA: As vezes o Angular CLI fica meio doido quando importamos um arquivo de rota, então vamos parar e subir novamente a aplicação!!

12- Qual o primeiro componente carregado pela aplicação? O app.componente.html e neste arquivo devemos criar uma lacuna para ao acessar outras rotas e exiba dentro de app.component.html o componente da rota:

    <router-outlet></router-outlet>

Com está tag o Angular vai saber que ao carregar aquela rota, deve se exibir dentro desta tag.

13- O AppRoutingModule (dentro do arquivo app.module.ts) não consegue carregar as diretivas de rotas do app.routing.module, então devemos exportar está diretiva.

## Lidando com rotas inexistentes

1- Ao acessar uma rota inexistente nada é exibido, porém no console da alguns erros.

2- Vamos criar um novo module dentro da pasta app com o Angular CLI:

    ng generate module errors

Lembrando que o caminho padrão de gerar arquivos é dentro da pasta app, por isso não adicionamos ela.

3- Agora dentro da pasta errors vamos criar o componente not-found:

    ng generate component errors/not-found

4- Dentro do arquivo not-found.component.html, vamos usar apenas uma mensagem de erro:

<div class="text-center">
    <h2>This page is not avaliable</h2>
    <p>
        The link you have acccessed may be broken or
        the page may have ben removed.
    </p>
</div>

Usamos a classe do bootstrap, nada fora do normal aqui, sem novidades.

5- Não devemos esquecer de adicionar o path deste novo componente no app.routing.module.ts:

    const routes: Routes = [
        { path: 'user/flavio', component: PhotoListComponent},
        { path: 'p/add', component:  PhotoFormComponent},
        { path: '**', component: NotFoundComponent }
    ];

6- Também temos que importar o module ErrorsModule no app.module.ts no Ng imports

## Segmentos de rotas

1- Para termos um path com user dinamico, temos de alterar alguns arquivos

2- Vamos começar pelo photo-list.component.ts, vamos criar um novo parametro no constructor:

        private activatedRoute: ActivatedRoute

3- Agora vamos criar uma variavel para aceitar dinamicamente o nome do usuario: 

    const userName = this.activatedRoute.snapshot.params.userName;

e alteramos algumas coisas dentro do proprio ngOnInit:

    ngOnInit(): void {
        
        const userName = this.activatedRoute.snapshot.params.userName;
        
        this.photoService
        .listFronUser(userName)
        .subscribe(photos => this.photos = photos);
    }

4- Vamos mudar o returno dentro do photo.service.ts:

     listFronUser(userName: string){

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos')

## Melhorando a apresentação da lista

1- Vamos melhorar a exibição e disposição das fotos com o grid do bootstrap

2- Abrimos o arquivo photo-list.component.hmtl:
    <ol class='list-unstyled row'> (Vai ser nossa linha)
        <li *ngFor='let photo of photos' class='col-4'> (sistema de colunas, e passamos o ngFor para cada, pois queremos que cada vez ele gere uma li ao ser passado)
            <ap-photo 
                [url]='photo.url' 
                [description]='photo.description'>
            </ap-photo>
        </li>
    </ol>

3- Porém iremos criar um novo componente que será responsavel por renderizar a nossa lista, afim de evitar problemas com o layout, pois no momento não está pulando uma linha.

## Componente exclusivo para listar fotos 

1- Vamos criar um componente chamado photo-grid para está função e como ele está fortemente atrelado ao photo-list e somente é usado por ele, vamos cria-lo dentro de photo-list.

2- Agora dentro de photo-grid vamos pegar o photos-grid.component.html e adicionar o seguinte:
    <ol class='list-unstyled row'>
        <li *ngFor='let photo of photos' class='col-4'>
            <ap-photo 
                [url]='photo.url' 
                [description]='photo.description'>
            </ap-photo>
        </li>
    </ol>


3- Abrindo o photos-grid.component.ts vamos incluir um Input: 

      @Input() photos: Photo[] = [];

E mudarmos o selector: para 'ap-photos-grid' pois ele prefixa app-photos-grid por conta do nome da pasta app, nossa aplicação é alura pic, então mudaremos para ap-photos-grid. Mudamos também dentro do photo-form, not-found também.

4- Dentro de photo-list-component.ts, vamos mudar o tipo de photos []: 
      photos: Photo[] = [];
Vamos dizer que é um array do tipo Photo

5- O data bind do photo-list.component.html é o array de photo do arquivo photo-list.component.ts

6- Em suma, retiramos a responsabilidade de apresentação do componente de photo-list para photos

## Implementando a lógica do Grid

1- Primeiramente precisamos entender que o nosso teamplate photos-grid.compoment.html, não pode se basenar nas fotos que vem do backend e sim precisa se basear em um array em branco ao qual iremos criar.

2- Em photos-grid.component.ts vamos criar um array com o nome de rows:

    rows = [];

Sabemos também que se não tiparmos este array ele será do tipo any.

3- Precisamos entender que nosso array vai receber outro array (que será nossas linhas), e dentro deste arrays podera ter no máximo 3 itens:
Exemplo da explicação
    [
        [1,2,3], (primeiro row)
        [1,2,3], (segundo row)
        [1,2,3], (terceiro...)
        [1,2],
    ]

Podendo também ter dois ou mesmo 1 elemento deste array, sem problema algum.

4- Agora em photos-grid.component.html vamos mudar algumas coisas, a primeira é tirar o row da <ol> e colocar na <li>, tirando assim o col-4 da li.

5- Falta implementarmos a lógica para a construção da lista rows de photos-grid.component.ts. Em ngOnInit() indicaremos que this.rows receberá o resultado de this.groupColumns(), um método a ser criado e que recebe a lista de photos. Criaremos um array chamado newRows que começa vazio, e sabemos que teremos que retorná-lo em algum momento.

Faremos uma iteração de 3 em 3, então utilizaremos um for:

    ngOnInit() {
        this.rows = this.groupColumns(this.photos);
    }

    groupColumns(photos: Photo[]) {
        const newRows = [];

        for(let index = 0; index < photos.length; index+=3) {
            newRows.push(photos.slice(index, index + 3));
        }
        return newRows;
    }

6- Isso é um exemplo clássico — quando se quer resolver um problema, o One framework não ajuda em nada, sendo necessário aplicar uma lógica de JavaScript e, claro, conhecer esta linguagem.

O slice() sempre recebe a posição inicial que queremos considerar, e a final não inclusiva, "fatiando" o array. Ou seja, quando o primeiro index é 0, o outro vale 3, e o slice() pegará a fatia de 0 a 2. Esta segunda posição não é inclusiva, e se tivéssemos colocado a posição final como 2, seriam pegos 0 e 1, por isto utilizamos index + 3. Na passada seguinte, o primeiro index será 3, e o final, 6, sendo pegos 3, 4 e 5.

Não há problema se no final sobrarem dois ou apenas um elemento, pois o slice() só trará a quantidade existente. Vamos testar? No navegador, nada é exibido, e no console não há nenhuma mensagem de erro. Ao começarem a criar componentes no Angular, muitas pessoas passam por esta dificuldade, e trataremos dela a seguir.

## Change Detection

1- Temos um problema no photo-list.component.ts o array de photos é iniciado como um array vazio. Porém, a busca de dados é uma operação assíncrona, e demora milésimos de segundo até ser executada e lançar um novo valor.
E o NgOnInit é passado somente no começo, então ele carrega como um array vazio também. O que precisamos é que ele mude sempre que o array mudar ou seja, que ele detecte as mudanças.

2- Significa que photos está vazio e, na inicialização do componente, feita uma única vez, ele tentará acionar o groupColumns(). Será lançado um novo valor para o array em photo-list.component.ts, o qual automaticamente irá para photo-list.component.html, por conta do Data binding.

3- Ou seja, nosso array de @Input() photos: Photo[] = [] em photo-list.component.ts está sendo atualizado com novos valores e nem um momento mais estamos chamando o groupColumns, ele está sendo chamado somente na criação do componente e depois nunca mais. Precisamos que ele atualize toda vez que o inbound property mudar, lá no arquivo photo-list.component.hmtl

4- E nosso ngOnInit não ajudara nisso, temos que muda-lo para OnChanges (NO PLURAL), vamos atualizar o arquivo photos-grid.component.ts:

    ngOnChanges(changes: SimpleChanges) {
        if(changes.photos)
            this.rows = this.groupColumns(this.photos);
    }

Não esquecendo de deletar o ngOnInit e tirar dos import também.

Usando a interface OnChanges, quando clicamos em PhotosComponent, o Visual Studio não nos permite implementar o método, mas se logo abaixo de constructor digitarmos ngOnChanges(), ele nos dará a opção de adicionarmos um método com este nome.

Este método recebe como parâmetro todas as possíveis mudanças das inbound properties do nosso componente. Tais mudanças são do tipo SimpleChanges, que importaremos de angular/core. Caso haja alguma mudança, uma propriedade com mesmo nome da inbound property que sofreu a mudança será adicionada dinamicamente. Se não houver mudança, tampouco haverá propriedade.

Vamos testar isso implementando if para o caso de haver mudanças especificamente na inbound property photos e, caso positivo, executaremos this.groupColumns() passando os novos dados das imagens. Testamos com photos pois poderemos ter várias propriedades, porém apenas uma delas sofrer alteração. É necessário testar cada propriedade da inbound property.

## Binding de eventos

1- Vamos melhorar a experiencia do úsuario, atualmente temos 12 fotos, porém se uma tivermos 100, 200 ou mais fotos, o usuario deve ter alguma forma de filtrar e é isto que iremos implementar.

2- Vamos começar adicionando alguns components prontos do bootstrap no arquivo photo-list.component.html.

Em photo-list.component.html, que envolve o componente que traz os dados e os disponibiliza para photos.component.html, componente que os renderiza usando o grid do Bootstrap, acrescentaremos o seguinte trecho:
    <div class="text-center mt-3 mb-3">
        <form>
            <input
                class="rounded"
                type="search"
                placeholder="search..."
                autofocus>
        </form>
    </div>

Pelo que entendi, ele ira renderizar o campo de busca e depois continuara a renderizar as fotos até acabar, por isso colocamos este trecho de código aqui e não em outro local.
Atualmente este campo ainda não funciona, pois não capturamos o que foi digitado nele.

3- De que maneira capturaremos o dado digitado neste campo de busca? E depois, como será realizada a filtragem deste valor? Em algum momento sabemos que este valor deverá cair em uma propriedade de PhotoListComponent, portanto criaremos em photo-list.component.ts a propriedade filter, do tipo string, que começa inicializada com uma string em branco. À medida em que formos digitando no input do navegador, o valor será atribuído a esta propriedade.

Primeiramente devemos nos preocupar com a captura do dado digitado no campo e só depois em filtrar ele.