var person = {
	name:'Adam',
	distance_traveled:0,
	say_name: function(){
		alert(this.name)},
	say_something: function(param){
		console.log(this.name + " says " + param)},
	walk: function(){
		alert(this.name + " is walking.");
		this.distance_traveled+=3
	},
	crawl: function(){
		alert(this.name + " is crawling.");
		this.distance_traveled+=1
	},
	run: function(){
		alert(this.name + " is running.");
		this.distance_traveled+=10
	}
}

function frankenstein(name){
	var person = {
		name:name,
		distance_traveled:0,
		say_something: function(param){
		console.log(this.name + " says " + param)},
		walk: function(){
			alert(this.name + " is walking.");
			this.distance_traveled+=3
		},
		crawl: function(){
			alert(this.name + " is crawling.");
			this.distance_traveled+=1
		},
		run: function(){
			alert(this.name + " is running.");
			this.distance_traveled+=10
		}
	}
	return person
}

var victor = frankenstein('Victor')

function ninjaConstructor(name, cohort){
	var ninja = {
		name:name,
		cohort:cohort,
		belt_level:'yellow',
		levelUp: function(){
			ninja.belt_level='black'
		}
	}
	return ninja
}

var ninja = ninjaConstructor('Phil', 'Beta')
ninja.levelUp()
console.log(ninja.belt_level)