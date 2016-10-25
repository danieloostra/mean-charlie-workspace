app.controller('indexController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
$scope.users = []
var index = function(){
  userFactory.index(function(returnedData){
    $scope.users = returnedData;
  });
};
index();
}]);