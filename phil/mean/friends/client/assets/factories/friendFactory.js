console.log('loading Friend factory');
app.factory('friendFactory', ['$http', function($http) {
    // var friends = [];
    // var friend = {};
    function FriendsFactory() {
        var _this = this;
        var friends = [];

        this.index = function(callback) {
            $http.get('/friends').then(function(result) {
                console.log("INDEX results: ", result);
                friends = result.data;
                callback(friends);
            });
        }
        this.show = function(id, callback) {
            $http.get(`/friends/${id}`).then(function(result) {
                console.log("SHOW result data: ", result.data);
                callback(result.data);
            });
        }
        this.create = function(friend, callback) {
            $http.post('/friends', friend).then(function(result) {
                console.log("CREATE result data: ", result.data);
                callback(result.data);
            });
        }
        this.update = function(friend, callback) {
            $http.put(`/friends/${friend._id}`, friend).then(function(result) {
                console.log("UPDATE result data: ", result.data);
                callback(result.data);
            });
        }
        this.delete = function(id, callback) {
            $http.delete(`/friends/${id}`).then(function(result) {
                console.log("DELETE result: ", result);
                callback();
            });
        }
    }
    return new FriendsFactory();
}])
