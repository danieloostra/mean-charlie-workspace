var express = require('express');
var path = require("path");
// var bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
});

var server = app.listen(8000, function() { console.log('listening on port 8000'); });
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    io.emit("initial_counter", { count: 0 });
    socket.on("countify", function(data) {
        io.emit('countify_broadcast', { count: Number(data.count)+1 });
    });
    socket.on("reset_count", function() {
        io.emit("initial_counter", { count: 0 });
    });
});
