"use strict";

var http = require('http');

var fs = require('fs');

var server = http.createServer((request, response) => {
	if (request.url === '/') {
		fs.readFile('index.html', 'utf8', (errors, contents) => {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/ninjas') {
		fs.readFile('ninja.html', 'utf8', (errors, contents) => {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else if (request.url === '/dojos/new') {
		fs.readFile('dojos.html', 'utf8', (errors, contents) => {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	} else {
		response.writeHead(404);
		response.end('File not found!!!');
	}
});

server.listen(6789);

console.log("Running in localhost at port 6789");