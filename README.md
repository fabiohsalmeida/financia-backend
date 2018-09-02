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
> Para uma experiência completa inicie também o Frontend, saiba mais [aqui](http://www.tools.ages.pucrs.br/arbitrium/web).

## Estrutura

```
app/
├─ config/
│  ├─ db/
│  │  ├─ createDbScript.sql
│  │  ├─ dropTablesScript.sql
│  ├─ sequelize_config.json
├─ controllers/
│  ├─ user.js
├─ middlewares/
├─ models/
│  ├─ index.js
|  ├─ user.js
├─ routes/
│  ├─ user.js
.env
package.json
server.js
```

## Comandos

``` bash
# instalar dependências
npm install

# server em localhost:3000
npm start
```