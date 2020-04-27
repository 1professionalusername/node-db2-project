

**DATABASE SCHEMA DESIGN**

_hello_

`greetings`


Using `knex migrations`, design and write a schema for the `cars` table using the specifications below.
- Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module.
- Write endpoints to support `CREATE` and `READ` operations on the `cars` resource.
- Use a rest client like _Insomnia_ or _Postman_ to test your API.

*DATABASE SCHEMA DESIGN*

Seeds allow us to add and reset sample data easily.
The Knex command-line tool offers a way to seed our database; in other words, pre-populate our tables.

Getting started:

1) To create a config object use *npx knex init*
    This will generate a -knexfile.js- into you root folder

2)This is what our knex file will look like:

development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3',
    },
    useNullAsDefault: true,
    // generates migration files in a data/migrations/ folder
    migrations: {
      directory: './data/migrations'
    }
  }

We can generate a new migration with the following command:

*knex migrate:make [migration-name]*

If we needed to create a table, we might run:

*knex migrate:make create - <tablename>*


When designing a database schema:

What fields or columns does a table need?
What type of data do we expect for each column?
Are there any restrictions or constraints needed for each column?
Every table needs a primary key
Multiple rows cannot share an ID
NEVER change an ID!!! Relationships are based on ID
Data Definition Language
------------------------
CREATE TABLE <table name> (
  <column name> <column type> <constraints>,
  <column name> <column type> <constraints>
)
CREATE TABLE IF NOT EXISTS "fruits" (
	"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"name" TEXT NOT NULL UNIQUE,
	"avgWeightOz" FLOAT NOT NULL,
	"delicious" BOOLEAN NOT NULL DEFAULT true,
	"color" TEXT 
)
-------------------------------------------------
ALTER TABLE <table name> <stuff to change>
ALTER TABLE IF EXISTS "fruits" 
ADD COLUMN "tropical" BOOLEAN DEFAULT false
-------------------------------------------------
DROP TABLE <table name>
DROP TABLE IF EXISTS "fruits"
--------------------------------------------------
Schema ( Database ) Migration
describes changes made to the structure of a database. For example:
migrations/migration1.js
  -creates the fruits table
migrations/migration2.js
  -adds a colum to the fruits table
  -removes a default value from an existing column
migrations/migration3.js
  -create new vegetable table
  -deletes a column from the fruits table
Migrations include things like adding new objects, adding new tables, and modifying existing objects or tables.
---------------------------------------------------
new migration
npx knex migrate:make <migrationName>
migrate
npx knex migrate:latest
undo migration -- only rollback in an emergency. Best practice is to make a new migration to fix errors
npx knex migrate:rollback
seed migration
npx knex seed:make <seed file name>
in seed folder, delete starting code and replace with:
exports.seed = async function(knex) {
  // await knex( "fruits" ).del()
  //truncate does more than .del(), like resetting the autoincrementing ID
  await knex( "fruits" ).truncate()
    await knex( "fruits" ).insert( [
    { name: "dragon fruit", avgWeightOz: 16.7, delicious: true, color: "red" },
    { name: "durian", avgWeightOz: 52.9, delicious: false, color: "yellow" },
    { name: "rambutan", avgWeightOz: 1.1, delicious: true, color: "pink" },
    { name: "lingonberry", avgWeightOz: 0.01, delicious: true, color: "red" },
    { name: "golden gooseberry", avgWeightOz: 0.02, delicious: false, color: "yellow" }
  ] )
}
then in cli, run
npx knex seed:run
resets and clears database, adds seed data for testing