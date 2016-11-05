const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');

const dragons = require('./routes/dragons');

app.use(morgan('dev'));

app.use('/dragons', dragons);

app.use(errorHandler);


module.exports = app;