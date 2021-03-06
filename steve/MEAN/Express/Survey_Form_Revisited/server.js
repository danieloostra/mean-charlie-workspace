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

app.post('/result', function(req, res) {
	var info = {
		name: req.body.name,
		location: req.body.location, 
		language: req.body.language
	};
	res.render("result", {info, info})
	
});


// tell the express app to listen on port 8000
// app.listen(8000, function() {
//  console.log("listening on port 8000");
// });

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  socket.on("posting_form", function (data){
  	console.log(data);
    	var random_number = Math.floor(Math.random() * 1000) + 1;
  	socket.emit("updated_message", {response: data});
  	socket.emit("random_number", {response: random_number});

  })
})
