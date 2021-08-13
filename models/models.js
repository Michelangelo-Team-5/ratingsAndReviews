let db = require('../database/index.js');

module.exports = {
    getAll(callback) {
        let query = 'SELECT * FROM cows'
        db.query(query, (err, cows) => {
            callback(err, cows)
        });
    },

    create({name, description}, callback) {
        let query = 'INSERT INTO cows (name, description) VALUE (?,?)';
        db.query(query, [name, description], (err, results) => {
            callback(err, results);
        });
    }
}
