console.log('loading friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
function FriendsController() {
    this.index = function(req, res) {
        Friend.find({}, function(err, muppets) {
            if (err) {
                res.json({error: err});
            } else {
                res.json({placeholder:'index'});
            }
        });
    }
    this.show = function(req, res) {
        Friend.findOne({_id:req.params.id}, function(err, friend) {
            if (err) {
                res.json({error: err});
            } else {
                res.json({placeholder:'show'});
            }
        });
    }
    // POST methods
    this.create = function(req, res) {
        var friend = req.body.friend;
        friend.save(function(err) {
            if (err) {
                res.json({error:err});
            } else {
                res.json({placeholder:'create'});
            }
        });
    }
    this.update = function(req, res) {
        Friend.update({_id:req.params.id}, {$set: {

        }}, function(err, muppet) {
            if (err) {
                res.json({error:err});
            } else {
                res.json({placeholder:'update'});
            }
        });
    }
    this.delete = function(req, res) {
        Muppet.remove({_id:req.params.id}, function(err) {
            if (err) {
                res.json({error:err});
            } else {
                res.json({placeholder:'delete'});
            }
        });
    }
}
module.export = new FriendsController();
