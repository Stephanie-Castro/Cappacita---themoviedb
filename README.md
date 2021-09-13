 # Themoviedb-Api

Aprendendo a usar a api da TMDb em conjunto com banco de dados MySQL.


## Description

Desenvolver uma aplicação Angular, com banco de dados MySQL e Node.js para comunicação com o banco. A aplicação consistirá de uma página Angular onde é possível pesquisar filmes ou programas de tv e também será possível exibir os filmes e programas de tv melhores avaliados.
Para cada filme e programa de tv exibido será possível avaliar tal filme ou programa de tv.
Cada utilização da api TMDb será registrada no Banco de Dados, incluindo a chamada da api TMDb para avaliar um filme ou programa de tv.

 

## Tecnologies

- [Angular](https://angular.io/) 

- [Angular Material](https://material.angular.io/) 

- [Node.js](https://nodejs.org/) 

- [Express.js](https://expressjs.com/pt-br/)

- [Typescript](https://www.typescriptlang.org/)

- [Mysql](https://www.mysql.com/)

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)

- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)



## Getting Started/Project Setup

####Criação do Banco de Dados:

* Criar o Banco de Dados **cappacita_tmdb**

* Executar o script **themoviedb-sql-instruction.sql** para a criação das tabelas do banco.

####Configurando o backend de comunicação com o Banco de Dados:

* Acessar a pasta do projeto **themoviedb - backend** e executar `npm install`para instalar todas as dependências.

* No arquivo knexFile.js, localizado em *\themoviedb - backend\src\database\knexFilme.js*  configurar o acesso ao Banco de Dados:

```
host : '127.0.0.1',
port : 3306,
user : 'SEU-USUÁRIO-AQUI',
password : 'SUA-SENHA-AQUI',
database : 'cappacita_tmdb'
```

####Configurando o projeto Angular:

* Acessar a pasta do projeto **themoviedb** e executar `npm install`para instalar todas as dependências.

* No arquivo environment.ts, localizado em *themoviedb\src\environments\environment.ts*  configurar a chave api de comunicação com a api TMDb e configurar a comunicação com o Backend :

```
api_key: "SUA-CHAVE-API-TMDB-AQUI",
database_url: "http://localhost:",
_port: "3003" //porta de comunicação com o backend
```

### Executing program

* Acessar a pasta do projeto **themoviedb - backend** e executar `npm run dev` para iniciar o Backend de comunicação com o Banco de Dados.

* Acessar a pasta do projeto **themoviedb** e executar `ng serve -o` para iniciar o projeto Angular.
* No navegador acesse http://localhost:4200/ para ver o funcionamento.


## A Fazer:
- [ ] Tratamento de erros
- [ ] Explorar mais o uso da API
