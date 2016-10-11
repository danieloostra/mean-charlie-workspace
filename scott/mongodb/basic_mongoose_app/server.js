var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema( {
	name: String,
	age: Number
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            console.log("Error!");
        } else {
            console.log(users);
            res.render('index', {users: users});
        }
    });
});

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);

    var user = new User({name: req.body.name, age: req.body.age});

    user.save(function (err) {
    	if (err) {
    		console.log('Something went wrong.');
    	} else {
    		console.log('Successfully added a user!')
    		res.redirect('/');
    	}
    })
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});