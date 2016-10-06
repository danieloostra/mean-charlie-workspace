var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response) {

	console.log(request.url.split('/'));

	if (request.url === '/') {
		fs.readFile('views/index.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/cats') {
		fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/cars') {
		fs.readFile('views/car.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/cars/new') {
		fs.readFile('views/carsnew.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/styles/style.css') {
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/images/cat.jpg') {
		fs.readFile('images/cat.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	} else if (request.url === '/images/car.jpg') {
		fs.readFile('images/car.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	} else {
		response.writeHead(404);
		response.end('File not found.')
	}
})

server.listen(6789);

console.log("Running localhost in 6789");