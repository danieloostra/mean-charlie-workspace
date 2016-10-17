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
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength:2 },
    content: { type:String, required:true, minlength:2 },
    comments: [{ type:Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true});
mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

var CommentSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength:2 },
    content: { type:String, required:true, minlength:2 },
    _post: { type:Schema.Types.ObjectId, ref: 'Post' }
}, {timestamps: true});
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

app.get('/', function(req, res) {
    Post.find().populate('comments').exec(function(err, posts) {
        res.render("index", { posts:posts });
    });
});

app.post('/post', function(req, res) {
    var post = new Post({name: req.body.name, content: req.body.content, comments: []});
    post.save(function(err) {
        if (err) { console.log('Error: ' + post.errors); }
        res.redirect("/");
    });
});
app.post('/post/:id', function(req, res) {
    Post.findOne({_id:req.params.id}, function(err, post){
        var comment = new Comment({name: req.body.name, content: req.body.content});
        comment._post = post._id;
        comment.save(function(err) {
            post.comments.push(comment);
            post.save(function(err) {
                if (err) { console.log('Error: ' + comment.errors); }
                res.redirect("/");
            });
        });
    });
});

app.listen(8000, function() { console.log('listening on port 8000'); });
