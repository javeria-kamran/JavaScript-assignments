// 01*******************************

var character = prompt("Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter");
var value = character.charCodeAt(0);

//Checking for Number
if (value >= 48 && value <= 57) {
    alert(character + " is number");
}

//Checking for UpperCase Letters
else if (value >= 65 && value <= 90) {
    alert(character + " is Uppercase Letter");
}

//Checking for LowerCase Letters
else if (value >= 97 && value <= 122) {
    alert(character + " is Lowercase Letter");
}

else {
    alert("Given input is not a number or letter");
}

// 02***************************
var firstNumber = +prompt("Enter first number");
var secondNumber=+prompt("Enter second number");
if(firstNumber > secondNumber){
    alert(firstNumber+ " is largerthan "+ secondNumber);
}
else if(firstNumber < secondNumber){
    alert(secondNumber +  " is larger than " + firstNumber);
}
else{
    alert(firstNumber+ " and " + secondNumber+"  both are equal");
}

// 03************************

var num=+prompt("Please enter number to check wheather positive, negative or zero");
if(num > 0){
    alert(num + "  is postive")
}
else if(num < 0){
    alert(num + " is negative")
}
else{
    alert(num + " is zero")
}

// 04************************************
var character = prompt("Enter character to check vowel or not");
if(character==='a'||character==='A'||character==='e'||character==='E'||character==='i'||character==='I'||character==='o'||character==='O'||character==='u'||character==='U'){
    alert(character+ " is vowel")
}
else{
    alert(character+ " is consonant")
}

// 05*******************************
var password = "jiya123";
var userPassword = prompt("Enter your password");
if(userPassword === ''){
    alert('Please enter your password');
}
else if(userPassword === password){
     alert("Correct! The password you entered is as same as the original")
}
else{
    alert("Incorrect password")
}

// 06*********************
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

var greeting;
var hour=13;
if(hour<18){
    greeting='Good day'
    alert(greeting);
}
else{
    greeting='Good evening';
    alert(greeting);

}

// 07*********************************

var time = +prompt("Please enter time in 24 hours \n clock format like: 1900 = 7pm.");
if(time >= 0 && time < 1200){
    alert("Good Morning")
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon")
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening")
}
else if(time >=2100 && time<=2359){
    alert("Good Night, sleep tight")
}
else{
    alert("kindly enter valid input!")
};
