app.controller('regController', ['$scope', 'usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies){
	$scope.users=[];
	$scope.user={};
	$scope.message = '';
	function success(users){
		$scope.users = users;
		$scope.user = {};
		console.log('success')
	}
	function getUser(user){
		$cookies.putObject('user', user);
		$scope.user = user;
		$location.url('/success');
	}
	//-err is user_json.data so err.message is message-//
	function error(err){
		if(err.errors.password){
			$scope.message = err.errors.password.message;
		}
		else if(err.errors.first_name){
			$scope.message = err.errors.first_name.message;
		}
		else if(err.errors.last_name){
			$scope.message = err.errors.last_name.message;
		}
		else if(err.errors.bday){
			$scope.message = err.errors.bday.message;
		}
		else{
			$scope.message = err.message;
		}
	}
	$scope.regUser = function(){
		console.log('regUser')
		if($scope.user.password != $scope.user.password_confirm){
			$scope.message = 'password and password confirm must match';
		}
		else{
			$scope.message = '';
			usersFactory.regUsers($scope.user, success, error, getUser);
		}
		
	}
}])