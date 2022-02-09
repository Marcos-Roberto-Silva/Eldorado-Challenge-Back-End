# Welcome to the Eldorado-Challenge-Back-End

#### This application is a challenge where I've created a simple program to manage devices.

#### The user is able to insert, delete and list a device by its id or get all list of devices from MySql database.

#### In order to testing the API functionality install the dependencies and setting up environment variables
##### `npm install`
#### Set up the .env file with the following information:
`MYSQL_USER=yourUser`
`PASSWORD=yourPassword`
`DATABASE=eldoradoDb`
`HOST=localhost`
`ACCESS_PORT=3000`
#### In a terminal execute the sequelize command for create the database authomatically
##### `npx sequelize db:create`
#### In order to create the tables execute the sequelize following command
##### `npx sequelize db:migrate`
#### In order to previously povoate the tables execute the following sequelize command
##### `npx sequelize db:seed:all`
#### In order to run the automated tests run `npm test`
#### Now you can start the aplication with `npm start`

#### Once the API running, insert the url `http://localhost:3000/api-docs/#/` in your favorite browser for testing the api behavior in `Swagger` enviroment.
