// The simplest way to create an array is by declaring an array variable using the [] oper‐
// ator:

var numbers = [];

// When you create an array in this manner, you have an array with length of 0. You can
// verify this by calling the built-in length property:

console.log(numbers.length); // display 0

// Another way to create an array is to declare an array variable with a set of elements
// inside the [] operator:

var numbers = [1,2,3,4,5];
console.log(numbers.length); // 5

// You can call the Array constructor with 
// a set of elements as arguments to the constructor:
var numbers = new Array(1,2,3,4,5);
console.log(numbers.length); // display 5

// Finally, you can create an array by calling the Array constructor with a single argument
// specifying the length of the array:

var numbers = new Array(10);
console.log(numbers.length); //display 10

var objects = [1, "joe", true, null]
console.log(objects)

// We can verify that an object is an array by calling the Array.isArray() function, like
// this:

var numbers = 3;
var arr = [7, 4, 1776];
console.log(Array.isArray(numbers)); // display false
console.log(Array.isArray(arr)); // display true


