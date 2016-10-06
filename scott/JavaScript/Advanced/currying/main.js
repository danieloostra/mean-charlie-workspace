"use strict";

function curryMe(person) {
	return (color) => {console.log("My name is " + person + " and my favorite color is " + color + ".");}
}

curryMe("Scott")("red")