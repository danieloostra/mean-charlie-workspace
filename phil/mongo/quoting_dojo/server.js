var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/practicedb');
var QuoteSchema = new mongoose.Schema({
    author: String,
    quote: String
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function(req, res) {
    res.render("index");
});
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) {
            res.render("quotes", {quotes:null});
        } else {
            res.render("quotes", {quotes:quotes});
        }
    });
});

app.post('/quotes', function(req, res) {
    var quote = new Quote({author: req.body.author, quote: req.body.quote});
    quote.save(function(err) {
        if (err) {
            res.redirect("/");
        } else {
            res.redirect("/quotes")
        }
    });
});

app.listen(8000, function() { console.log('listening on port 8000'); });
