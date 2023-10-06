const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('./connections/db');

const app = express();

app.use(
  morgan(
    ':date[iso] :method :url :status :res[content-length] - :response-time ms'
  )
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appRoutes = require('./routes');
app.use(appRoutes);

module.exports = app;
