const express = require('express');
const project = express();

project.use('/projects', require('./routes'));

module.exports = project;