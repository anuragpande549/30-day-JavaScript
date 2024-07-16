// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var numberOne = 43;
console.log(numberOne);//output = 43

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let myName = 'Anurag pndey';
console.log(myName); // output = Anurag Pandey

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
// Activity 3: Data Types

const value = true;
console.log(value); // output = true

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let myNum = 54;
let myStr = 'hello World'
let myBool = false
let myobj = {
    name : 'Anurag',
    lastName: 'pandey'
}
let myArr = [1,2,3,4,5,6];

console.log(myNum); // 54
console.log(myStr);// hello world
console.log(myBool);//false
console.log(myobj);//{ name: 'Anurag', lastName: 'pandey' }
console.log(myArr);//[ 1, 2, 3, 4, 5, 6 ]

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let newValue = 60;
console.log(newValue); //60

newValue = 56;
console.log(newValue); //56


// Activity 5: Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error.

const secondValue = 43;
console.log(secondValue); // 43

secondValue = 65;

console.log(secondValue); //error Assignment 

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

console.log(typeof(myNum));
console.log(typeof(myStr));
console.log(typeof(myBool));
console.log(typeof(myobj));
console.log(typeof(myArr));

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let firstTest = 43;
console.log(firstTest);

firstTest = 454;
console.log(firstTest);

const secondTest = 43
console.log(secondTest);

secondTest = 435;
console.log(secondTest); //error