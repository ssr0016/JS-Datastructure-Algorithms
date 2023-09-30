// Trying to add or remove elements at the end of an array leads to the same problems we
// find when trying to add or remove elements from the beginning of an array—both
// operations require shifting array elements either toward the beginning or toward the
// end of the array. However, there is one mutator function we can use to perform both
// operations—splice().
// To add elements to an array using splice(), you have to provide the following argu‐
// ments:
// • The starting index (where you want to begin adding elements)
// • The number of elements to remove (0 when you are adding elements)
// • The elements you want to add to the array
// Let’s look at a simple example. The following program adds elements to the middle of
// an array:

var nums = [1,2,3,7,8,9];
var newlements = [4,5,6];
nums.splice(3,0, newlements);
console.log(nums) // display [1,2,3,[4,5,6]7,8,9]


// The elements spliced into an array can be any list of items passed to the function, not
// necessarily a named array of items. For example:

var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums)

// In the preceding example, the arguments 4, 5, and 6 represent the list of elements we
// want to insert into nums.
// Here is an example of using splice() to remove elements from an array:

var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
console.log(nums)// display [1,2,3,4,5];


