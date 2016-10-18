console.log('loading friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
function FriendsController() {
    this.index = function(req, res) {
        Friend.find({}, function(err, friends) {
            if (err) { console.log(`Error: ${err}`); }
            res.json(friends);
        });
    }
    this.show = function(req, res) {
        Friend.findOne({_id:req.params.id}, function(err, friend) {
            if (err) { console.log(`Error: ${err}`); }
            res.json(friend);
        });
    }
    // POST methods
    this.create = function(req, res) {
        Friend.create(req.body, function(err, result) {
            if (err) { console.log(`Error: ${err}`); }
            res.json(result);
        });
    }
    this.update = function(req, res) {
        Friend.findOne({_id:req.params.id}, function(err, friend) {
            if (err) { console.log(`Error: ${err}`); }
            friend.first_name = req.body.first_name;
            friend.last_name = req.body.last_name;
            friend.dob = req.body.dob;
            friend.save(function(err, updatedFriend) {
                if (err) { console.log(`Error: ${err}`); }
                res.json(updatedFriend);
            });
        });
    }
    this.delete = function(req, res) {
        Muppet.remove({_id:req.params.id}, function(err, result) {
            if (err) { console.log(`Error: ${err}`); }
            res.json(result);
        });
    }
}
module.export = new FriendsController();
