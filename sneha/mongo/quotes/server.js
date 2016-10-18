// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Create connection to database
var connection = mongoose.connect("mongodb://localhost/quotes");

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

var Quote = mongoose.model('quotes', QuoteSchema);

// Here are our routes!
app.get('/', function(req, res){
  res.render('index');
});

app.get('/quotes', function(req, res){
  // Logic to grab all quotes and pass into the rendered view
  Quote.find({}, function(err, results){
    if(err) { console.log(err); }
    res.render('quotes', { quotes: results });
  });
});

app.post('/quotes', function(req, res){
  Quote.create(req.body, function(err){
    if(err) { console.log(err); }
    res.redirect('/quotes');
  });
});


app.listen(port, function(){
  console.log("Running on 3000 ", port);
})