var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
	if(reqeust.url === '/'){
		fs.readFile('index.html', 'utf-8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(reqeust.url === '/ninjas'){
		fs.readFile('ninjas.html', 'utf-8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(reqeust.url === '/dojos/new'){
		fs.readFile('dojos.html', 'utf-8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else {
		response.writeHead(404);
        response.end('File not found!!!');
	}
});
server.listen(6789);
console.log("Running in localhost at port 6789");