app.controller('TeamsController', ['$scope', 'teamFactory', function($scope, teamFactory) {
    $scope.teams = [];

    teamFactory.index(function(data) { $scope.teams = data; });

    $scope.addTeam = function() {
        teamFactory.create($scope.newTeam, function() {
            $scope.newTeam = {};
        });
    }
    $scope.removeTeam = function(index) {
        teamFactory.destroy(index, function() { return; });
    }
}]);
