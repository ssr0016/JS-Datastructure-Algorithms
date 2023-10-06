// 4. Create an object that stores individual letters in an array and has a function for
// displaying the letters as a single word

function object(){
    this.letters = [];
    this.addLetters = addLetters;
}

function addLetters(data){
    this.letters.push(data);
}

var displayLettersAsSingleWord = new object();
displayLettersAsSingleWord.addLetters("S");
displayLettersAsSingleWord.addLetters("A");
displayLettersAsSingleWord.addLetters("M");
displayLettersAsSingleWord.addLetters("S");
displayLettersAsSingleWord.addLetters("O");
displayLettersAsSingleWord.addLetters("N");
console.log(displayLettersAsSingleWord.letters[0])
//Display [S,A,M,S,O,N]

