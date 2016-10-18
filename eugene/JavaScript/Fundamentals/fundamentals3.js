function personConstructor(name){
	var person = {
		name: name,
		distance_traveled: 0,
		say_name: function(){console.log(this.name);},
		say_something: function(string){console.log(this.name+" says \'"+string+"\'");},
		walk: function(){alert(this.name+" is walking"); this.distance_traveled+=3;},
		run: function(){alert(this.name+" is running"); this.distance_traveled+=10;},
		crawl: function(){alert(this.name+" is crawling"); this.distance_traveled+=1;}
	}
	return person
}

function ninjaConstructor(name, cohort){
	var ninja = {
		name: name,
		cohort: cohort,
		belt_level: 'yellow-belt',
		levelUP: function(){
			if(this.belt_level == 'red-belt')
				this.belt_level = 'black-belt';
			else if(this.belt_level == 'yellow-belt')
				this.belt_level = 'red-belt';
		}
	}
	return ninja
}