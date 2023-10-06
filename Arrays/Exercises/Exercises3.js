// 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// data using a two-dimensional array. Create functions to display the monthly aver‐
// age, a specific week’s average, and all the weeks’ averages.Create

// Define the monthly temperatures using a two-dimensional array
var monthlyTemps = [
    [68, 72, 73, 74, 75, 76, 77],
    [71, 75, 76, 77, 78, 79, 80],
    [65, 69, 70, 71, 72, 73, 74],
    [70, 74, 75, 76, 77, 78, 79]
  ];

// Function to calculate the monthly average temperature

function calculateMontlyAverage(){
    let total = 0;
    let count = 0;

    for (var week of monthlyTemps){
        for(var temp of week){
            total += temp;
            count++;
        }
    }
    return total / count;
}

// Function to calculate a specific week's average temperature
function calculateWeekAverage(weekNumber){
    if(weekNumber <1 || weekNumber > monthlyTemps.length){
        return "Invalid week number";
    }
    var week = monthlyTemps[weekNumber - 1];
    var total = 0;
    for(var temp of week){
        total += temp;
    }
    return total / week.length;

}


// Function to calculate all the weeks' average temperatures
function calculateAllWeeksAverages(){
    var weekAverages = [];

    for(var week of monthlyTemps){
        var total = 0;
        for(var temp of week){
            total += temp;
        }

        weekAverages.push(total / week.length);
    }
    return weekAverages;
}

// Display the results
console.log("Montly Average Temperature:", calculateMontlyAverage());
console.log("Week 2 Average Temperature:", calculateWeekAverage(4));
console.log("All Weeks' Averages", calculateAllWeeksAverages());