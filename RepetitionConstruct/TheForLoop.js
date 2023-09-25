// When we want to execute a set of statements a specified number of times, we use a for
// loop. Example 1-7 uses a for loop to sum the integers 1 through 10.

// Example 1-7. Summing integers using a for loop
var number = 1;
var sum = 0;

for (var number = 1; number <11; number++){
    sum+=number;
}
console.log(sum)

// for loops are also used frequently to access the elements of an array, as shown in
// Example 1-8

// Example 1-8. Using a for loop with an array

var numbers = [3,7,12,22,100];
var sum = 0;
for (var i = 0; i <numbers.length; ++i){
    sum+=numbers[i];
}
console.log(sum);