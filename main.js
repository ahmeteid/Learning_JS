/*global console, alert, prompt */

// Addition
var x = 100,
    y = 200,
    z = x + y;

// Subtraction
var x = 1000,
    y = 600,
    z = x - y;

// Divide
var x = 1000,
    y = 600,
    z = x / y;   

// Multiplication
var x = 1000,
    y = 600,
    z = x * y;

// Modulus
var x = 10,
    y = 4,
    z = x % y;

// String And Number

var x = "Osama",
    y = 150,
    z = x - y; // z = "Osama" - 150 = NAN

// document.getElementById("test").innerHTML = z;


// Increment
var counter = 1;
// alert(counter++)

// decrement
var counter = 100;
// alert(counter--)
// console.log(counter--)

// if conditions

// var yourAge = prompt("What is your age?")
// if (yourAge < 18) {
//     document.getElementById("test").innerHTML =
//     "Sorry your age is: " + yourAge + " Your not allowed here";
// } else {
//     document.getElementById("test").innerHTML =
//     "Hello your age is: " + yourAge + " Your are welcom here";
// }


// Conditional Operators

// < 
// var myAge = 22;
// if (myAge < 22) {
//     alert("old");
// } else {
//     alert("younge");
// }


// (= , == , ===)

// (=) => Assignment operator
// (==) => comparision operator compare value 
// (===) => identity operator compare data type + value

var a = 30;
// if (a == 30) {
//     alert("good " + a);
// } else {
//     alert("bad " + a);
// }

// if (a === 30) {
//     alert("good " + a);
// } else {
//     alert("bad " + a);
// }


// Logical Operator

// (!) => Not equal
// (!=) ! Not = equal (Not equal)
// (&&) => And
// (||) => Or

var 
    named = "Ahmed",
    age = 22,
    addres = "TUR";

// if (named === "Ahmed" && age === 22 && addres === "TUR") {  => Amd
// if (named === "Ahmed" || age === 22 || addres === "TUR") {  // => Or
//     alert(true);
// } else {
//     alert(false);
// }


// Functions
function myAgeInDays() {
    "user strict";
    var userAge = 22;
    // return userAge * 365; 
    return userAge * 365 * 24;  // calc age in hour

}

var myFunction = myAgeInDays();

// document.getElementById("test").innerHTML =
// "Your age in Days: " + myFunction + " Hour"; //Days;



// Functions With Parameters

// function myDiscount(price, avragePrice) {
//     "user strict"; 
//     if (price >= avragePrice){
//         return price - 100;
//     } else {
//         return "You are under the minimum limit of price, and the average price is: " + avragePrice
//     }
// }

// var discountFuncton = myDiscount(prompt("Please enter your price: "),200);

// document.getElementById("test").innerHTML= discountFuncton;



// Functions + Self invoke

// (function convertMoney(amount){
//     "user strict";
//     var result = amount * 3.75;
//     return alert(result);
// }
// )(200);

// (function convertMoney(){

//     "user strict";

//     var amount = document.getElementById("price").innerHTML;
//     alert(amount * 3.75);

// }());  // Best practice to self invoke 


// function convertUsd(){
//     "user strict";
//     var amount = document.getElementById("dollar").value,
//     result = amount * 3.75,
//     message = document.getElementById("message");

//     if (amount === ""){
//         message.innerHTML = "This Field can't Be Empty";
//     }else if(isNaN(amount)){
//         message.innerHTML = "This Field Accept Numbers Only";
//     } else if(amount === "0"){
//         message.innerHTML = "This Value must Not Be 0";
//     } else if (amount < 0){
//         message.innerHTML = "The Value Must Be Negative Number"
//     } else {
//         message.innerHTML= amount + "Dollar Is Worth " + result + " Riyal";
//     }
// }


// switch case break and default

// var gba = prompt("Enter your gba: ");

// switch (gba) {
//     case ("4"):
//         document.write("Exlante");
//         break;
//     case ("3"):
//         document.write("Very Good");
//         break;
//     case ("2"):
//         document.write("Good");
//         break;
//     case ("1.5"):
//         document.write("Bad");
//         break;
//     default:
//         document.write("Out of Range");
//         break;
// }



//Scopping


// var number = 1;
// function sumFunc (){
//     "user strict";
//     var calc = number + 2;
    
//     function secondNumber (){
//         "user strict";
//         var calc = number + 5;
//         console.log(calc);
//     }
//     console.log(calc);
    // return sumOfNumbers;
// }

// sumFunc();
// console.log(number)



// Array Adding

// var friends = [
//     "ahmed",
//     "omer",
//     "mohamed"
// ];

// friends[friends.length] = "khaled";
// console.log(friends);

// friends.push("ibrahim");
// console.log(friends);
// console.log(friends.length);

// friends.unshift("mahmoud");
// console.log(friends);
// console.log(friends.length);

// friends.splice(3, 0, "saad");
// console.log(friends);
// console.log(friends.length);


// friends.splice(3, 2);
// console.log(friends);
// console.log(friends.length);




// Array Removing

// var friends = [
//     "ahmed",
//     "omer",
//     "mohamed",
//     "ayman",
//     "khaled",
//     "ali",
//     "yasser",
//     "saad"
// ];

// friends.pop();
// console.log(friends);
// var lastItem = friends.pop();
// console.log(lastItem);

// friends.shift()
// console.log(friends);
// var firestItem = friends.shift();
// console.log(firestItem);
// console.log(friends.length);


// Array Sort & Reverse

// var friends = [
//     "ahmed",
//     "omer",
//     "mohamed",
//     "ayman",
//     "khaled",
//     "ali",
//     "yasser",
//     "saad"
// ];

// friends.sort();
// console.log(friends);
// friends.reverse();
// console.log(friends);



// Combine & Slice

// var friends = [
//     "ahmed",
//     "omer",
//     "mohamed",
//     "ayman",
//     "khaled",
//     "ali",
//     "yasser",
//     "saad"
// ];
// console.log(friends);

// var slicedArray = friends.slice(2, 5);
// // var slicedArray = friends.slice(-5, -2);
// // var slicedArray = friends.slice(1);
// console.log(slicedArray);


// var otherFriends = [
//     "saleh",
//     "osama",
//     "hesham"
// ];

// var allFriends = friends.concat(otherFriends);
// console.log(allFriends);



// Array Search

var friends = [
    "hesham",
    "ahmed",
    "omer",
    "mohamed",
    "ayman",
    "khaled",
    "hesham",
    "ali",
    "yasser",
    "saad"
];

console.log(friends);
var specialFriends = friends.indexOf("ahmed");
console.log(specialFriends);
console.log(friends[specialFriends]);

document.getElementById("all").innerHTML =
    "My Friends Are : " + friends;
document.getElementById("special").innerHTML =
    "My Special Friend Is : " + friends[specialFriends].toUpperCase();


    
    var specialFriends = friends.indexOf("hesham");
    console.log(specialFriends);
    console.log(friends[specialFriends]);
    document.getElementById("special1").innerHTML =
        "My Special Friend Is : " + friends[specialFriends].toLowerCase();


        var specialFriends = friends.lastIndexOf("hesham", 9);
    console.log(specialFriends);
    console.log(friends[specialFriends]);
    document.getElementById("special2").innerHTML =
        "My Special Friend Is : " + friends[specialFriends].toUpperCase();