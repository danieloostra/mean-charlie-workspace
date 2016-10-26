app.factory('userFactory', ['$http', function($http) {
  // constructor for our factory
  function userFactory(){
   	this.index = function(callback) {
      $http.get('/users').then(
        function(returned_data) {
          var users = returned_data.data;
          callback(users);
        }); 
      }

    this.loginUser = function(data, callback) {
      console.log("factory", data)
   		$http.post('/login', data).then(
   			function(returned_data) {
   				console.log('Factory Returned Data', returned_data);
   				callback(returned_data);
   			});
   		}
    }
    return new userFactory();
}]);