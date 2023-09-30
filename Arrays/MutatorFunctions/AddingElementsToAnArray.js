// There are two mutator functions for adding elements to an array:
//  push() and unshift(). The push() function adds an element
//  to the end of an array:

var nums = [1, 2 , 3 , 4, 5];
console.log(nums); // display [1, 2 ,3 ,4 ,5];

nums.push(6);
console.log(nums); //[1, 2, 3 ,4 ,5, 6];

// Using push() is more intuitive than using the length property
//  to extend an array:

var nums = [1 ,2 ,3 ,4 ,5];
console.log(nums); // [1, 2, 3, 4, 5];
nums[nums.length] = 6;
console.log(nums); // display [1, 2, 3, 4, 5, 6];


// Adding data to the beginning of an array is much harder than adding data to the end
// of an array. To do so without the benefit of a mutator function, each existing element
// of the array has to be shifted up one position before the new data is added. Here is some
// code to illustrate this scenario:

var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for(var i = N; i >= 0; --i){
    nums[i] = nums[i-1];
    console.log([i]);
}

nums[0] = newnum;
console.log(nums); //display [1, 2, 3 ,4 ,5];


// This code becomes more inefficient as the number of elements
//  stored in the array increases.
// The mutator function for adding array elements to the beginning 
// of an array is unshift(). Here is how the function works:

var nums = [2,3,4,5];
console.log(nums); //display [2,3 ,4 ,5];
var newnum = 1;
nums.unshift(newnum);
console.log(nums)//display [1,2,3,4,5]
nums = [3,4,5];
nums.unshift(newnum = 1,2);
console.log(nums);
// The second call to unshift() demonstrates that you can add multiple elements to an
// array with one call to the functio


//Summarize push() is for adding an element in the list of an 
// array in the last element of an array
//while unshift() is for adding in the beginning of an element of an array

