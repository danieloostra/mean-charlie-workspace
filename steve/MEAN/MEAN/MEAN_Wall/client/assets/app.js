var app =angular.module('wall', ['ngRoute', 'ngCookies'])

// var bcrypt = require('bcryptjs');
// bcrypt.hashSync(password, bcrypt.genSaltSync(8));

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
		})
		.when('/messages', {
			templateUrl: 'partials/wall.html',
		
		})
})