var express = require('express');
var path = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
	response.render('index');
});

var server = app.listen(8000, () => {
	console.log("listening 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
	var primary = {content: ""};
	var admin = true;

	socket.broadcast.emit('check', {});

	socket.on('proceed', (data) => {
		console.log(data);
		if (admin) {
			socket.broadcast.emit('flagged', {admin: true});
		}
	})

	socket.on('notify', (data) => {
		console.log('a')
	})

	socket.emit('one', {});

	socket.on('two', (data) => {
		socket.broadcast.emit('three', {});
	})
	socket.on('four', (data) => {
		io.emit('five', primary);
	})
	socket.on('six', (data) => {
		primary = data;
		socket.emit('seven', primary);
	})
	socket.on('new_message', (data) => {
		primary['content'] = data.all + data.message;
		io.emit('give_all', data);
	})
})