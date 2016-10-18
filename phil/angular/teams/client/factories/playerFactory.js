app.factory('playerFactory', function() {
    var players = [{name: 'Phil'}, {name: 'Gracie'}];
    var factory = {};

    factory.index = function(callback) {
        callback(players);
    }
    factory.create = function(player, callback) {
        players.push(player);
        callback();
    }
    factory.destroy = function(index, callback) {
        players.splice(index,1);
        callback();
    }
    factory.show = function(index, callback) {
        callback(players[index]);
    }

    return factory;
});
