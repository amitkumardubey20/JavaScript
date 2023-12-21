let score=33;
console.log(score)
console.log(typeof(score))


let score2="35"
console.log(score2)

let valueInNUmber=Number(score2)
console.log(typeof(valueInNUmber))

let score3="33abc"
console.log(score3);
let num=Number(score3)
console.log(num); // output -- NaN (not a number)

let score4=null
let num2=Number(score4)
console.log(num2);  // output -- 0

let score5=undefined
let num3=Number(score5)
console.log(num3);  //output -- NaN

let score6=true
let num4=Number(score4)
console.log(num4);  

// "33"  = 33
// "33abc" = NaN
// true = 1
// false = 0


let isLoggedIn=1
let booleanIsloggedIn= Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

let isLoggedIn9="AMit"
let booleanIsloggedIn1= Boolean(isLoggedIn9)
console.log(booleanIsloggedIn1);

let isLoggedIn8=""
let booleanIsloggedIn2= Boolean(isLoggedIn8)
console.log(booleanIsloggedIn2);

//  "" = false
// "amit" = true
//  1 = true
// 0 = false