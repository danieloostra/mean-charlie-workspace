var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req,res){
		Friend.find({}, (err, friends) => {
			if (err) {
				console.log(err);
			} else {
				res.json(friends);
			}
		})
	};
	this.create = function(req,res){
		var newFriend = new Friend();
		newFriend.name = req.body.name;
		newFriend.save( (err) => {
			if (err) {
				console.log(err);
			} else {
				res.json(newFriend);
			}
		});
	};
	this.update = function(req,res){
		Friend.update({_id: req.params.id}, {name: req.body.name}, (err) => {
			if (err) {
				console.log(err);
			} else {
				Friend.find({}, (err, friends) => {
					if (err) {
						console.log(err);
					} else {
						res.json(friends);
					}
				})
			}
		});
	};
	this.delete = function(req,res){
		console.log(req.param.id)
		Friend.remove({_id: req.params.id}, (err) => {
			if (err) {
				console.log(err);
			} else {
				Friend.find({}, (err, friends) => {
					res.json(friends);
				})
			}
		});
	};
	this.show = function(req,res){
		Friend.find({_id: req.params.id}, (err, friend) => {
			if (err) {
				console.log(err);
			} else {
				res.json(friend);
			}
		});
	};
}

module.exports = new FriendsController();