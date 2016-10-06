array = [
{title:'test',
boxoffice: 9.25
},
{title:'',
boxoffice: 10.25
}
]

function boxOffice(array){
	var arr2 = [];
	array.forEach(function(element){
		arr2.push('$' + element.boxoffice);
	});
	return arr2;
}

console.log(boxOffice(array));