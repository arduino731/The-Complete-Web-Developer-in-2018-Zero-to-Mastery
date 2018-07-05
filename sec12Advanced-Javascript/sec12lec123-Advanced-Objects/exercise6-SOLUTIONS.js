//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
console.log(object1) // 5
const object2 = object1; 
console.log(object2) // 5
const object3 = object2; 
console.log(object3) // 5
const object4 = { a: 5}; 
object1.a = 4;
console.log(object1) // 4 


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow =  new Mamal('Shelly', 'cow', 'brown');
const dog =  new Mamal("Chaka", "Dog", "Brown");
const dog2 = new Mamal("Bami", "Dog", "Black");