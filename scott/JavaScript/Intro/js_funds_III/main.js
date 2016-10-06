function personConstructor(name) {
	newObject = {
		name: name,
		distance_travelled: 0,
		say_name: function() {
			console.log(this.name);
		},
		say_something: function(something) {
			console.log(this.name + " says '" + something + "'");
		},
		walk: function() {
			console.log(this.name + " is walking.");
			this.distance_travelled += 3;
		},
		run: function() {
			console.log(this.name + " is running.");
			this.distance_travelled += 10;
		},
		crawl: function() {
			console.log(this.name + " is crawling.");
			this.distance_travelled += 1;
		}
	}
	return newObject;
}

function ninjaConstructor(name, cohort) {
	newObject = {
		name: name,
		cohort: cohort,
		belt_level: 'yellow',
		level_up: function() {
			if (this.belt_level == 'yellow') {
				this.belt_level = 'red';
			} else {
				this.belt_level = 'black';
			}
		}
	}
	return newObject;
}

scott = personConstructor('Scott');
scott.say_name();
ninja = ninjaConstructor('Scott', 'Washington DC');
ninja.level_up();
console.log(ninja.belt_level);