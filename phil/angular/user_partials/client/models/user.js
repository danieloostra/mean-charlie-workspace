app.factory('userFactory', function() {
    var users = [
        {first_name:'Phil', last_name:'Boothe', language:'JavaScript'},
        {first_name:'Adam', last_name:'Jacobs', language:'Python'},
        {first_name:'Gracie', last_name:'Lacy', language:'Ruby'}
    ];
    var factory = {};

    factory.index = function(callback) {
        callback(users);
    }
    factory.create = function(user, callback) {
        users.push(user);
        callback();
    }
    factory.destroy = function(index, callback) {
        users.splice(index,1);
        callback();
    }
    factory.show = function(index, callback) {
        callback(users[index]);
    }

    return factory;
})
