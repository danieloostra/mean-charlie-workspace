var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/basic_mongoose');

var MongooseSchema = new mongoose.Schema({
	name: String
});
mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose');

app.get('/', (request, response) => {
	Mongoose.find({}, (err, mongooses) => {
		if (err) {
			console.log('Error getting mongooses!');
		} else {
			response.render('index', {mongooses: mongooses});
		}
	});
});

app.get('/new', (request, response) => {
	response.render('new');
});

app.get('/:id', (request, response) => {
	Mongoose.find({_id: request.params.id}, (err, mongoose) => {
		if (request.params.id.match(/^[0-9a-fA-F]{24}$/)) {
			if (err) {
				console.log('Error getting ID!');
				console.log(err)
			} else {
				response.render('specific', {mongoose: mongoose});
			}
		} else {
			console.log(request.params.id)
		}
	});
});

app.get('/edit/:id', (request, response) => {
	Mongoose.find({_id: request.params.id}, (err, mongoose) => {
		if (err) {
			console.log("Hello?");
		} else {
			response.render('edit', {mongoose: mongoose});
		}
	});
});

app.get('/:id/destroy', (request, response) => {
	Mongoose.remove({_id: request.params.id}, (err) => {
		if (err) {
			console.log('Error destroying!');
		} else {
			response.redirect('/');
		}
	});
});

app.post('/create', (request, response) => {
	var newmongoose = new Mongoose();
	newmongoose.name = request.body.name;
	newmongoose.save( (err) => {
		if (err) {
			console.log("Error saving!");
		} else {
			response.redirect('/');
		}
	});
});

app.post('/update/:id', (request, response) => {
	Mongoose.update({_id: request.params.id}, {name: request.body.name}, (err) => {
		if (err) {
			console.log("Error editing!");
		} else {
			response.redirect('/');
		}
	});
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});