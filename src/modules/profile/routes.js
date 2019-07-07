const router = require('express').Router();
const validateToken = require('./../security/middleware/validateToken');

const profileController = require('./controllers/profileController');

router.get('/status',profileController.status);

router.get('/', validateToken, profileController.profile);

module.exports = router;