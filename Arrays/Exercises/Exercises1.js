// 1. Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

function studentGrades(){
    this.dataGrades = [];
    this.addGrades = addGrades;
    this.averageGrade = averageGrade;
}

function addGrades(grade){
    this.dataGrades.push(grade);
}

function averageGrade(){
    var totalGrade = 0;
    for(var i = 0; i <this.dataGrades.length;++i){
        totalGrade += this.dataGrades[i];
    }
    return totalGrade / this.dataGrades.length;
}

var studentFinalGrades = new studentGrades();
studentFinalGrades.addGrades(90);
studentFinalGrades.addGrades(70);
studentFinalGrades.addGrades(62);
studentFinalGrades.addGrades(55);
studentFinalGrades.addGrades(64);
studentFinalGrades.addGrades(99);
console.log(studentFinalGrades.averageGrade().toFixed(2)); // display 73.33
