app.controller('newController', ['$scope', 'friendFactory', '$location', function($scope, friendFactory, $location) {
    $scope.friend = {};

    $scope.create = function() {
        friendFactory.create($scope.friend, function(data) {
            $location.url(`/show/${data._id}`);
        });
    }
}])
