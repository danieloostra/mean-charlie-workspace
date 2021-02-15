app.controller('registerController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
$scope.registerUser = function(){
  userFactory.create($scope.newUser,function(returned_data){
  	if (returned_data.data.errors) {
  		console.log(returned_data.data.errors)
  		$scope.errors = returned_data.data.errors;
  	}
  	else{
  		$scope.user = returned_data.data;
  	}
    $scope.newUser = {}
    // $location.url('/')
  })
}
}]);