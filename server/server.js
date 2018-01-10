const bodyParser = require('body-parser');
const path = require('path');
// const db = require('/../database');
const express = require('express');
const app = express();
const https = require('https');
https.createServer(app);

app
  .use(express.static(path.join(__dirname, '/../client/dist/')))
  .get('/', (req, res) => console.log('serving ' + req.method))
  .listen((process.env.PORT || 1234), '0.0.0.0', () => console.log(`listening on ${PORT}`))















// .use(bodyParser.json())
// .use((req, res, next) => {
// 	console.log(`${req.method} request for ${req.url}`);
// 	// if (req.body) {
// 	// 	console.log(`BODY: ${JSON.stringify(req.body, 2)}`)
// 	// }
// 	// next();
// })
// .get('/', (req, res) => res.end())
// .use(express.static(path.join(__dirname, '/../client/dist')))
// .listen(PORT, () => console.log(`listening on port ${PORT}`));