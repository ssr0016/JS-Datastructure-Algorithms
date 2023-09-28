// Searching for a Value
// One of the most commonly used accessor functions is indexOf(), which looks to see if
// the argument passed to the function is found in the array. If the argument is contained
// in the array, the function returns the index position of the argument. If the argument is
// not found in the array, the function returns

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
putstr("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);
if (position >= 0) {
 console.log("Found " + name + " at position " + position);
}
else {
 console.log(name + " not found in array.");
}
// If you run this program and enter Cynthia, the program will output:
// Found Cynthia at position 1
// If you enter Joe, the output is:
// Joe not found in array.


// If you have multiple occurrences of the same data in an array, the indexOf() function
// will always return the position of the first occurrence. A similar function, lastIndex
// Of(), will return the position of the last occurrence of the argument in the array, or -1
// if the argument isn’t found. Here is an example:


var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var name = "Mike";

var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos );




