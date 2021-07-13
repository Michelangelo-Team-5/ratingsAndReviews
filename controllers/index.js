const models = require('../models/models.js')

module.exports = {
    get(req, res) {
        models.getAll((err, cows) => {
            if (err) {
                 res.sendStatus(404);
            } else {
                res.status(200).json(cows)
            }
        });
    },
    post(req, res) {
        models.create(req.body, (err, newCow) => {
            if (err) {
                res.sendStatus(404);
            } else {

                res.json(newCow);
            }
        });
    }
}
