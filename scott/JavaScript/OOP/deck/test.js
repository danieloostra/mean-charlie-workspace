var myNumber = 7;
function add(num) {
	myNumber += num;
}
add(13)
console.log(myNumber)

function twoparams(num, callback) {
	if (typeof(num) === 'number' && typeof(callback) === 'function') {
		callback(num);
	}
}

function returnBox(arr) {
	newarr = [];
	for (var e in arr) {
		newarr.push("$" + arr[e]['box_office']);
	}
	return newarr
}

console.log(returnBox([{'name': 'title','box_office': 0}]))