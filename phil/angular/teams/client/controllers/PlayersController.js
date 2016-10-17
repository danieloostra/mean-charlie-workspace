app.controller('PlayersController', ['$scope', 'playerFactory', function($scope, playerFactory) {
    $scope.players = [];

    playerFactory.index(function(data) { $scope.players = data; });

    $scope.addPlayer = function() {
        playerFactory.create($scope.newPlayer, function() {
            $scope.newPlayer = {};
        });
    }
    $scope.removePlayer = function(index) {
        playerFactory.destroy(index, function() { return; });
    }
}]);
