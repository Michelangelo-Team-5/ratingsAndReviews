const controller = require('../controllers/index.js')
const router = require('express').Router();

router.get('/reviews/:product_id', controller.get);
router.post('/reviews', controller.postReview)
router.put('/reviews/:review_id/helpful', controller.updateHelpfulness);
router.put('/reviews/:review_id/report', controller.updateReport);

module.exports = router;
