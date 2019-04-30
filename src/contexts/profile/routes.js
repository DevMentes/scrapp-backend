const router = require('express').Router();
const middleware = require('./../security/middleware/middleware');

const profileController = require('./controllers/profileController');

router.get('/', middleware.validateToken, profileController.getUserProfile);

module.exports = router;
