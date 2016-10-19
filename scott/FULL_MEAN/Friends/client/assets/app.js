console.log('loading app.js');

var app = angular.module('app', ['ngRoute']);
app.config(($routeProvider) => {
	$routeProvider.when('/new', {
		controller: 'newController',
		templateUrl: 'partials/new.html'
	}).when('/edit/:id', {
		controller: 'editController',
		templateUrl: 'partials/edit.html'
	}).when('/show/:id', {
		controller: 'showController',
		templateUrl: 'partials/show.html'
	}).otherwise({
		redirectTo: '/'
	});
});

console.log('done loading app.js');