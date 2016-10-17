app.controller('CustomizeUsersController', ['$scope', 'userFactory', function($scope, userFactory) {
    $scope.users = [];

    userFactory.index(function(data) { $scope.users = data; });

    // $scope.getUsers = function() {
    //     userFactory.index(function(data) {
    //         $scope.users = data;
    //     });
    // }
    $scope.addUser = function() {
        userFactory.create($scope.newUser, function() {
            $scope.newUser = {};
        });
    }
    $scope.removeUser = function(index) {
        userFactory.destroy(index, function() { return; });
    }

    // $scope.getUsers();
}]);
