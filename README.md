## Notes

Install postgresql
`brew install postgres`

If there's a new version of postgres, just use the command: `brew postgresql-upgrade-database` to update the old **data**

Launch psql before starting the application (no brew services psql process need)
Start the db
`npm run start-db`
Start the api
`npm run server`
Start the client
`npm run serve`

The shell db connection string is:
`psql -U $username -d $database -W -h $host`

## Sequelize commands
`npx sequelize-cli init`

`npx sequelize-cli db:create`

`npx sequelize-cli db:drop`

## Backlog

- ~~added vue-enterprise client in client folder~~
- ~~added git clone https://github.com/nlbao/pocket_stats.git and https://github.com/achembarpu/pockyt in api folder~~
- ~~decided to put js also in the server side~~
- ~~only js for the server side~~
- ~~added sequelize~~
- ~~installed _pgcli_ to run psql queries from the shell~~
- ~~started db section refactoring~~
- ~~added api folder from vock~~
- installed the Sequelize CLI
- add migration to sequelize
- create initial check for db and user status
- add db instance
- check todo writing to db and updating
- need to revise webpack configuration, especially the _config_ folder
- complete the db schema and model
- add all needed methods and requests to server and db
