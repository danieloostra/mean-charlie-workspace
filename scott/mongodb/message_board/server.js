var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var commentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	comment: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Post', postSchema);
mongoose.model('Comment', commentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', (req, res) => {
	Post.find({}).populate('comments').exec((err, posts) => {
		res.render('index', {posts: posts});
	});
});

app.post('/post', (req, res) => {
	var newPost = new Post();
	newPost.name = req.body.name;
	newPost.message = req.body.message;
	newPost.save((err) => {
		if (err) {
			console.log("Error saving!");
		} else {
			res.redirect('/');
		}
	});
});

app.post('/comment/:id', (req, res) => {
	Post.findOne({_id: req.params.id}, (err, post) => {
		var newComment = new Comment();
		newComment.name = req.body.name;
		newComment.comment = req.body.comment;
		newComment._post = post._id;
		newComment.save((err) => {
			if (err) {
				console.log("Error saving comment!");
			} else {
				post.comments.push(newComment);
				post.save((err) => {
					if (err) {
						console.log("Error saving post!");
					} else {
						res.redirect('/');
					}
				});
			}
		});
	});
});

app.listen(8000, () => {
	console.log("listening on 8000");
});