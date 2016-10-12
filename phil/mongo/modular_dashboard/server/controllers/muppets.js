var mongoose = require('mongoose');
var Muppet = mongoose.model('Muppet');
module.exports = {
    // GET methods
    index: function(req, res) {
        Muppet.find({}, function(err, muppets) {
            if (err) {
                res.render("index", {muppets:null});
            } else {
                res.render("index", {muppets:muppets});
            }
        });
    },
    new: function(req, res) {
        res.render("new");
    },
    show: function(req, res) {
        Muppet.findOne({_id:req.params.id}, function(err, muppet) {
            if (err) {
                res.redirect("/");
            } else {
                res.render("show", {muppet:muppet});
            }
        });
    },
    edit: function(req, res) {
        Muppet.findOne({_id:req.params.id}, function(err, muppet) {
            if (err) {
                res.redirect("/muppets/" + req.params.id);
            } else {
                res.render("edit", {muppet:muppet});
            }
        });
    },
    // POST methods
    create:  function(req, res) {
        var muppet = new Muppet({
            name: req.body.name,
            color: req.body.color,
            type: req.body.type
        });
        muppet.save(function(err) {
            if (err) {
                res.redirect("/");
            } else {
                res.redirect("/muppets/"+muppet.id)
            }
        });
    },
    update: function(req, res) {
        Muppet.update({_id:req.params.id}, {$set: {
            name: req.body.name,
            color: req.body.color,
            type: req.body.type
        }}, function(err, muppet) {
            if (err) {
                res.redirect("/muppets/" + req.params.id + "/edit");
            } else {
                res.redirect("/muppets/" + req.params.id);
            }
        });
    },
    destroy: function(req, res) {
        Muppet.remove({_id:req.params.id}, function(err) {
            if (err) {
                res.redirect("/muppets/" + req.params.id);
            } else {
                res.redirect("/");
            }
        });
    }
}
