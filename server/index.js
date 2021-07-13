const express = require('express');
const path = require('path');
const router = require('./routes.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});


// app.get('/api/cows', (req, res) => {
//   models.getAll()
// });

// app.post('/api/cows', (req, res) => {
//   console.log('req.body:  ',req.body);
//   res.json(req.body);
// });

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
