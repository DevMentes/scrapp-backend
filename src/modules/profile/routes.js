const router = require('express').Router();
const middleware = require('./security/middleware/middleware');

const profileController = require('./controllers/profileController');

router.get('/status',profileController.status);

router.get('/', middleware.validateToken, profileController.status);

module.exports = router;