// The last two mutator functions are used to arrange array elements into some type of
// order. The first of these, reverse(), reverses the order of the elements of an array. Here
// is an example of its use:


var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums)//display 5,4,3,2,1

var letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters)

// We often need to sort the elements of an array into order. The mutator function for this
// task, sort(), works very well with strings:

var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan","Raymond"];
nums.sort();
console.log(names); // Bryan, Clayton, Cynthia, David, Mike, Raymond

//Note: But sort() does not work so well with numbers:
var nums = [3,1,2,100,4,200];
nums.sort();
console.log(nums) // display 1,100,200,3,4

// The sort() function sorts data lexicographically, assuming the data elements are strings,
// even though in the preceding example, the elements are numbers. We can make the
// sort() function work correctly for numbers by passing in an ordering function as the
// first argument to the function, which sort() will then use to sort the array elements.
// This is the function that sort() will use when comparing pairs of array elements to
// determine their correct order.
// For numbers, the ordering function can simply subtract one number from another
// number. If the number returned is negative, the left operand is less than the right
// operand; if the number returned is zero, the left operand is equal to the right operand;
// and if the number returned is positive, the left operand is greater than the right operand.
// With this in mind, let’s rerun the previous small program using an ordering function:

//Note: This is a right sort ordering using a function
function compare(num1, num2){
    return num1 - num2
}

var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums); // 1, 2, 3, 4,100,200

// The sort() function uses the compare() function to sort the array elements numerically
// rather than lexicographically.
