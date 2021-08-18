const models = require('../models/models.js');
let db = require('../database/index.js');
// New date(number).toISOString();
// to_timestamp(reviews.date/1000) AS date,

module.exports = {
  async get(req, res) {
    let { product_id } = req.params;

    const query = `SELECT
            r.id AS review_id,
            r.product_id,
            r.rating,
            r.summary,
            r.recommend,
            r.response,
            r.body,
            r.date,
            r.reviewer_name,
            r.helpfulness,
            json_agg(json_build_object('id', rp.id, 'url', rp.url)) AS photos
            FROM reviews AS r LEFT JOIN reviews_photos AS rp on r.id = rp.review_id
            WHERE product_id = ${product_id} AND reported = false
            GROUP BY r.id limit 5`;

    try {
      const results = await db.query(query);
      res.send(
        // count,
        // page,
        // sort,
        // product_id,
        results
      );
    } catch (err) {
      return err;
    }
  },

  async updateHelpfulness(req, res) {
    let review_id = req.params.review_id;
    // debugger;
    const query = `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id = ${review_id}`;
    try {
      const results = await db.none(query);
      console.log(results);
      res.sendStatus(200).json(results);
      return;
    } catch (err) {
      console.error(err);
    }
  },

  async updateReport(req, res) {
    let review_id = req.params.review_id;
    const query = `UPDATE reviews SET reported = true WHERE id = ${review_id}`;
    try {
      const results = await db.none(query);
      console.log(results);
      res.sendStatus(200);
      return;
    } catch (err) {
      console.error(err);
    }
  },

  async postReview(req, res) {
    debugger;
    let { product_id, rating, summary, body, date, recommend, name, email, photos, characteristics } = req.body;
    try {
    //   const getReviewId = 'SELECT MAX( id ) FROM reviews;';
    //   let [{ max: review_id }] = await db.query(getReviewId);
    //   review_id++;

      //INSERT INTO REVIEWS TABLE/////////
      const reviewQuery = `INSERT INTO
          reviews
            (
              product_id,
              rating,
              summary,
              body,
              date,
              recommend,
              reviewer_name,
              reviewer_email,
              reported
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

      db.none(reviewQuery, [product_id, rating, summary, body, date, recommend, name, email, false]);

      res.sendStatus(201);

    //   //INSERT INTO PHOTOS TABLE/////////
    // //   const getPhotoId = 'SELECT MAX( id ) FROM photos;';
    // //   let [{ max: photo_id }] = await db.query(getPhotoId);
    // //   photo_id++;

    //   for (photo of photos) {
    //     const photoQuery = `INSERT INTO photos(id, url, review_id) VALUES($1, $2, $3)`;
    //     await db.none(photoQuery, [photo_id, photo, review_id]);
    //     photo_id++;
    //   }

    //   //INSERT INTO CHARACTERISTICS /////////
    //   const charsQuery = `INSERT INTO characteristics ()`;
      //INSERT INTO CHARACTERISTIC_REVIEWS /////////
    } catch (err) {
      console.error(err);
    }
  }

};

// select c.product_id, c.name, cr.value, cr.id, r.rating, r.recommend, cr.value
// from characteristics as c inner join characteristic_reviews as cr on c.id = cr.characteristic_id
// inner join reviews as r on r.id = cr.review_id
// where r.id = 1
// group by c.product_id,c.name, cr.value, cr.id, r.rating, r.recommend

// helpfulness: async ({ review_id }) => {
//     const query = `UPDATE
//       reviews
//         SET helpfulness = helpfulness + 1
//         WHERE id = $1`;
//     try {
//       const results = await db.query(query, [review_id]);
//       return;
//     }
//     catch (err) {
//       return err;
//     }

// const q =
//  `select c.product_id, c.name, cr.value, cr.id, r.rating,r.recommend, cr.value
//   from characteristics as c inner join characteristic_reviews as cr on c.id = cr.characteristic_id
//   inner join reviews as r on r.id = cr.review_id
//   where r.product_id = ${req.params.id}
//   group by c.product_id,c.name, cr.value, cr.id, r.rating, r.recommend `;

/*

const Api_meta = reviews_meta.rows.reduce((obj, ele) => {
      const {product_id,name,value,id,rating,recommend} = ele;
      obj['product_id'] = `${product_id}`;
      obj['ratings'] = reviews_meta.rows.reduce((acc, {rating}) => {
      rating in acc ? acc[rating] += 1: acc[rating] = 1;  return acc; },{});
      obj['recommended'] = {...obj['recommended'],[recommend]:value};
      obj['characteristics'] = reviews_meta.rows.reduce((obj2,{id,value,name}) => {
      obj2[name] = {id,value}; return obj2 }, {}); return obj; },{});
      console.log('api_review', Api_meta);
    res.json(reviews_meta)

*/
