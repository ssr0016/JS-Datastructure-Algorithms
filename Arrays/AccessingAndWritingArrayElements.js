// Data is assigned to array elements using the [] 
// operator in an assignment statement.
// For example, the following loop assigns 
// the values 1 through 100 to an array:

var nums = [];
for (var i = 0; i < 100; ++i){
    nums[i] = i+1;
}
console.log(nums) // display [1, ...100]

// Array elements are also accessed using the [] operator. For example:

var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum); // display 15


// Of course, accessing all the elements of an array 
// sequentially is much easier using a for loop:

var numbers = [1, 2, 3, 4, 5, 8, 13, 21];
var sum = 0;
for(var i = 0; i < numbers.length; ++i){
    sum +=numbers[i];
}
console.log(sum); // display 57
// console.log(Array.isArray(numbers)) // display true
// console.log(Array.isArray(sum)) // display false

//Notice that the for loop is controlled using the length property rather than an integer
// literal. Because JavaScript arrays are objects, they can grow beyond the size specified
// when they were created. By using the length property, which returns the number of
// elements currently in the array, you can guarantee that your loop processes all array
// elements.


