const controller = require('../controllers/index.js')
const router = require('express').Router();

router.get('/cows', controller.get)

module.exports = router;
