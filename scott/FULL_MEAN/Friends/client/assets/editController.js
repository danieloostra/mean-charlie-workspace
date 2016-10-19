app.controller('editController', ['$location', '$routeParams', 'friendsFactory', function ($location, $routeParams, friendsFactory) {
	this.id = $routeParams.id;

	this.edit = function () {
		friendsFactory.update(this.id, this.change);
		$location.url('/');
	}
}]);