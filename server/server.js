const bodyParser = require('body-parser');
const path = require('path');

const helpers = require('./server.js');
const db = require('./../database/queries.js');

const express = require('express');
const app = express();
const https = require('https');
https.createServer(app);
const PORT = process.env.PORT || 1234;

app
  .use(express.static(path.join(__dirname, '/../client/dist/')))
  .get('/', (req, res) => console.log('serving ' + req.method))
  .listen(PORT, '0.0.0.0', () => console.log(`listening on ${PORT}`))