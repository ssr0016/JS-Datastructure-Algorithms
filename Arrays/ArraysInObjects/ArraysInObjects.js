// We can use arrays to store complex data in an object. Many of the data structures we
// study in this book are implemented as class objects with an underlying array used to
// store data.
// The following example demonstrates many of the techniques we use throughout the
// book. In the example, we create an object that stores the weekly observed high -
// temperature. The object has functions for adding a new temperature and computing
// the average of the temperatures stored in the object. Here is the code:

function weekTemps(){
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp){
    this.dataStore.push(temp);
}

function average(){
    var total = 0;
    for (var i = 0; i<this.dataStore.length; ++i){
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek); // display 54.875

// You’ll notice the add() function uses the push() function to add elements to the data
// Store array, using the name add() rather than push(). Using a more intuitive name for
// an operation is a common technique when defining object functions. Not everyone will
// understand what it means to push a data element, but everyone knows what it means
// to add a data element.

