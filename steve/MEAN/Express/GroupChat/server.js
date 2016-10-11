var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//renders the homepage
app.get('/', function(req, res) {
 res.render("index");
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

 //sets up an array persons to hold all users
var users = []
//sets up an array that holds all the messages
var messages = []
//create a method in all user objects that can look for a user
var is_user = function(user) {
    //find the user length, which is always changing
    var users_count = users.length
    //for loop will go through all users in the users array
    for (var i = 0; i < users_count; i++) {
        //if the particular user = the user in the array
        if (user == users[i]) {
            return true
        }
    }
    //end the function if no name is found in the array. 
    return false;
}


var io = require('socket.io').listen(server)


io.sockets.on('connection', function (socket) {
	//receives the name emitted from the client #2
	socket.on("page_load", function (data){
		console.log(data);
		//run is_user function above to see if a user exists
		if(is_user(data.user) === true){
			//emits to client that user already exists #3
			socket.emit("existing_user", {error: "This user already exists"})
		} else {
			//add the user to the array
			users.push(data.user);
			console.log(users);
			//emits to client the messages #3
			socket.emit("load_messages", {current_user: data.user, messages: messages})
		}
	})
	socket.on("#new_message", function (data){
		console.log(data);
	})
})
