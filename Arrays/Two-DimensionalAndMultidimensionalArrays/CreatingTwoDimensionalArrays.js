// A two-dimensional array is structured like a spreadsheet with rows and columns. To 
// create a two-dimensional array in JavaScript, we have to create an array and then make
// each element of the array an array as well. At the very least, we need to know the number
// of rows we want the array to contain. With that information, we can create a twodimensional array with n rows and one column:

var twod = [];
var rows = 5;
for (var i = 0; i<rows; ++i){
    twod[i] = [];
}

// The problem with this approach is that each element of the array is set to undefined. 
// A better way to create a two-dimensional array is to follow the example from JavaScript:

// The Good Parts (O’Reilly, p. 64). Crockford extends the JavaScript array object with a
// function that sets the number of rows and columns and sets each value to a value passed
// to the function. Here is his definition

Array.matrix = function(numrows, numcols, initial){
    var arr = [];
    for(var i = 0;i<numrows; ++i){
        var columns = [];
        for(var j = 0; j < numcols; ++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }   
    return arr;
}

// Here is some code to test the definition:
var nums = Array.matrix(5,5,0);
console.log(nums[1][1]); //display 0
var names = Array.matrix(3,3,"");
names[1][2] = "joe";
console.log(names[1][2]); // display "Joe"

// We can also create a two-dimensional array and initialize it to a set of values in one line:
//                0           1          2 
var grades = [[89,77,78],[76,82,81],[91,94,89]];
console.log(grades[2][2]); // display 89

// For small data sets, this is the easiest way to create a two-dimensional array.