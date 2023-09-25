// Many of the algorithms we study in this book are repetitive in nature. We use two
// repetition constructs in this book—the while loop and the for loop.

// When we want to execute a set of statements while a condition is true, we use a while
// loop. Example 1-6

// Example 1-6. The while loop
var number = 1;
var sum  = 0;
while (number < 11){
    sum += number;
    ++number;
}
console.log(sum); // display 55