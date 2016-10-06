var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// var route = require.("./routes/index.js")(app)

app.get('/', function(req, res) {
 res.render("index");
});


var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server)
var count = 0;

io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
  	console.log(socket.id);
  	socket.on("button_clicked", function (data) {
  		count += 1;
  		console.log(data);
  		console.log(count);
  		socket.emit("count", {response: count});
  	})
  	socket.on("reset_clicked", function (data) {
  		count = 0;
  		console.log(data);
  		console.log(count);
  		socket.emit("reset", {response: count});
  	})
})
