app.controller('rootController', ['friendsFactory', function (friendsFactory) {
	this.friends = [];
	this.friend = {};
	var _this = this;
	this.index = function(){
		friendsFactory.index(function(returned_data){
			_this.friends = returned_data;
		});
	}
	this.index();

	this.show = function (index) {
		friendsFactory.show(index, function (returned_data) {
			_this.friend.name = returned_data;
		});
	}

	this.delete = function (index) {
		friendsFactory.delete(index, function (returned_data){
			_this.friends = returned_data;
		});
	}
}]);