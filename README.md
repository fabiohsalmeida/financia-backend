# FinanCia

> Um aplicativo para controle de gastos e compartilhamento de metas junto com a família.

## Tecnologias Utilizadas
- NodeJS - [saiba mais](https://nodejs.org/en/docs/)
- ExpressJS - [saiba mais](https://expressjs.com/)
- SequelizeJS - [saiba mais](http://docs.sequelizejs.com/)
- PassportJS - [saiba mais](http://www.passportjs.org/)
- MySQL - [saiba mais](https://www.mysql.com/)
- Postman - [saiba mais](https://www.getpostman.com/)
- Javascipt 

## Pré-Requisitos
- NodeJs e NPM - [como instalar](https://www.npmjs.com/get-npm)
- MySQL Community Server - [como instalar](https://dev.mysql.com/downloads/)


## Iniciando
- Clone o repositório:  
`git clone https://github.com/fabiohsalmeida/financia-backend.git`

- Entre no diretório:  
`cd api`

- Adicionar senha do MySQL local ao servidor:
> Abrir arquivo app/config/sequelize_config.json e adicionar a senha na sessão de "development", campo "password".

- Instale as dependências:  
`npm install`

- Iniciando o projeto:  
`npm start`

- Acesse no navegador:  
`http://localhost:3000`

> Os comandos acima iniciam apenas o *servidor* da aplicação.  
> Para uma experiência completa inicie também o Frontend, saiba mais [aqui](https://github.com/AlanQuadros/financia-mobile.git).

## Estrutura

```
app/
├─ config/
│  ├─ db/
│  │  ├─ adult_goal_types.js
│  │  ├─ adult_goals.js
│  │  ├─ adults.js
│  │  ├─ createDbScript.sql
│  │  ├─ dropTablesScript.sql
│  │  ├─ kid_goals.js
│  │  ├─ kids.js
│  │  ├─ spent_types.js
│  │  ├─ spents.js
│  │  ├─ tasks.js
│  ├─ sequelize_config.json
├─ controllers/
│  ├─ adult_goal.js
│  ├─ adult.js
│  ├─ adults_kids.js
│  ├─ kid.js
│  ├─ spent.js
│  ├─ task.js
├─ middlewares/
├─ models/
│  ├─ adult_goal_type.js
|  ├─ adult_goal.js
│  ├─ adult.js
│  ├─ adults_kids.js
│  ├─ index.js
│  ├─ kid_goal.js
│  ├─ kid.js
│  ├─ spent_type.js
│  ├─ spent.js
│  ├─ task.js
├─ routes/
│  ├─ adult_goal.js
│  ├─ adult.js
│  ├─ adults_kids.js
│  ├─ kid.js
│  ├─ spent.js
│  ├─ task.js
.env
.gitignore
LICENSE
package.json
README.md
server.js
```

## Comandos

``` bash
# instalar dependências
npm install

# server em localhost:3000
npm start
```
