app.factory('userFactory', ['$http', function($http) {
  // constructor for our factory
  // var users = [];
  // var user = [];
  function userFactory(){
  	this.index = function(callback) {
  		$http.get('/users').then(
  			function(returned_data) {
  				var users = returned_data.data;
  				callback(users);
  			});	
  		}

 	this.create = function(data, callback) {
 		$http.post('/create', data).then(
 			function(returned_data) {
 				callback(returned_data);
 			});
 		}
 	this.login = function(data, callback) {
 		console.log("Factory", data);
 		$http.post('/login', data).then(
 			function(returned_data) {
 				callback(returned_data);
 			});
 		}
    }
    return new userFactory();
}]);