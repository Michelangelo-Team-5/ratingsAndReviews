const models = require('../models/models.js')

module.exports = {
    get(req, res) {
        models.getAll((err, cows) => {
            if (err) {
                return res.sendStatus(404);
            }
            res.status(400).json(cows)
        });
    },
    post(req, res) {
        models.create(req.body, (err, newCow) => {
            if (err) {
                return res.sendStatus(404);
            }
            res.json(newCow);
        });
    }
}
