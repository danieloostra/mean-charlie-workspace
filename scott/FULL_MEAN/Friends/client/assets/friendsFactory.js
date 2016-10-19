console.log('loading factory');

app.factory('friendsFactory', ['$http', function ($http) {
    var friends = [];
    var factory = {};

    factory.create = function(newfriend){
        console.log(newfriend);
        $http.post('/friends', newfriend).then(function(returned_data) {
            if (typeof(callback) == 'function'){
                callback(returned_data);
            }
        });
    };

    factory.update = function(id, name) {
        $http.put('/friends/' + id, name).then((returned_data) => {
            friends = returned_data.data;
        });
    };

    factory.index = function(callback){
        $http.get('/friends').then((returned_data) => {
            friends = returned_data.data;
            callback(friends);
        });
    };

    factory.delete = function(id, callback) {
        $http.delete('/friends/' + id).then((returned_data) => {
            friends = returned_data.data;
            console.log(friends);
            callback(friends);
        })
    };

    factory.show = function(id, callback) {
        console.log(id)
        $http.get('/friends/' + id).then((returned_data) => {
            callback(returned_data.data[0].name);
        });
    };

    factory.getFriends = function(callback){
        callback(friends);
    };

    factory.getFriend = function(callback){
        callback(friend);
    };

    return factory;
}]);