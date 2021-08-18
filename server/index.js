const express = require('express');
const path = require('path');
const router = require('./routes.js')
const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });

} else {

    const PORT = 3000;
    const app = express();

    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(express.json());
    app.use('/api', router);

    // app.get('/', (req, res) => {
    //   res.send('Hello from the server!');
    // });

    app.listen(PORT, () => {
      console.log(`Server listening at localhost:${3000}!`);
    });

}
