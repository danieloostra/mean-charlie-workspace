app.controller('loginController', ['$scope','userFactory', '$location', function($scope, userFactory, $location){
    $scope.loginUser = function(){
      userFactory.login($scope.user, function (returned_data){
        console.log(returned_data);
      })
    }

// $scope.User = {}; 

}]);