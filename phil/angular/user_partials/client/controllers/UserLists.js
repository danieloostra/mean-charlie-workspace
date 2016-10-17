app.controller('UserListsController', ['$scope', 'userFactory', function($scope, userFactory) {
    $scope.users = [];

    $scope.getUsers = function() {
        userFactory.index(function(data) {
            $scope.users = data;
        });
    }

    $scope.getUsers();
}])
