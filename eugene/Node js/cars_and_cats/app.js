var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
	if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars') {
    	console.log(request.headers)
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('./views/new_cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/stylesheets/style.css'){
	    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
	     response.writeHead(200, {'Content-type': 'text/css'});
	     response.write(contents);
	     response.end();
	    })
	}
	else if(request.url === '/images/01.jpg'){
	    fs.readFile('./images/01.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
	else if(request.url === '/images/02.jpg'){
	    fs.readFile('./images/02.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
	else if(request.url === '/images/03.jpg'){
	    fs.readFile('./images/03.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
	else if(request.url === '/images/04.jpg'){
	    fs.readFile('./images/04.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
	else if(request.url === '/images/c_01.jpg'){
	    fs.readFile('./images/c_01.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
	else if(request.url === '/images/c_02.jpg'){
	    fs.readFile('./images/c_02.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
	else if(request.url === '/images/c_03.jpg'){
	    fs.readFile('./images/c_03.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
	else if(request.url === '/images/c_04.jpg'){
	    fs.readFile('./images/c_04.jpg', function(errors, contents){
	        response.writeHead(200, {'Content-type': 'image/jpg'});
	        response.write(contents);
	        response.end();
	    })
	}
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);