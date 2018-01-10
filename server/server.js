const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
// const db = require('/../database');
const PORT = process.env.PORT || 1234;
const app = express();

https.createServer(app);

app.use(express.static(path.join(__dirname, '/../client/dist/')));
app.get('/', function(req, res){
	console.log('serving ' + req.method)
})

app.listen(PORT, '0.0.0.0', function() {
	console.log(`listening on ${PORT}`)
})















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