function personConstructor(name) {
	var person = {
		name : 'name',
		distance_traveled : 0,
		say_name : function () {
			console.log(person.name);
		},
		say_something : function (string) {
			if (string == "i am cool") {
				console.log(`${person.name} says: $(phrase)`);
			}
		},
		walk : function () {
			console.log("Jay is walking");
			distance_traveled += 3;
		},
		run : function () {
			console.log("Jay is running");
			distance_traveled += 10;
		},
		crawl : function () {
			console.log("Jay is crawling");
			distance_traveled += 1;
		}
	}
}
function NinjaConstructor(name, cohort, belt_level) {
	var ninja = {};
		ninja.name = name,
		ninja.cohort = cohort,
		ninja.belt_level = 'yellow',

		ninja.levelUp = function() {
			if (ninja.belt_level == 'yellow'){
				ninja.belt_level = 'red';
			}
			else if (ninja.belt_level == 'red'){
				ninja.belt_level = 'black';
			}
		}
	return ninja;
}
var Steve = NinjaConstructor("Steve", 2, 'yellow');
console.log(Steve.belt_level);
Steve.levelUp();
console.log(Steve.belt_level);


