x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
y = ["hello", "world", 'Javascript is Fun']

x.push(100);

x.push.apply(x, y)


for (var i = 0; i < x.length; i++) {
	console.log(x[i]);
}

var sum = 0
for (var h = 1; h < 501; h++) {

	console.log(h);
	sum += h;
	console.log(sum);
}

x.push(100)

a = [9,5,90,25,-3,0]

min = a[0];
for (var i = 0; i < a.length; i++){
	if (a[i] < min) {
		min = a[i];
	}
}
console.log(min);  

var sum1 = 0;
for (var i=0; i < a.length; i++) {
	sum1+= a[i]
}
var average = sum1 / a.length;
console.log(average);