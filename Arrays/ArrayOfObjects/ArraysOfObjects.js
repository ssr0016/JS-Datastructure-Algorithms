// All of the examples in this chapter have consisted of arrays whose elements have been
// primitive data types, such as numbers and strings. Arrays can also consist of objects,
// and all the functions and properties of arrays work with objects.
// For example:

function Point(x,y){
    this.x = x;
    this.y = y;
}

function displayPts(arr){
    for(var i = 0; i<arr.length; ++i){
        console.log(arr[i].x + " , " + arr[i].y);
    }
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for(var i = 0; i <points.length; ++i){
    console.log("Point " + parseInt(i+1) + ": " + points[i].x + ", " + points[i].y);
}

var p5 = new Point(12,-3);
points.push(p5);
console.log("After push: ");
displayPts(points);
points.shift();
console.log("After shift: ");
displayPts(points);

// The output from this program is:
// Point 1: 1, 2
// Point 2: 3, 5
// Point 3: 2, 8
// Point 4: 4, 4
// After push:
// 1, 2
// 3, 5
// 2, 8
// 4, 4
// 12, -3
// After shift:
// 3, 5
// 2, 8
// 4, 4
// 12, -3
// The point 12, -3 is added to the array using push(), and the point 1, 2 is removed
// from the array using shift().