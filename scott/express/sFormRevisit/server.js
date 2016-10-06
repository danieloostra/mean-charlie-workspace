var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
	response.render('index');
})

var server = app.listen(8000, function () {
	console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	socket.on('posting_form', function (data) {
		socket.emit('updated_message', {message: 'This is a message. Your name is ' + data.name + ', you go to coding dojo in ' + data.location + ', your favorite language is ' + data.language + ', and you felt the need to leave the following comment: ' + data.comments});
		socket.emit('random_number', {randnum: Math.floor(Math.random() * 1000) + 1});
	});
});