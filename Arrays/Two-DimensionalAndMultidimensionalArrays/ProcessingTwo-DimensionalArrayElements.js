// Processing Two-Dimensional Array Elements
// There are two fundamental patterns used to process the elements of a two-dimensional
// array. One pattern emphasizes accessing array elements by columns, and the other pat‐
// tern emphasizes accessing array elements by rows. We will use the grades array created
// in the preceding code fragment to demonstrate how these patterns work.
// For both patterns, we use a set of nested for loops. For columnar processing, the outer
// loop moves through the rows, and the inner loop processes the columns. For the grades
// array, think of each row as a set of grades for one student. We can compute the average
// for each student’s grades by adding each grade on the row to a total variable and then
// dividing total by the total number of grades on that row. Here is the code for that
// process:

var grades = [[89, 77, 78],[76,82,81],[91,94,89]];
var total = 0;
var average = 0.0;
for (var row = 0; row<grades.length;++row){
    for (var col = 0; col < grades[row].length;++col){
        total +=grades[row][col];
    }
    
average = total / grades[row].length;
console.log("Student " + parseInt(row+1) + " average: " + average.toFixed(2));
total = 0;
average = 0.0;
}

// The inner loop is controlled by the expression:
// col < grades[row].length
// This works because each row contains an array, and that array has a length property
// we can use to determine how many columns there are in the row.
// The grade average for each student is rounded to two decimals using the toFixed(n)
// function.
// Here is the output from the program:
// Student 1 average: 81.33
// Student 2 average: 79.67
// Student 3 average: 91.33

// To perform a row-wise computation, we simply have to flip the for loops so that the
// outer loop controls the columns and the inner loop controls the rows. Here is the cal‐
// culation for each test:

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
 for (var row = 0; row < grades[col].length; ++row) {
 total += grades[row][col];
 }
 average = total / grades[col].length;
 console.log("Test " + parseInt(col+1) + " average: " +
 average.toFixed(2));
 total = 0;
 average = 0.0;
}
// The output from this program is:
// Test 1 average: 85.33
// Test 2 average: 84.33
// Test 3 average: 82.67
