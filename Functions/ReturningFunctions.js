// JavaScript provides the means to define both value-returning functions and functions
// that don’t return values (sometimes called subprocedures or void functions).

// Example 1-9 demonstrates how value-returning functions are defined and called in
// JavaScript.

// Example 1-9. A value-returning function

function factorial(number) {
    var product = 1;
    for (var i = number; i >= 1; --i) {
    product *= i;
    }
    return product;
   }

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));


// Example 1-10 illustrates how to write a function that is used not for its return value, but
// for the operations it performs.

// Example 1-10. A subprocedure or void function in JavaScript
const curve = (arr, amount) =>{
    for(var i = 0; i <arr.length; ++i){
        arr[i] +=amount;
    }
}

var grades = [77, 73, 74,81,90];
curve(grades, 5);
console.log(grades)