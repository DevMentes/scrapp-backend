const router = require('express').Router();
const validateToken = require('./../security/middleware/validateToken');

const projectController = require('./controllers/projectController');

router.get('/status',projectController.status);

router.get('/', validateToken, projectController.getAll);

module.exports = router;
