const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('/../database');
const PORT = 3000;

express()
.use(bodyParser.json())
.use((req, res, next) => {
	console.log(`${req.method} request for ${req.url}`);
	if (req.body) {
		console.log(`BODY: ${JSON.stringify(req.body, 2)}`)
	}
	next();
})
.get('/', (req, res) => res.send('hello'))
.use(express.static(path.join(__dirname, '/../client/dist')))
.listen(PORT, () => console.log(`listening on port ${PORT}`));