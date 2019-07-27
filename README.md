# Api

Express Application for Hacker News.

## Clone

```
git clone https://github.com/ashwinsingh2007/hackernewsapi.git
```

## Installation

Use the package manager [yarn](https://yarnpkg.com/en/) or npm to install dependencies.

```bash
yarn install or npm install
```

Install Database client [PostgreSql] (https://www.postgresql.org/download/).
Set username and password [setup username and password instruction] (https://enterprise.arcgis.com/en/server/10.3/cloud/amazon/change-default-database-passwords-on-linux.htm)

```
By default its is set to
username: "postgres",
password: "postgres",
```
so either you can set username, password according to config, or you can change config settings.

Setup Database
```
By default set to prod7.
database: "prod7",
```
so either you can create a new database as in config, or you can change config settings.

Use [sequelize cli](https://www.npmjs.com/package/sequelize-cli) for migrating database.

```bash
npm install -g sequelize-cli

sequqlize db:migrate
```


## Usage

```javascript
yarn start
```


## Language

```
Nodejs
Framework: Express
Database: PostgreSql
```