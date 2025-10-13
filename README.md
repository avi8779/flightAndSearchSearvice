# Welcome toFlights Service

## project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `env` file in the root directory and add the following enviroment variable
 - `PORT = 3000`
 - Inside the `src/config` folder create a new file `config.json` and then addthe following piece of json

```
{
    "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <ADD_YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listedabove,go to the src folder from your terminal and execute `npx seqelize db:create`

```
