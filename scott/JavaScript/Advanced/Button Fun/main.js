var button = document.getElementsByClassName('multibutton');
var container = document.getElementById('container');
var color = 'blue';
var count = 1;
console.log(button)

document.onkeypress = function(e) {
	if (e.keyCode == 13) {
		var newButton = document.createElement('BUTTON');
		newButton.className = 'multibutton';
		newButton.style.backgroundColor = 'blue';
		container.appendChild(newButton);
		button = document.getElementsByClassName('multibutton')
	}
	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener('click', function() {
			if (color === 'blue') {
				this.style.backgroundColor = 'red';
				color = 'red';
			} else {
				this.style.backgroundColor = 'blue';
				color = 'blue';
			}
		})

		button[i].onmouseout = function() {
			this.style.backgroundColor = color;
		}

		button[i].addEventListener('mouseover', function() {
			color = this.style.backgroundColor;
			this.style.backgroundColor = 'green';
		})
	}
}

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener('click', function() {
		if (color === 'blue') {
			this.style.backgroundColor = 'red';
			color = 'red';
		} else {
			this.style.backgroundColor = 'blue';
			color = 'blue';
		}
	})

	button[i].onmouseout = function() {
		this.style.backgroundColor = color;
	}

	button[i].addEventListener('mouseover', function() {
		color = this.style.backgroundColor;
		this.style.backgroundColor = 'green';
	})
}