var express = require('express');
var path = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
	response.render('index');
});

var server = app.listen(8000, () => {
	console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
	socket.on('clicked', (data) => {
		io.emit('wellhere', {add: 1});
	});
	socket.on('reset', (data) => {
		io.emit('goodbye', {nil: 0});
	});
});