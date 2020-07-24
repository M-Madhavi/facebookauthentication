const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const url = 'mongodb://localhost:27017/TestMS10';
mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

const app = express();

// Middlewares moved morgan into if for clear tests
  app.use(morgan('dev'));



app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users'));

module.exports = app;
