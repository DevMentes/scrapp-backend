const express = require('express');
const modules = express();

const security = require('./security/index');
const profile = require('./profile/index');
const project = require('./project/index');

modules.use(security);
modules.use(profile);
modules.use(project);

module.exports = modules;