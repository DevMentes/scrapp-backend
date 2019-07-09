const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.mongodbConnection, {useNewUrlParser: true});