//foreach, map , filter, reduce 

const array = [1,2,10,16];
const name = ['a', 'b','c'];
const users = [
    {id: '1', name: "Brian", age : 31, tag: ["javascript", "sql"]},
    {id: '2', name: "Lance", age : 28, tag: ["none"] },
    {id: '3', name: "Jenn" , age : 28, tag: ["ruby"]}

]

const double = []; // new array for double
array.forEach((num,i)=>{
    double.push(num[i] * 2);
    console.log(num);
})

console.log('forEach', double); // [2,4,20,32]

const mapArray0 = array.map(num => num * 2);
const mapArray1 = name.map((num) => {
    return num + "5"; // in function, here can change data.
});

// console.log('map ' , mapArray0);  // (4) [2,4,20,32] array
// console.log('map ' +  mapArray0); // 2,4,20,32 string

console.log( 'name' , mapArray1); //(3) ["a5", "b5", "c5"]
console.log( 'name2' + mapArray1); // a5,b5,c5

// you will want to use 'map' over 'forEach' 
// the 'map' creates new array versus 'forEach' that is whole bunch of actions


const newUsers2 = users.map(user => {
  if (user.name === 'Lance') {
    user.age = 30; // change age
    return user; // put object back to array
  } else {
    return user
  }
});
console.log(newUsers2);


const filterArray = array.filter(num => num > 5)

console.log(filterArray);

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length >= 5);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// method reduce

const reduceArray = array.reduce(( accumulator, num) =>{
    return accumulator * num;
}, 0);

console.log(reduceArray); 