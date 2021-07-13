const controller = require('../controllers/index.js')
const router = require('express').Router();

router.get('/cows', controller.get)

router.post('/cows', controller.post)
module.exports = router;
