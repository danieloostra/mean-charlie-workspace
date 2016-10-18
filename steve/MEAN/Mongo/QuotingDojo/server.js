var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/QuotesDB');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var QuoteSchema = new mongoose.Schema( {
	name: String,
	quote: String,
	time: String
})

var Quote = mongoose.model('quotes', QuoteSchema);

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
	Quote.find({}, function(err, results) {
		if(err) { console.log(err); }
		console.log(results);
		res.render('quotes', {quotes: results});
	});
	Quote.sort({ key: -1 })
});

app.post('/quotes', function(req, res) {

    var d = new Date();
    var quoteInstance = new Quote()
    quoteInstance.name = req.body.name;
    quoteInstance.quote = req.body.quote;
    quoteInstance.time = d;
    quoteInstance.save(function(err) {

    })
    res.redirect('/quotes');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})