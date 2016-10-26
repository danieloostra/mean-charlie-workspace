app.factory('commentsFactory', ['$http', function($http){
	var myFactory = {};
	myFactory.addComments = function(comments, callback, errback){
		$http.post('/comments', comments).then(function(comments_json){
			if(comments_json.data.errors){
				errback(comments_json.data.errors);
			}
			else{
				callback(comments);
			}
		})
	}
	return myFactory;
}])