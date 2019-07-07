const express = require('express');
const project = express();

project.use('/project', require('./routes'));

module.exports = project;