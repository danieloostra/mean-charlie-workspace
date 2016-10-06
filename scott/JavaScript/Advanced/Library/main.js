var _ = {
	map: function(arr, callback) {
		for (var i = 0; i < arr.length; i++) {
			arr[i] = callback(arr[i]);
		}
		return arr;
	},
	reduce: function(arr, callback, arg) {
		var result = arg;
		for (var i = 0; i < arr.length; i++) {
			result += callback(arg, arr[i]);
		}
		return result;
	},
	find: function(arr, callback) {
		for (var i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				return arr[i];
			}
		}
		return false;
	},
	filter: function(arr, callback) {
		var newarr = [];
		for (var i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				newarr.push(arr[i]);
			}
		}
		return newarr;
	},
	reject: function(arr, callback) {
		var newarr = [];
		for (var i = 0; i < arr.length; i++) {
			if (!callback(arr[i])) {
				newarr.push(arr[i])
			}
		}
		return newarr;
	}
}
var evens = _.filter([1,2,3,4,5,6], function(num) {return num%2 == 0;});
console.log(evens);