console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      console.log("Factory Friend", newfriend);
      $http.post('/friends', newfriend).then(function(returned_data){
        // console.log("Factory Callback", returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(){ // what parameters do we need?
      friend.findOne({_id})
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        // console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){// what parameters do we need?

        $http.delete('/friends/' + id).then(function(returned_data) {
          // console.log('Delete', returned_data.data);
          friends = returned_data.data;
          callback(friends);
        })
    
    };
    this.show = function(id, callback){
      console.log("friends Factory" + id);
      $http.get('/friends/' + id).then(function(returned_data) {
        friends = returned_data.data;
        console.log(friends);
        callback(friends);
      })


    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  // console.log(new FriendsFactory());
  return new FriendsFactory();
}]);