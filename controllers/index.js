const models = require('../models/models.js')

module.exports = {
    get(req, res) {
        models.getAll((err, cows) => {
            if (err) {
                return res.sendStatus(404);
            }
            res.json(cows)
        })
    },
    // post() {

    // }

}