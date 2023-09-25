// Decision constructs allow our programs to make decisions on what programming
// statements to execute based on a Boolean expression. The two decision constructs we
// use in this book are the if statement and the switch statement.

// The if statement comes in three forms:
// • The simple if statement
// • The if-else statement
// • The if-else if statement

// Example 1-3 demonstrates the if-else statement.
// Example 1-3. The if-else statement

var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if(current > mid){
    mid = (current - low) / 2;
    console.log(mid)
}
// console.log(mid) // if true... display 6
else{
    mid = (current+high) / 2; // if true display 31.5
    console.log(mid)
}


// Example 1-4 illustrates the if-else if statement.
// Example 1-4. The if-else if statement
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if(current > mid){
    mid = (current - low) / 2; //display 6
    console.log(mid)
}else if(current > mid) {
    mid = (current + high) /2; //display 31.5
    console.log(mid)
}else{
    found = current; // if false display output 13
    console.log(found)
}

