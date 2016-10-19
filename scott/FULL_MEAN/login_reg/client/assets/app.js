var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.factory('factory', ['$http', function ($http){
	var users = [];
	var factory = {};

	factory.getUsers = function (){
		return users;
	}

	factory.register = function (newUser, callback){
		$http.post('/register', newUser).then(function (data){
			console.log(data);
			if (data.data.errors) {
				callback(data);
			} else {
				console.log(data);
			}
		})
	}

	return factory;
}]);

app.controller('controller', ['factory', function (factory){
	this.users = factory.getUsers();
	var _this = this;

	this.register = function (){
		this.errors = {};
		factory.register(this.newUser, function (data){
			console.log(data.data.errors);
			if (data.data.errors) {
				_this.errors = data.data.errors;
				console.log(_this.errors)
			} else {
				this.users = factory.getUsers();
			}
		})
	}
}])