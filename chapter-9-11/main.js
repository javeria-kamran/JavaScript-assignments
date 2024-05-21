// 01*******************************
let city = prompt("In which city do you live");
if(city==="Karachi"|| city==="karachi"){
    alert("Welcome to city of lights")
};

// 02*******************************
let gender = prompt("Enter your gender");
if(gender=== "male" || gender === "Male"){
    alert("Good Morning Sir")
}
else if(gender === "female" || gender === "Female"){
    alert("Good Morning Madam")
};

// 03**********************************
let color=prompt("Enter the traffic light");
if(color==='red'||color==='Red'){
    alert("Must stop")
}
else if(color === "yellow" || color === "Yellow"){
    alert("Ready to move")
}
else if(color === "green" || color === "Green"){
    alert("Move now")
};

// 04*****************************************
let fuel = +prompt("Enter your remaining fuel in car in litres: ");
if(fuel < 0.25){
    alert("kindly refill the fuel in your car")
};

// 05***********************************************
var a = 4; 
if (++a === 5){ 
    alert("Given condition for variable a is true");
    }


var b = 82;
if (b++ === 83){
    alert("Given condition for variable b is true");
    }


var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
    }

if (c === 13){ 
    alert("condition 2 is true"); 
    }

if (++c < 14){ 
    alert("condition 3 is true"); 
    } 

if(c === 14){ 
    alert("condition 4 is true"); 
    }


var materialCost = 20000; 
var labourCost = 2000; 
var totalCost = materialCost + labourCost; 
if (totalCost === labourCost + materialCost){ 
    alert("The cost equals"); 
    }


if (true){ 
    alert("True"); 
    } 

if (false){ 
    alert("False"); 
    }


if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    };

    // 06**************************************
 var obtainedMarks = +prompt("Enter Obtained Marks of three subjects:");
var totalMarks=+prompt("Enter total Marks:");
var percentage = (obtainedMarks/totalMarks) *100;
percentage = percentage.toFixed(2);

document.write('<h3>'+'Marksheet'+'</h3>');
document.write('Total marks :'+totalMarks+'<br>');
document.write('Percentage :'+percentage+'<br>');

var grade;
var remarks;
if(percentage >= 85){
    grade="A-one";
    remarks=" wow! Excellent";
}
else if(percentage>=70){
    grade="A";
    remarks="Good";
}
else if(percentage>=60){
    grade="B";
    remarks="You need to improve";
}
else if(percentage>=70){
    grade="A-one";
    remarks="Excellent";
}
else if(percentage<60){
    grade="Fail";
    remarks=" oops! Sorry";
}
else{
    document.write("Invalid Input" + "<br>")
}
document.write('Grade :'+grade+'<br>');
document.write('Remarks :'+remarks+'<br>');

// 07*********************************888

var secretNum = 7;
var guess=+prompt('Guess the number: \nBetween 1-10 ');
// a. 

if(guess === secretNum){
    alert('Bingo! Correct answer')
}

// b. 
if(++secretNum === guess){
    alert("Close enough to the correct answer")
}
else{
    alert('Sorry guess it wrong:(')
}

// 08******************************

var num = +prompt("Enter number to check number is divisible by 3 or not");
if(num % 3 === 0){
    alert(num+ "is divisible by 3")
}
else{
    alert(num+ "is not  divisible by 3")
};

// 09**************************************

var num = +prompt("Enter number to check number is even or odd");
 if(num % 2 === 0){
        alert(num+ "  is even")
     }
     else{
         alert(num+ "  is odd")
     }

// 10****************************


var temperature = +prompt("Enter your city temperature");
if(temperature > 40){
    alert("It's scorching beam outside")
}
else if(temperature>30){
     alert("Weather is normal today.")
}
else if(temperature > 20){
    alert("it's freezing outside")
}
else {
    alert("it's snowfalling wow!")
}

// 11***********************

var firstNumber = +prompt("Enter first Number");
var secondNumber = +prompt("Enter second Number");
var operation = prompt('Choose your operation : \n(+, - , * , % ');
if(oper==='+'){
    alert(firstNumber+secondNumber)
}
else if(operation ==='-'){
    alert(firstNumber-secondNumber)
}
else if(operation === '*'){
    alert(firstNumber*secondNumber)
}
else if(operation === '/'){
    alert(firstNumber/secondNumber)
}
else{
    alert(firstNumber % secondNumber)
};


