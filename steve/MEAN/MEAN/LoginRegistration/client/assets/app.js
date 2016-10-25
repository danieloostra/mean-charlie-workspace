var app =angular.module('friends', ['ngRoute'])

// var bcrypt = require('bcryptjs');
// bcrypt.hashSync(password, bcrypt.genSaltSync(8));

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/users.html',

		})
})