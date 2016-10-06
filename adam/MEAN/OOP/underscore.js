var _ = {
   map: function(array, callback) {
   	for(var index in array){
   		array[index]=callback(array[index]);
   	}
   	return array;
   },
   reduce: function(array, callback, memo) { 
   	var total = memo || 0;
   	for(var index in array){
   		total = callback(total, array[index]);
   	}
   	return total;
   },
   filter: function(array, callback) {   
     for(var index in array){
     	if(callback(array[index])==false){
     		array.splice(index, 1);
     	}
     }
     return array;
   },
   find: function(array, callback) { 
     for(var index in array){
     	if(callback(array[index])==true){
     		return array[index];
     	}
     }
     return undefined;
   },
   reject: function(array, callback) { 
     for(var index in array){
     	if(callback(array[index])==true){
     		array.splice(index, 1);
     	}
     }
     return array;
   }
 }
// you just created a library with 5 methods!
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
var map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map);
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 2);
console.log(sum);
var odd = _.find([2, 4, 6], function(num){ return num % 2 != 0; });
console.log(odd);
var reject_odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(reject_odds);


