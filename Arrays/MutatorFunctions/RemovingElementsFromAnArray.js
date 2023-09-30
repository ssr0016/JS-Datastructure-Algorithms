// Removing an element from the end of an array is easy
//  using the pop() mutator function:


var nums= [1,2,3,4,5,9];
nums.pop();
console.log(nums)//display [1,2,3,4,5];

// Without mutator functions, removing elements from the beginning of an array requires
// shifting elements toward the beginning of the array, causing the same inefficiency we
// see when adding elements to the beginning of an array:

var nums = [9,1,2,3,4,5];
console.log(nums);
for (var i = 0; i <nums.length;++i){
    nums[i] = nums[i+1];
}
console.log(nums);//display [1,2,3,4,5,undefind]
//

// Besides the fact that we have to shift the elements down to collapse the array, we are also
// left with an extra element. We know this because of the extra comma we see when we
// display the array contents.

// The mutator function we need to remove an element from the beginning of an array is
// shift(). Here is how the function works:

var nums = [9,1,2,3,4,5];//removing first element of an array
var first = nums.shift();
console.log(nums); //display [1,2,3,4,5]

// You’ll notice there are no extra elements left at the end of the array. Both pop() and
// shift() return the values they remove, so you can collect the values in a variable:

var nums = [6,1,2,3,4,5]; //remove first element 
var first = nums.shift();
nums.push(first); // here add the remove elements in the last element of an array using push
console.log(nums); //display [1,2,3,4,5,6] 

//Summarize removing element of an array shift() in the beginning of an array
//pop() in the last element of an array


