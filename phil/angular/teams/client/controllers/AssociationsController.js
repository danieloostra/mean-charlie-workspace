app.controller('AssociationsController', ['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory) {
    $scope.associations = [];
    $scope.players = [];
    $scope.teams = [];

    playerFactory.index(function(data) { $scope.players = data; });
    teamFactory.index(function(data) { $scope.teams = data; });

    $scope.addAssociation = function() {
        $scope.newAssoc.player = {name: $scope.newAssoc.player};
        $scope.newAssoc.team = {name: $scope.newAssoc.team};
        $scope.associations.push($scope.newAssoc);
        $scope.newAssoc = {};
    }
    $scope.removeAssociation = function(index) {
        $scope.associations.splice(index, 1);
    }
}]);
