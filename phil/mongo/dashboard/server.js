var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/practicedb');
var MuppetSchema = new mongoose.Schema({
    name: String,
    color: String,
    type: String
}, {timestamps: true});
mongoose.model('Muppet', MuppetSchema);
var Muppet = mongoose.model('Muppet');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Muppet.find({}, function(err, muppets) {
        if (err) {
            res.render("index", {muppets:null});
        } else {
            res.render("index", {muppets:muppets});
        }
    });
});
app.get('/muppets/new', function(req, res) {
    res.render("new");
});
app.get('/muppets/:id', function(req, res) {
    Muppet.findOne({_id:req.params.id}, function(err, muppet) {
        if (err) {
            res.redirect("/");
        } else {
            res.render("show", {muppet:muppet});
        }
    });
});
app.get('/muppets/:id/edit', function(req, res) {
    Muppet.findOne({_id:req.params.id}, function(err, muppet) {
        if (err) {
            res.redirect("/muppets/" + req.params.id);
        } else {
            res.render("edit", {muppet:muppet});
        }
    });
});


app.post('/muppets', function(req, res) {
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
});
app.post('/muppets/:id', function(req, res) {
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
});
app.post('/muppets/:id/destroy', function(req, res) {
    Muppet.remove({_id:req.params.id}, function(err) {
        if (err) {
            res.redirect("/muppets/" + req.params.id);
        } else {
            res.redirect("/");
        }
    });
});

app.listen(8000, function() { console.log('listening on port 8000'); });
