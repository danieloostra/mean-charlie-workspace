"use strict";

var express = require('express');

var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
	response.send("<h1>Hello Express!</h1>");
})

app.get('/users', (request, response) => {
	var users_array = [
		{name: "Michael", email: "michael@codingdojo.com"},
		{name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
	];
	response.render('users', {users: users_array});
})

app.listen(8000, () => {
	console.log("listening to port 8000");
})