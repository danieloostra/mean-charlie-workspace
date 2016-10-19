app.controller('newController', ['$location', 'friendsFactory', function ($location, friendsFactory) {
	this.create = function () {
		friendsFactory.create(this.newFriend);
		$location.url('/');
	}
}]);