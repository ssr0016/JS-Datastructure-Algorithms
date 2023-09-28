// Arrays can be created as the result of calling the split() function on a string. This
// function breaks up a string at a common delimiter, such as a space for each word, and
// creates an array consisting of the individual parts of the string.
// The following short program demonstrates how the split() function works on a simple
// string:


var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i){
    console.log("word " + i + ": " + words[i]);
    // console.log(`word ${i} : ${words[i]}`);// modern approach template literals
}



