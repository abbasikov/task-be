require('dotenv').config();
const app = require('./src/app');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  secure: true
});

const { SERVER_PORT } = require('./config');

const port = process.env.PORT || SERVER_PORT;

app.listen(port, () => console.log(`Listening at http://localhost://${port}`));
