/*global console, alert, prompt */
/*jslint plusplus: true*/

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

// var friends = [
//     "hesham",
//     "ahmed",
//     "omer",
//     "mohamed",
//     "ayman",
//     "khaled",
//     "hesham",
//     "ali",
//     "yasser",
//     "saad"
// ];

// console.log(friends);
// var specialFriends = friends.indexOf("ahmed");
// console.log(specialFriends);
// console.log(friends[specialFriends]);

// document.getElementById("all").innerHTML =
//     "My Friends Are : " + friends;
// document.getElementById("special").innerHTML =
//     "My Special Friend Is : " + friends[specialFriends].toUpperCase();


    
//     var specialFriends = friends.indexOf("hesham");
//     console.log(specialFriends);
//     console.log(friends[specialFriends]);
//     document.getElementById("special1").innerHTML =
//         "My Special Friend Is : " + friends[specialFriends].toLowerCase();


//         var specialFriends = friends.lastIndexOf("hesham", 9);
//     console.log(specialFriends);
//     console.log(friends[specialFriends]);
//     document.getElementById("special2").innerHTML =
//         "My Special Friend Is : " + friends[specialFriends].toUpperCase();




// Array Methods - Practice

// 1- Check .isArray()
// var myMsg = "Hello Worled";
// var myMsg = [
//     "m1",
//     "m2",
//     "m3",
//     "m4"
// ];

// if (Array.isArray(myMsg)) {
//     console.log("Yes This is array");
// } else {
//     console.log("No This is not array");
// }

// 2- Get & Set length
// var myMsg = [
//     "m1",
//     "m2",
//     "m3",
//     "m4"
// ];
// console.log(myMsg);
// console.log(myMsg.length);
// myMsg.length = 2;
// console.log(myMsg);

// // 3- Convert .toString
// var myMsg = [
//     "m1",
//     "m2",
//     "m3",
//     "m4"
// ];
// console.log(myMsg);
// console.log(myMsg.join(" & "));
// // console.log(myMsg.toString());
// // console.log(myMsg.toLocaleString());

// var myDate = new Date();
// console.log(myDate);
// console.log(myDate.toLocaleDateString());


// 4- Array Adding Elements
// var myMsg = [
//     "m1",
//     "m2",
//     "m3",
//     "m4"
// ];
// console.log(myMsg);
// // myMsg[4] = "m5";
// // myMsg[myMsg.length] = "m5";
// // myMsg.push("m5");
// // myMsg.unshift("m0");
// myMsg.splice(0, 0, "ahmed");
// console.log(myMsg);


//5- Array Remove Items
// var myMsg = [
//     "m1",
//     "m2",
//     "m3",
//     "m4"
// ];
// console.log(myMsg);
// myMsg.splice(1, 2);
// myMsg.pop();
// myMsg.shift();
// var firestItem = myMsg.shift(); 
// console.log(firestItem);
// var lastItem = myMsg.pop();
// console.log(lastItem);



//6- Array sort & Reverse
// var myMsg = [
//     "m3",
//     "m4",
//     "m1",
//     "m2"
// ];
// console.log(myMsg);
// myMsg.sort();
// console.log(myMsg);
// myMsg.reverse();
// console.log(myMsg);



// 7- Array slice & combine
// var myMsg = [
//     "m3",
//     "m4",
//     "m1",
//     "m2"
// ];
// myMsg.sort();
// console.log(myMsg);
// // console.log(myMsg.slice(2, 3));
// var ms2 = [
//     "Ahmed",
//     "omar"
// ];
// console.log(myMsg.concat(ms2));



// 8- Array Searching
// var myMsg = [
//     "m3",
//     "m4",
//     "m1",
//     "m2"
// ];
// myMsg.sort();
// console.log(myMsg.indexOf("m2", 0));
// console.log(myMsg.lastIndexOf("m4", 3));



// String Methods - Convert To String

// var str = "Welcome to programmer worled";
// console.log(str + " Data Type is: " + typeof(str));

// var number = 1000;
// var newNumber = number.toString();
// console.log(typeof(newNumber));




// Strings Methods - Locate A String

// var str = "I'm in love with JavaScript and in love with PHP",
//     myWorld = str.indexOf("and", 29);
// console.log(myWorld);
// myWorld = str.lastIndexOf("and", 29);
// console.log(myWorld);
// myWorld = str.search("in");
// console.log(myWorld);
// myWorld = str.search(/JAVA/i);
// newString = myWorld.toString();
// console.log(myWorld);
// console.log(typeof(newString));



// Strings Methods - Split A String

/*
Split : .split(separator , limit);
Slice : .slice(start [Reguired], End [Optional]);
Substr : .substr(start [Reguired], length [Optional]);
SubString : .substring(start[Reguired], End [Optional])
*/

// 1- Split
// var myMainString = "I Love JavaScript and JSON",
//     mySplited = myMainString.split(" ", 3);
// console.log(mySplited);

// // 2- Slice
// var myMainString = "I Love JavaScript and JSON",
//     mySliced = myMainString.slice(6, 11);
// console.log(mySliced);

// // 4- Substr
// var myMainString = "I Love JavaScript and JSON",
//     mySubstr = myMainString.substr(15, 7);
// console.log(mySubstr);

// // 5- Substring
// var myMainString = "I Love JavaScript and JSON",
//     // mySubString = myMainString.substring(6, 20);
//     mySubString = myMainString.substring(20, 6);
// console.log(mySubString);



// Strings Methods - Find & Replace
/*
CharAt : .charAt(index);
CharCodeAt : .charCodeAt(index);
Replace : .replace(Value, New Value);
*/

// var str = "I Love JavaScript Too much JavaScript is very fun",
//     myCharAt = str.charAt(5),
//     myCharCodeAt = str.charCodeAt(10),
//     // myReplace = str.replace("JavaScript", "PHP");
//     // myReplace = str.replace(/JavaScript/g, "PHP");
//     // myReplace = str.replace(/jAvasCript/i, "PHP");
//     myReplace = str.replace(/jAvasCript/gi, "PHP");
// console.log(str);
// console.log(myCharAt);
// console.log(myCharCodeAt);
// console.log(myReplace);


// Strings Methods - Concatenating

/*
string.fromCharCode(num1, num2, num3, num4, .....);
concat(string, string, string, string, .....);
*/

// var str = String.fromCharCode(70, 82, 79, 77, 32, 65, 72, 77, 69, 68),
//     str2 = "My",
//     allStr = str.concat(" Welcom To " + str2 + " Worled");
// console.log(allStr);
// console.log("Welcome To " + str + " Worled");


// Stringd Methods - Convert Letters

// var myString  = "I Love JS",
//     myLowerCase = myString.toLowerCase();
//     myUpperCase = myString.toUpperCase();
// console.log(myString);
// console.log(myLowerCase);
// console.log(myUpperCase);


// Strings Methods - Trim & Linke 

// var str = "     Hello my name is Ahmed      ";
// console.log(str);
// var trimStr = str.trim();
// console.log(trimStr);


// var str = "Ahmed";
// console.log(str.link("https://ahmeteid.github.io/HTML-CSS-Template-three/"));



// Strings Methods - Chain Methods

// var myNumber = 355,
//     myString = myNumber.toString().replace(5, 9).split("");
// console.log(myNumber);
// console.log(myString);


// Strings Methods - Practice

// var str = "I love \"Programming\" languages";  // 1- skip

// console.log(str.length); // 2- length
// console.log(str);
// var num = 120;
// console.log(num);
// console.log(typeof(num));
// console.log(typeof(num.toString())); // convert toString

// var mySearch = "I Love JavaScript",
//     mySearching = mySearch.indexOf("Love", 5); // Searching
// console.log(mySearching);
// var newSearch = mySearch.lastIndexOf("Love", 5);
// console.log(newSearch);
// var cahrSearch = mySearch.search("J");
// console.log(cahrSearch);

// var myString = "I Love JavAScript",
    // mySplite = myString.split(" ", 2); //splite
    // mySlice = myString.slice(1, 8); // slice
    // mySubStr = myString.substr(1, 10); // substr
    // mySubStr = myString.substr(-10); // substr
    // mySubString = myString.substring(1, 8); // substring
    // mySubString = myString.substring(8, 1); // substring
    // myCharAt = myString.charAt(5); // charAt
    // myCharCodeAt = myString.charCodeAt(5); // charCodeAt
    // myReplace = myString.replace("a", "x"); // replace
    // myReplace = myString.replace(/a/gi, "x"); // replace
    // myConcat = myString.concat(" too much      ").trim(); // concat
    // mySlice = myString.slice(-5); // slice
// console.log(mySplite); //splite
// console.log(mySlice); // slice
// console.log(mySubStr); // substr
// console.log(mySubString); // substring
// console.log(myCharAt); // charAt
// console.log(myCharCodeAt); // charCodeAt
// console.log(myReplace);
// console.log(myConcat); // concat
// console.log(myConcat.toUpperCase().split(" ")); // toUpperCase
// console.log(myConcat.toLowerCase()); // toLowerCase



// Loops => For
// 1- For Loop Syntax
/*
for (Initialization; Condition; Final Expression) {
    Statement;
}

-Initialization : Excuted Before the loop once
-Codition: Define the condition to Run the loop
-Final Expression: Executed Everytime thr code run
*/

// var i;
// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// var friends = [
//     "Ahmed",
//     "Omer",
//     "Mohamed",
//     "Khaled",
//     "Hesham",
//     "Mahmoud"
// ];
// console.log(friends.length);

// for (i = 1; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// console.log(friends[1]);
// console.log(friends[0]);
// console.log(friends[4]);
// console.log(friends[5]);


// 2- For In Loop Syntax

/*
for (variable In object) {
    if (object.hasOwnProperty(variable))
    {
        statement;
    }
}
*/

// var myCar = {
//     colour: "Black",
//     type: "BMW",
//     model: "2024",
//     price: "50.000"
// }

// var prop;
// for (prop in myCar) {
//     if (myCar.hasOwnProperty(prop)) {
//         console.log(prop + ": " + myCar[prop]);
//     }
// }


// Fot Loop With Function
// function generateYears (Strat, End) {
//     "use strict";
//     var years;
//     document.write("<select>");
//     for (years = Strat; years <= End; years = years + 10) {
//         document.write("<option value=\"" + years + "\">" + years + "</option>");
//     }
//     document.write("</select>");
// }

// generateYears(1500, 2030);
// generateYears(1900, 2020);


// While Loop Syntax
// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// function generateYears (Start, End) {
//         "use strict";
//         var years = Start;
//         document.write("<select>");
//         while (years <= End) {
//             document.write("<option value=\"" + years + "\">" + years + "</option>");
//             years++;
//         }
//         document.write("</select>");
//     }
    
//     generateYears(1500, 2030);
//     generateYears(1900, 2020);

// Do While Loop
// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// Do While Loop With Function

// function generateYears (Start, End) {
//     var years = Start;
//     document.write("<select>");
//     do {
//         document.write("<option value=\"" + years + "\">" + years + "</option>");
//         years++;
//     } while (years <= End);
//     document.write("</select>");
// }

// generateYears(1900, 2020);
// generateYears(2000, 2020);



// Loops - Control - Break, Continue, Label
var i, x;
MainLoop:
for (i = 1; i < 5; i++) {
    ChildLoop:
    for (x = 15; x < 20; x++) {
        if (x === 17) {
            // break MainLoop;
            // continue MainLoop;

            break ChildLoop;
            // continue ChildLoop;
        }
    console.log(i + "=> " + x);
    }
}
// for (i = 1; i <= 5; i++) {
//     if (i === 3) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }