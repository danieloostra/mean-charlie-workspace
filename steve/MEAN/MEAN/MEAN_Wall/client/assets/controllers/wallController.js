app.controller('successController', ['$scope', 'userFactory', '$location', '$cookies', 'messagesFactory', 'commentsFactory', function($scope, usersFactory, $location, $cookies, messagesFactory, commentsFactory){
	$scope.users=[];
	$scope.user={};
	$scope.user = $cookies.getObject('user')
	$scope.messages = [];
	$scope.message = {};
	$scope.message._user = $scope.user;
	$scope.message.comment = [];
	$scope.error = '';
	$scope.comments = [];

	function getMessages(messages){
		$scope.messages = messages;
		$scope.message={};
		$scope.message._user = $scope.user;
		$scope.message.comment = [];
	}
	function getComments(comments){
		$scope.comments = [];
		messagesFactory.getMessages(getMessages, error);
	}
	function error(err){
		$scope.error = err;
	}
	$scope.logOut=function(){
		$cookies.remove('user');
		$location.url('/login');
	}
	$scope.addMessage = function(){
		messagesFactory.addMessages($scope.message, getMessages, error);
		messagesFactory.getMessages(getMessages, error);
	}
	$scope.addComment = function(index){
		if($scope.comments[index]){
			$scope.comments[index]._user = $scope.user;
			$scope.comments[index]._message = $scope.messages[index];
			commentsFactory.addComments($scope.comments[index], getComments, error);
		}
	}
	messagesFactory.getMessages(getMessages, error);
}])
