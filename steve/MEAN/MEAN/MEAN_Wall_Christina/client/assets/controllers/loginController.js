app.controller('loginController', ['$scope', 'usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies){
	$scope.users=[];
	$scope.user={};
	$scope.message = '';
	console.log('here')
	function success(users){
		$scope.users = users;
		$scope.user = {};
	}
	function getUser(user){
		$scope.user = user;
		$cookies.putObject('user', user);
		$location.url('/success');
	}
	function error(err){
		$scope.message = err;
	}
	$scope.loginUser = function(){
		usersFactory.loginUsers($scope.user, success, error, getUser)
	}
}])