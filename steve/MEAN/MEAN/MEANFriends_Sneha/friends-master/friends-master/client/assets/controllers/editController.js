app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {

$scope.editUser = {}; 

var show = function(){
  friendsFactory.show($routeParams.id,function(returnedData){
    $scope.editUser = returnedData;
    // This changes the date to format the correct way
    var date = new Date(returnedData.birthdate) 
     date.toLocaleDateString('en-US')
    returnedData.birthdate = date; 
  });
};
show();


$scope.editedUser = function(){
  friendsFactory.update($scope.editUser,function(user){
    $location.url('/friends')
  })
}
}]);