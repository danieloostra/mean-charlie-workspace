var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "players.html"
		})
		.when("/teams", {
			templateUrl: "teams.html"
		})
		.when("/associations", {
			templateUrl: "associations.html"
		})
		.otherwise({
			redirectTo: "/"
		});
})

app.factory("playerFactory", function() {
	var factory = {};
	var players = [];
	//Pass the user list to a controller
	factory.index = function(callback) {
		callback(players)
	}
	//add new player to the list
	factory.create = function(player) {
		players.push(player);
	}
	//remove the user the list
	factory.delete = function($index) {
		players.splice($index, 1);
	}
	return factory;
})

app.factory("teamFactory", function() {
	var factory = {};
	var teams = [];
	//Pass the user list to a controller
	factory.index = function(callback) {
		callback(teams)
	}
	//add new player to the list
	factory.create = function(team) {
		team.players = [];
		teams.push(team);
	}
	//remove the user the list
	factory.delete = function($index) {
		teams.splice($index, 1);
	}
	factory.addPlayer = function(player, team) {
		console.log(player);
		console.log(team);
		team.players.push(player);
	}
	return factory;
})

app.controller("PlayersController", ['$scope', 'playerFactory', function($scope, playerFactory) {
	function setPlayers(data) {
		$scope.players = data; //initializes users
		$scope.newUser = {};
	}
	$scope.players = [];
	playerFactory.index(setPlayers);

	$scope.create = function() {
		playerFactory.create($scope.player)
		$scope.player = {};
	}
	$scope.delete = function($index) {
		playerFactory.delete($index);
	}
}])
app.controller("TeamsController", ['$scope', 'teamFactory', function($scope, teamFactory) {
	function setTeams(data) {
		$scope.teams = data; //initializes users
		$scope.newUser = {};
	}
	$scope.teams = [];
	teamFactory.index(setTeams);

	$scope.create = function() {
		teamFactory.create($scope.team)
		$scope.team = {};
	}
	
	$scope.delete = function($index) {
		teamFactory.delete($index);
	}
}])
app.controller("AssociationsController", ['$scope','playerFactory','teamFactory', function($scope, teamFactory, playerFactory) {
	function setPlayers(data) {
		$scope.players = data;
		$scope.newUser = {};
	}
	function setTeams(data) {
		$scope.teams = data;
		$scope.newUser = {};
	}
	$scope.players = [];
	$scope.teams = [];
	playerFactory.index(setPlayers);
	teamFactory.index(setTeams);

	$scope.associate = function() {

		teamFactory.addPlayer($scope.player, $scope.team);
	}

}])
