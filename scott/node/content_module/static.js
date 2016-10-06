"use static";

module.exports = (request, response) => {

	var dirSegment = request.url.splice('/')
	var fileSegment = dirSegment.splice('.')

	function getImage(fileName) {

	}

	function getStyleSheet(fileName) {

	}

	function getHtml(htmlName) {

	}

	function getJs(jsName) {

	}

	function tryAny(anyName) {

	}

	switch (dirSegment[1]) {
		case 'images':
			getImage(dirSegment[2]);
			break;
		case 'styles':
			getStyleSheet(dirSegment[2]);
			break;
		default:
		
			switch (fileSegment[1]) {
				case '.html':
					getHtml(fileSegment[0]);
					break;
				case '.js':
					getJs(fileSegment[0]);
					break;
				default:
					tryAny(fileSegment[0]);
			}
	}
}