const first = () => {
    const greet = "hi"; // this is a private variable. outside of fucntion, they cant read greet variable.
    const second = () => {
        const name = "bobby";
        alert(greet);
    }
    return second;
}

// second is a variable and block scope. as store it. so we dont need to store function then return it.

const first = () => {
    const greet = "hi";
    return () => {
        const name = "bobby";
        alert(greet);
    }
}

const second = first();
second();

// Closures - a function ran. the function executed. 

//Currying 
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); // this is a arugment 
multiplyBy5(5); // this is b arugment


const curriedMultiply = function (a) {
    return function (b) {
        return a * b;
    }
}
const multiplyBy5 = curriedMultiply(5); // this is a arugment 
multiplyBy5(4); // this is b arugment

///////////////////////////////////
//Compose 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); 


// 
