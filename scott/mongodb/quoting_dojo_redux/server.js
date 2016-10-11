"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting');

var UserSchema = new mongoose.Schema({
	name: String,
	quote: String,
	date: String
});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/quotes', (req, res) => {
	User.find({}, (err, users) => {
		if (err) {
			console.log('Error getting quotes!');
		} else {
			res.render('quotes', {users: users});
		}
	});
});

app.post('/quotes', (req, res) => {
	var newUser = new User();
	newUser.name = req.body.name;
	newUser.quote = req.body.quote;

	var date = new Date();
	newUser.date = `${date.getHours()}:${date.getMinutes()} ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
	
	newUser.save();
	User.find({}, (err, users) => {
		if (err) {
			console.log('Error finding users!');
		} else {
			res.render('quotes', {users: users});
		}
	});
});

app.listen(8000, () => {
	console.log('running on 8000');
});