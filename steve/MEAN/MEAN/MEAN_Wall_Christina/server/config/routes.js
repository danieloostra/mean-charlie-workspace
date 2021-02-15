var users = require('./../controllers/users.js')
var messages = require('./../controllers/messages.js')
var comments = require('./../controllers/comments.js')
//--------routes------------------//
console.log('routes');

var path = require('path');

module.exports = function(app){
	app.get('/users', users.index);
	app.get('/users/:id', users.one);
	app.post('/login', users.login);
	app.post('/register', users.register);
	app.post('/message', messages.new);
	app.get('/message', messages.get);
	app.post('/comments', comments.new);
};