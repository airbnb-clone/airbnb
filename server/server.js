const bodyParser = require('body-parser');
const path = require('path');
const routers = require('./routers.js')

const express = require('express');
const app = express();
const https = require('https');
https.createServer(app);
const PORT = process.env.PORT || 1234;


app
  .use(express.static(path.join(__dirname, '/../client/dist/')))
  .use(bodyParser.json())
  .use((req, res, next) => {
    console.log(`${req.method} request at path ${req.path}`);
    if (req.body) {		
      console.log(`req.body: ${JSON.stringify(req.body)}`);		
    }		
   if (req.query) {		
     console.log(`req.query: ${JSON.stringify(req.query)}`);		
    }		
    next();		
  })		
  .use('/', routers)
  .listen(PORT, '0.0.0.0', () => console.log(`listening on ${PORT}`))
