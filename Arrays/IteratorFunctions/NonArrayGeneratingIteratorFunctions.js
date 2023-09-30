// The first group of iterator functions we’ll discuss do not generate a new array; instead,
// they either perform an operation on each element of an array or generate a single value
// from an array.
// The first of these functions is forEach(). This function takes a function as an argument
// and applies the called function to each element of an array. Here is an example of how
// it works:

function square(num){
    console.log(num, num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square); 
// display 
// 1 1
// 2 4
// 3 9
// 4 16
// 5 25
// 6 36
// 7 49
// 8 64
// 9 81
// 10 100 

// The next iterator function, every(), applies a Boolean function to an array and returns
// true if the function can return true for every element in the array. Here is an example:

function isEven(num){
    return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if(even){
    console.log("all numbers are even");
}
else{
    console.log("not all numbers are even")
}

//display all numbers are even

//If we change the array to:


var nums = [2,4,6,7,,8, 10];
var even = nums.every(isEven);
if(even){
    console.log("all numbers are even");
}
else{
    console.log("not all numbers are even")
}
//display not all numbers are even

// The some() function will take a Boolean function and return true if at least one of the
// elements in the array meets the criterion of the Boolean function. For example:

function isEven(num){
    return num % 2 == 0;
    
}


var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if(someEven){
    console.log("some numbers are even");
}
else{
    console.log("no numbers are even");
} // display some numbers are even
nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if(someEven){
    console.log("some numbers are even");
}
else{
    console.log("no numbers are even");
}

// The reduce() function applies a function to an accumulator and the successive elements
// of an array until the end of the array is reached, yielding a single value. Here is an example
// of using reduce() to compute the sum of the elements of an array:

// dislay no numbers are even
//ES^
// const items = [1, 2 ,3];
// const total = items.reduce((totalItems, item)=>{
//     return totalItems + item;
// })
// console.log(total);

function add(runningTotal, currentValue){
    return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum); //display 55

// The reduce() function, in conjunction with the add() function,works from left to right,
// computing a running sum of the array elements, like this:
// add(1,2) -> 3
// add(3,3) -> 6
// add(6,4) -> 10
// add(10,5) -> 15
// add(15,6) -> 21
// add(21,7) -> 28
// add(28,8) -> 36
// add(36,9) -> 45
// add(45,10) -> 55

// We can also use reduce() with strings to perform concatenation:

function concat(accumulatedString, item){
    return accumulatedString + item;
}

var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence)// displays "the quick brown fox"


// JavaScript also provides a reduceRight() function, which works similarly to re
// duce(), only working from the righthand side of the array to the left, instead of from
// left to right. The following program uses reduceRight() to reverse the elements of an
// array:

function concat(accumulatedString, item){
    return accumulatedString + item;
}

var words = ["the ", "quick", "brown ", "fox "];
var sentence = words.reduceRight(concat);
console.log(sentence) // display "fox brown quick the"