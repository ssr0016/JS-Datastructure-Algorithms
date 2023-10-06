// 2. Store a set of words in an array and display the contents both forward and backward.

var setOfWords = ["Set","Of","Words","Array","Display","Contents"];

console.log("Forward:");
for(var i = 0; i<setOfWords.length;++i){
    console.log(setOfWords[i])
}

console.log("\nBackward: ");
for(var i = setOfWords.length -1; i>=0;--i){
    console.log(setOfWords[i])
}

//sort method
setOfWords.sort();
console.log("Sort Method:")
console.log(setOfWords)

//reverse method
setOfWords.reverse();
console.log("Reverse Method:")
console.log(setOfWords);