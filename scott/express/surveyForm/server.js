var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
	response.render('index');
});

app.post('/success', (request, response) => {
	console.log(request.body);
	response.render('success', request.body);
});

app.listen(8000, () => {
	console.log("listening on port 8000");
})