
// There are two accessor functions that allow you create new arrays from existing arrays:
// concat() and splice(). The concat() function allows you to put together two or more
// arrays to create a new array, and the splice() function allows you to create a new array
// from a subset of an existing array.
// Let’s look first at how concat() works. The function is called from an existing array,
// and its argument is another existing array. The argument is concatenated to the end of
// the array calling concat(). The following program demonstrates how concat() works:


var cisDept = ["Mike", "Clayton", "Terrill","Danny","Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept);
console.log(itDiv);


// The first output line shows the data from the cis array first, and the second output line
// shows the data from the dmp array first.
// The splice() function creates a new array from the contents of an existing array. The
// arguments to the function are the starting position for taking the splice and the number
// of elements to take from the existing array. Here is how the method works


var itDiv = ["Mike", "Clayton","Terrill","Raymond","Cynthia", "Danny",
"Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept);//[Raymond, Cynthia, Danny]
console.log(cisDept);//[Raymond, Cynthian, Danny , Jennifer]