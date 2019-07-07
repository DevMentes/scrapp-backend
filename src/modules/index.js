const express = require('express');
const modules = express();

const security = require('./security/index');
const profile = require('./profile/index');

modules.use(security);
modules.use(profile);

module.exports = modules;