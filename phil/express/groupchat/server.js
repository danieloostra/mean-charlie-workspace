var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
});

var server = app.listen(8000, function() { console.log('listening on port 8000'); });
var io = require('socket.io').listen(server);

var chat_content = "";
io.sockets.on('connection', function(socket) {
    var user_name;
    socket.on('user_connect', function(data) {
        user_name = data.name;
        var tempStr = `<p class='join'>${user_name} has joined the chat.</p>`;
        chat_content += tempStr;
        socket.emit('send_full_chat', { chat: chat_content });
        socket.broadcast.emit('send_chat_update', { content: tempStr });
    });
    socket.on('add_message', function(data) {
        var tempStr = `<p><span class='username'>${user_name}:</span>${data.message}</p>`;
        chat_content += tempStr;
        io.emit('send_chat_update', { content: tempStr });
    });
    socket.on('disconnect', function() {
        var tempStr = `<p class='exit'>${user_name} left the chat.</p>`;
        chat_content += tempStr;
        socket.broadcast.emit('send_chat_update', { content: tempStr });
    });
});
