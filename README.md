# Task BE

## Run on Local Machine

### Dependencies:
1. NodeJS
2. PostgreSQL


### Installing Project Dependencies
Run the following command to install the node modules:
```
npm install
```

### Setting the Environment Variables
Set the following environment variables:
```
NODE_ENV=development

PORT=

# Database
DB_URI=
DB_USER=
DB_NAME=
DB_HOST=
DB_PORT=
DB_PASSWORD=
```
### Running Migrations
Set the values in `db/config/config.js` for the database credentials and run:
```
npm run migrate
```
### Running the Server
Run the server by:
```
npm run start:dev
```
