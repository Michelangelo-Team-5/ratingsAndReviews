const pgp = require('pg-promise')();
// 'postgres://username:password@localhost:5432/reviews'

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'reviews',
};

const db = pgp(cn);

// let testConnection = async function () {
//   try {
//     const c = await db.connect();
//     c.done();
//     return c.client.serverVersion;
//   } catch(err) {
//     console.error(err);
//   }
// }

// testConnection().then(res => {
//   console.log(res)
// })

module.exports = db;
