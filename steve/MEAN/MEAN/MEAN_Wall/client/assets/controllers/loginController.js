app.controller('loginController', ['$scope','userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){
    $scope.loginUser = function(){
    	
      userFactory.loginUser($scope.user, function (returned_data){
      		$cookies.put('user', returned_data.data.user);
       		console.log('login Controller:', returned_data.data.user)
       		$location.path('/messages')
      })
    }
}]);