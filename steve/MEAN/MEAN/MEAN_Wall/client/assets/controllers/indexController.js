app.controller('indexController', ['$scope','userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies) {
$scope.users = []
var index = function(){
  userFactory.index(function(returnedData){
    $scope.users = returnedData;
  });
};
index();
}]);