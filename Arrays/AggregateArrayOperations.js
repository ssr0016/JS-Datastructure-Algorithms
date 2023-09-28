// There are several aggregate operations you can perform on arrays. First, you can assign
// one array to another array:

var nums = [];
for(var i = 0; i < 10; ++i){
    nums[i] = i+1;
}
var samenums = nums;

// However, when you assign one array to another array, you are assigning a reference to
// the assigned array. When you make a change to the original array, that change is reflected
// in the other array as well. The following code fragment demonstrates how this works:

var nums = [];
for (var i = 0; i < 10; ++i){
    nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
console.log(samenums); // display 400

// This is called a shallow copy. The new array simply points to the original array’s elements.
// A better alternative is to make a deep copy, so that each of the original array’s elements
// is actually copied to the new array’s elements. An effective way to do this is to create a
// function to perform the task:

function copy(arr1, arr2){
    for(var i = 0; i < arr1.length; ++i){
        arr2[i] = arr1[i];
        
    }
}

// Now the following code fragment produces the expected result:
var nums = [];
for (var i = 0; i < 100; ++i){
    nums[i] = i+1;
}
var samneums = [];

copy(nums,   samenums);
nums[0] = 400;
console.log(samenums[1])//display 1
console.log(nums[1])//display 400

// Another aggregate operation you can perform with arrays is displaying the contents of
// an array using a function such as print(). For example:

var nums = [1,2,3,4,5];
console.log(nums);

// will produce the following output:
// 1,2,3,4,5

// This output may not be particularly useful, but you can use it to display the contents of
// an array when all you need is a simple list.
