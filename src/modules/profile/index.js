const express = require('express');
const profile = express();

profile.use('/profile', require('./routes'));

module.exports = security;