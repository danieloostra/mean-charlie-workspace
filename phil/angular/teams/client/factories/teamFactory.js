app.factory('teamFactory', function() {
    var teams = [{name: 'Shirts'}, {name: 'Blouses'}];
    var factory = {};

    factory.index = function(callback) {
        callback(teams);
    }
    factory.create = function(team, callback) {
        teams.push(team);
        callback();
    }
    factory.destroy = function(index, callback) {
        teams.splice(index,1);
        callback();
    }
    factory.show = function(index, callback) {
        callback(teams[index]);
    }

    return factory;
});
