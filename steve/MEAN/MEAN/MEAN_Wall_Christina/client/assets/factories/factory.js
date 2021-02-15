app.factory('usersFactory', ['$http', function($http){
	var users = [];
	var myFactory = {};
	myFactory.regUsers = function(user, callback, errback, userback){
		$http.post('/register', user).then(function(users_json){
			//----.data gave user_json as object--//
			console.log(users_json.data)
			//----This is the error check----/
			if(users_json.data.message){
				errback(users_json.data);
			}
			else{
				users.push(users_json.data);
				userback(users_json.data)
				callback(users);
			}
		})
	}
	myFactory.loginUsers = function(user, callback, errback, userback){
		$http.post('/login', user).then(function(users_json){
			console.log('factory')
			if(users_json.data.message){
				console.log('factory err')
				errback(users_json.data.message);
			}
			else{
				userback(users_json.data)
				callback(users)
			}
		})
	}
	myFactory.getUsers = function(user, callback){
		$http.get('/users').then(function(users_json){
			users = users_json.data;
			callback(users);
		})
	}
	myFactory.getUser = function(id, callback){
		$http.get('/users/'+id).then(function(users_json){
			if(users_json.data.message){
				response.json('Could not get user')
			}
			else{
				callback(users_json.data)
			}
		})
	}
	return myFactory;
}])