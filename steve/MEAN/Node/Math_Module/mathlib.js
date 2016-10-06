module.exports = function () {
	return {
		add: function(num1, num2) {
			var sum = num1 + num2;
			console.log("Sum:", sum);
			return sum;
		},

		multiply: function(num1, num2) {
			var result = num1 * num2;
			console.log("Multiplied:", result);
			return result;
		},

		squared: function(num1) {
			var result = num1 * num1;
			console.log("Squared:", result);
			return result;
		},

		random: function(num1, num2) {
			if (num1 => num2) {
				max = num1;
				min = num2;
			}
				
			else {
				max = num2;
				min = num1;
			}
			var result = Math.floor(Math.random() * (max-min)) + min;
			console.log("Random:", result);
			return result;
		}
	}
}