//objects are what's called the  'reference types' in javascript 
//'context' gets confused a lot with 'scope'
// instantiation

//reference type
[] === [] // false
[1] === [1] // false,  very interesting...

var object1 = {value : 10}
var object2 = object1;
var object3 = { vlaue: 10};

object1 == object2; // true makes sense
object1 == object3; // false 

object1.value = 15; 
object2.value; // 15
object3.value; // 10 well object2 and object3 were confusing right? 
//context vs scope
function b(){
    let a = 4;
}
console.log(a); // a is not defined or return ReferenceError because it does not exist so that is 'scope'
// how is 'context' different? 'context' tells you, where we are with in the object
console.log(this)
// probably the most confusing word 'this' that a lot of people have trouble and even people that he have been in the industry
// for years still have a difficult time with 'this'. 
// as you can see, 'this' is the 'window object' look like as Window {.....}
console.log(this === window) // true
this.alert("hello"); 
// so what 'this' means, is what is the object environment that we are in right now, the best wy to think about it is, 
// what is to the left of the dot?
window.alert // you will see window objects list 
alert(); // you are able to do 'alert' becasue its inside the 'window object'. 
this.alert()// same thing as alert()

const object4 = {
    a: function(){
        console.log(this);
    }
}
object4.a(); // {a: f}






// instantiation
// its a very important concept 
function a(){
    console.log(this);
}
a() // showing window object
window.a(); // again showing window object


class Player{
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
}

// so this 'constructor' function is gonna create these properties on the 'PLayer' object so that they 
// can create anything

class Wizard extends Player {
  constructor(name, type){
     super(name, type)
     console.log('wizard', this) 
  }  
  play() {
      console.log(`WEEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Brian', 'Healer');
const wizard2 = new Wizard('Bami', 'Dark Magic');
