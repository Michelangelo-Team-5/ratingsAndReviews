const http = require('k6/http');
const { sleep } = require('k6');

export let options = {
  vus: 500,
  duration: '10s'
};

export default function () {
  http.get(`http://localhost:3000/api/reviews/2`)
  sleep(1);
}

// export default function () {
//   http.post(`http://localhost:3000/api/reviews`)
//   sleep(1);
// }

// export default function () {
//   http.put(`http://localhost:3000/api/reviews/3/helpful`)
//   sleep(1);
// }

// export default function () {
//   http.put(`http://localhost:3000/api/reviews/3/report`)
//   sleep(1);
// }

