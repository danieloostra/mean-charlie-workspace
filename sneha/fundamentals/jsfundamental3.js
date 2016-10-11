
// The returned object should have a name property that is set to the value of the name argument that was passed into the function.
 this provides a blueprint 
function personConstructor(name) {
  return {
  name : name,
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  chewGum:function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
}
}

// var person = personConstructor("Sneha")
// console.log(person.name)

// var another = personConstructor("Charlie")
// console.log(another.name)

// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. 
// Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).


function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
     /* two is the highest */
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja;
  }
    ninja.belt = belts[ninja.beltLevel];
    return ninja; 
}

var ninja = ninjaConstructor("Sneha", "Beta"); 
ninja.levelUp()
console.log(ninja)


