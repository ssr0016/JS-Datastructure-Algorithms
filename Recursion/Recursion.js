// Function calls can be made recursively in JavaScript. The factorial() function defined
// earlier can also be written recursively, like this

function factorial(number){
    if(number === 1){
        return number;
    }
    else{
        return number * factorial(number-1);
    }
}

console.log(factorial(1));//