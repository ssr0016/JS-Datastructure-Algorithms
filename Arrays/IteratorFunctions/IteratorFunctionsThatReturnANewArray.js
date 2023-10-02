// Iterator Functions That Return a New Array

// There are two iterator functions that return new arrays: map() and filter(). The map()
// function works like the forEach() function, applying a function to each element of an
// array. The difference between the two functions is that map() returns a new array with
// the results of the function application. Here is an example:

function curve(grade){
    return grade +=5;
}

var grades = [77,65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades); //[82, 70, 86, 97, 88];

function first(word){
    return word[0]; // the first string value of an array
    return word; // means the value or element of an array
}

var words = ["for", "your", "information"];
var acronym = words.map(first);
console.log(acronym.join("")); // display "fyi"
// For this last example, the acronym array stores the first letter of each word in the words
// array. However, if we want to display the elements of the array as a true acronym, we
// need to get rid of the commas that will be displayed if we just display the array elements
// using the implied toString() function. We accomplish this by calling the join() func‐
// tion with the empty string as the separator

// The filter() function works similarly to every(), but instead of returning true if all
// the elements of an array satisfy a Boolean function, the function returns a new array
// consisting of those elements that satisfy the Boolean function. Here is an example:


function isEven(num){
    return num % 2 == 0;
}

function isOdd(num){
    return num % 2 != 0;
}

var nums = [];
for (var i = 0; i<20; ++i){
    nums[i] = i+1;
}

var evens = nums.filter(isEven);
console.log("Even numbers: ");
console.log(evens);
var odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds);

// This program returns the following output:
// Even numbers:
// [2,4,6,8,10,12,14,16,18,20]
// Odd numbers:
// [1,3,5,7,9,11,13,15,17,19]

// Here is another interesting use of filter():

function passing(num){
    return num >= 60;
}

var grades = [];
for (var i = 0; i<20; ++i){
    grades[i] = Math.floor(Math.random() * 101); 
}

var passGrades = grades.filter(passing);
console.log("All grades: ");
console.log(grades);
console.log("Passing grades: ");
console.log(passGrades);


// Of course, we can also use filter() with strings. Here is an example that applies the
// spelling rule “i before e except after c”:

function afterc(str){
    if(str.indexOf("cie")> -1){
        return true;
    }
    return false;
}

var words = ["recieve", "deceive", "percieve", "concieve"];
var misspelled = words.filter(afterc);
console.log(misspelled); // display recieve, percieve, concieve



