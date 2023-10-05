// A jagged array is an array where the rows in the array may have a different number of
// elements. One row may have three elements, while another row may have five elements,
// while yet another row may have just one element. Many programming languages have
// problems handling jagged arrays, but JavaScript does not since we can compute the
// length of any row.
// To give you an example, imagine the grades array where students have an unequal
// number of grades recorded. We can still compute the correct average for each student
// without changing the program at all:

var grades = [[89,77],[76,82,81],[91,94,89,99]];
var total = 0;
var average = 0.0;

for(var row = 0; row <grades.length; ++row){
    for(var col = 0; col <grades[row].length; ++col){
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row+1) + 
    " average: " + average.toFixed(2)); 
    total = 0;
    average = 0.0;
}


// Notice that the first student only has two grades, while the second student has three
// grades, and the third student has four grades. Because the program computes the length
// of the row in the inner loop, this jaggedness doesn’t cause any problems. Here is the
// output from the program:
// Student 1 average: 83.00
// Student 2 average: 79.67
// Student 3 average: 93.25