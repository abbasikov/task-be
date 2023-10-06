require('dotenv').config();
const app = require('./src/app');

const { SERVER_PORT } = require('./config');

const port = process.env.PORT || SERVER_PORT;

app.listen(port, () => console.log(`Listening at http://localhost://${port}`));
