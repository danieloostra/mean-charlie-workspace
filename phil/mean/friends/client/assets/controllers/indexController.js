app.controller('indexController', ['$scope', 'friendFactory', function($scope, friendFactory) {
    $scope.friends = [];

    $scope.delete = function(id) {
        friendFactory.delete(id, getFriends);
    }

    function getFriends() {
        friendFactory.index(function(data) {
            $scope.friends = data;
        });
    }
    getFriends();
}])
