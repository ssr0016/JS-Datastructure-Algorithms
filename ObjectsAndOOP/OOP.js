//Objects are created by defining a constructor function that includes declarations for an
// object’s properties and functions, followed by definitions for the functions. Here is the
// constructor function for a checking account object:

//This is a contructor function
function Checking(amount){
    this.balance = amount; //property
    this.deposit = deposit;//function
    this.withdraw = withdraw;//function
    this.toString = toString; //function
}

//The this keyword is used to tie each function and property to an object instance. Now
// let’s look at the function definitions for the preceding declarations:


function Checking(amount) {
    this.balance = amount; //property
    this.deposit = deposit; //function
    this.withdraw = withdraw; //function
    this.toString = toString; //function
   }
   function deposit(amount) {
    this.balance += amount;
   }
   function withdraw(amount) {
    if (amount <= this.balance) {
    this.balance -= amount;
    }
    if (amount > this.balance) {
    console.log("Insufficient funds");
    }
    var account = new Checking(500);
    account.deposit(1000);
    console.log(account.toString()); // Balance: 1500
   }
   function toString() {
    return "Balance: " + this.balance;
   }


var account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // Balance: 1500
account.withdraw(750);
console.log(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
console.log(account.toString()); // Balance: 750