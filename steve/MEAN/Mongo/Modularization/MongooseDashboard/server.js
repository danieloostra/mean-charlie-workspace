
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = 3000;

var app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mongoose.connect("mongodb://localhost/dog_db");

var DogSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  color: String,
})

var Dog = mongoose.model('Dog', DogSchema);

Dog.find({}, function(err, results){
  console.log("ERROR:", err);
  console.log("RESULTS", results);

})

app.get('/', function(req, res){
    Dog.find({}, function(err, results) {
      res.render('index', {dogs: results});
  })
  
});

app.post('/', function(req, res) {
  Dog.create(req.body, function(err, result) {
    if (err) { console.log(err); }
    res.redirect('/');
  })
})

app.post('/:id/delete', function(req, res) {
  res.redirect('/');
})

app.get('/new', function(req, res) {
  res.render('new');
});

app.get('/:id/edit', function(req, res) {
  console.log(req.params.id);
  var id = req.params.id;
  res.render('edit', {id: id});
});

app.post('/:id' function(req, res) {
  console.log("Need to update Dog!")
  res.redirect('/');

  ));

app.get('/:id', function(req, res) {
  res.render('show');
});

app.listen(port, function() {
  console.log("Running on", port);
});
