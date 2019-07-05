const express =  require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const modules = require('./src/modules/index');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(parser.json());

app.get('/', (req, res) => {
    res.json({
        message : 'Welcome to GoodHunt backend.',
        status : {
            general: true,
        },
    });
});

app.use('', modules);

module.exports = app;