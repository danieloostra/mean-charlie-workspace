var http = require('http');
var fs = require('fs');
var path = require('path');

module.exports = function(request, response){
	var extention = path.extname(request.url);
	if (request.url === '/') {
		fs.readFile('./views/index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (extention == '.html'){
		fs.readFile('./views'+request.url, 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			request.end();
		});
	}
	else if (extention == '.png' || extention == '.jpg' || extention '.gif'){
		fs.readFile('.'+request.url, function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/*'});
			response.write(contents);
			response.end();
		});
	}
	else if (extention == '.css'){
		fs.readFile('.'+request.url, 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-type': 'text/css'});
	     	response.write(contents);
	     	response.end();
		});
	}
	else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
}