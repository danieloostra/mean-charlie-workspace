var app = angular.module("myApp", ["ngRoute"]);
var path = require('path');

app.get('/', function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(process.env['APPROOT'], 'client/index.html'));
	})
})
	// .when("/new", {
	// 	templateUrl: "new.html"
	// })
	// .when("/edit/:id", {
	// 	templateUrl: "edit.html"
	// })
	// .when("/show/:id", {
	// 	templateUrl: "show.html"
	// })
})