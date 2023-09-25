// The scope of a variable refers to where in a program a variable’s value can be accessed.
// The scope of a variable in JavaScript is defined as function scope. This means that a
// variable’s value is visible within the function definition where the variable is declared
// and defined and within any functions that are nested within that function.
// When a variable is defined outside of a function, in the main program, the variable is
// said to have global scope, which means its value can be accessed by any part of a program,
// including functions

function showScope(){
    return scope;
}

var scope = "global";
console.log(scope); //display "global"
console.log(showScope()); //display global

//Note: The function showScope() can access the variable scope because scope is a global vari‐
// able. Global variables can be declared at any place in a program, either before or after
// function definitions.

function showScope(){
    var scope = "local";
    return scope;
}

var scope = "global";
console.log(scope); //display globalx
console.log(showScope()); // display local

// Note: The scope variable defined in the showScope() function has local scope, while the scope
// variable defined in the main program is a global variable. Even though the two variables
// have the same name, their scopes are different, and their values are different when
// accessed within the area of the program where they are defined.

//Example 1-11 demonstrates the ramifications of leaving off the var keyword when
// defining variables

// Example 1-11. The ramification of overusing global variables

function showScopes(){
    scopes = "local"
    return scopes;
}

scopes = "global";
console.log(scopes)// display "global"
console.log(showScopes()) //display "local"
console.log(scopes) //dispaly local


for (var i = 0;i<=10;++i){
    console.log("I love morning")
}