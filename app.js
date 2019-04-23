require('dotenv').config();

const express =  require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const modules = require('./src/contexts/index');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to Scrapp backend.',
    status : {
      general: true,
    },
  });
});

app.use('', modules);

module.exports = app;
