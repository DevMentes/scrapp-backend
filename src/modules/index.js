const express = require('express');
const modules = express();

const security = require('./security/index');

modules.use(security);

module.exports = modules;