app.factory('messagesFactory', ['$http', function($http){
	var messages = [];
	var myFactory = {};
	myFactory.getMessages = function(callback, errback){
		$http.get('/message').then(function(message_json){
			if(message_json.data.errors){
				errback(message_json.data.errors.message.message);
			}
			else{
				messages = message_json.data;
				callback(message_json.data);
			}
		})
	}
	myFactory.addMessages = function(message, callback, errback){
		$http.post('/message', message).then(function(message_json){
			if(message_json.data.errors){
				errback(message_json.data.errors.message.message);
				console.log(message_json.data.errors.message.message);
			}
			else{
				messages.push(message_json.data);
				callback(messages);
			}
		})
	}


	return myFactory;
}])
