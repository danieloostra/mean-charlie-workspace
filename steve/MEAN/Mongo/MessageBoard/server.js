var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board')

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true, minlength: 3},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

var CommentSchema = new mongoose.Schema( {
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    comment: { type: String, required: true},
    comment_name: { type: String, required: true}
})

var Message = mongoose.model('Message', MessageSchema)

app.get('/', function(req, res) {
    	Message.find({}, function(err, results){
		if(err) { console.log(err); }
	res.render('index', {messages: results, comments: results});
	})
})

app.post('/', function(req, res) {
    console.log("POST DATA", req.body);
    var messageInstance = new Message();
    messageInstance.name = req.body.name;
    messageInstance.message = req.body.message;
    messageInstance.save(function(err) {
    	if (err) {
    		res.render('index', {title: 'you have errors!', errors: messageInstance.errors})
    	}
    	else {
    		res.redirect('/');
    	}
    })
})

app.post('/comment/:id', function(req, res) {
    console.log("POST DATA", req.body);
    var message_id = req.param.id; 
    Message.findOne


    })
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})

    // <% if(typeof(errors) != 'undefined' ) { %>
    //  <% for (var x in errors) { %>
    //   <h3><%= errors[x].message %></h3>
    //  <% } %>
    // <% } %>
