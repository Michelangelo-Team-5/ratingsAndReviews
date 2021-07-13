let db = require('../database/index.js');

module.exports = {
    getAll(callback) {
        let query = 'SELECT * FROM cows'
        db.query(query, (err, cows) => {
            callback(err, cows);
        });
    },

    create() {

    }
}