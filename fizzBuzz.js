
// for(var i = 0; i <=100; ++i){
//     if(i  % 3 === 0 && i && 5 === 0){
//         console.log(i);
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

for(var i = 0; i <=100; ++i){

    var out = "";

    if(i % 3 === 0)
    out += "Fizz";
    if(i % 5 === 0)
    out+= "Buzz"; 
    if(i % 7 === 0)
    out += "Bazz";
  
  console.log(out || i);
}



     
   
 

