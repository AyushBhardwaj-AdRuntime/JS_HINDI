let score = ("33"); // we can convert the string into number by  using valueInNumber  
let  scoreInNumber = Number (score)
//console.log(scoreInNumber);
//console.log(typeof scoreInNumber);

let value = ("33abc")
let valueInNumber = Number  (value)
//console.log(valueInNumber); // but is shows NAN 
//console.log(typeof valueInNumber); // it is number type 

//notes
//  "33 " => Number 33
//   "33abc " => NaN NOT A NUMBER 
//     TRUE => 1 and FALSE => 0 


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
 // console.log(booleanIsLoggedIn);
 // notes
 // 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)


//console.log(stringNumber);
//console.log(typeof stringNumber);

// **************** conversion *********



// note in conversion if sting come first then whole conversion is in string , and if number come first then operation is done first  then whatever is there is proceed   


console.log( (3 + 4* 9 % 9));
console.log(true);
console.log(+true); // true is boolean 
// console.log(true+)// it not work 
console.log(+""); // karana nhi chaiye


let num1 ,num2 ,num3

num1 = num2 = num3 = 9 + 9

//prefix and postfix js mdm pe jaao anyalisis karo 
//