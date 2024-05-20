// 01*****************************************
let num1 = 10;
let num2 = 5;
let result = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + result);

// 02*****************************************
let sub = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;
let modulus = num1 % num2;

let answer1 = "substracting " + num2 + " from " + num1 + " = " + sub;
let answer2 = "multipying " + num1 + " to " + num2 + " is = " + multiply;
let answer3 = "dividing " + num2 + " to " + num1 + " is = " + divide;
let answer4 = "Reaminder of " + num2 + " and " + num1 + " is " + modulus;
document.write(
  "</br>" + answer1 + "</br>" + answer2 + "</br>" + answer3 + "</br>" + answer4
);

// 03*****************************************
let userNum;
document.write(" </br> value before variable initialization is " + userNum);
userNum = 5;
document.write(" </br>Initial value is " + userNum);
userNum = ++userNum;
document.write(" </br>Value after decreement is " + userNum);
userNum = 7 + userNum;
document.write(" </br>Value after addition is " + userNum);
userNum = --userNum;
document.write("</br>Value after increement is " + userNum);
userNum = userNum % 3;
document.write("</br>The remainder after dividing it by 3 is " + userNum);

// 04*****************************************
let ticketPrice = 600 + " pkr";
document.write(" </br>The cost of one ticket is " + ticketPrice);
ticketPrice = 600;
ticketPrice = 5 * ticketPrice + " pkr";
document.write("</br>The cost of five tickets will be " + ticketPrice);

// 05 *****************************************
let number = 9;
document.write(
  "</br> </br> <h3>Table Of 9 </h3>" +
    number +
    " * " +
    1 +
    " =  " +
    number * 1 +
    " </br>" +
    number +
    " * " +
    2 +
    " =  " +
    number * 2 +
    " </br>" +
    number +
    " * " +
    3 +
    " =  " +
    number * 3 +
    " </br>" +
    number +
    " * " +
    4 +
    " =  " +
    number * 4 +
    " </br>" +
    number +
    " * " +
    5 +
    " =  " +
    number * 5 +
    " </br>" +
    number +
    " * " +
    6 +
    " =  " +
    number * 6 +
    " </br>" +
    number +
    " * " +
    7 +
    " =  " +
    number * 7 +
    " </br>" +
    number +
    " * " +
    8 +
    " =  " +
    number * 8 +
    " </br>" +
    number +
    " * " +
    9 +
    " =  " +
    number * 9 +
    " </br>" +
    number +
    " * " +
    10 +
    " =  " +
    number * 10
);
// 06*****************************************
let celcius = 34;
let farrenhite = (celcius * 9) / 5 + 32;
document.write(
  "</br><h3>Conversion</h3> " + celcius + "oC is equal to " + farrenhite + "F"
);
let farrenhite_02 = 42;
let intoCelcius = ((farrenhite_02 - 32) * 5) / 9;
document.write(
  "</br>" + farrenhite_02 + " F is equal to " + intoCelcius + "oC"
);

// 07*****************************************
let price01 = 400,
  price02 = 600,
  quantity01 = 3,
  quantity02 = 7,
  shippingCharges = 250;
let totalCost = price01 * quantity01 + price02 * quantity02 + shippingCharges;
document.write(
  "</br><h3>Dicount Mart</h3> Price of chocolate is " +
    price01 +
    "</br>Quantity of chocolate is " +
    quantity01 +
    "</br>Price of Brownie is " +
    price02 +
    "</br>Quantity of brownie is " +
    quantity02 +
    "</br>Shipping charges are " +
    shippingCharges +
    "</br></br>The total cost of your order is " +
    totalCost +
    "</br><h4>HAPPY SHOPPING!!</h4>"
);

// 08********************************************
let totalmarks = 650;
let marksObtained = 595;
let percentage = (marksObtained / totalmarks) * 100;
document.write(
  "<h3>Marks Sheet</h3> Total marks = " +
    totalmarks +
    "</br>Marks obtained by the student is " +
    marksObtained +
    "</br>Percentage = " +
    percentage +
    "<h5>Congartulations!! You got A<sup>+1</sup> Grade.</h5>"
);

// 09***********************************************
let dollars = 10,
  riyals = 25,
  convert = dollars * 104.8 + riyals * 28;
document.write(
  " </br><h3>Currency in PKR</h3> Total currency in PKR is " + convert
);

// 10*************************************************
let arithmetic = 5 + (5 * 10) / 2;
console.log(arithmetic);

// 11 *************************************************
let currentYear = 2024;
let birthYear = 2006;
let actualAge = currentYear - birthYear,
  actualAge_02 = currentYear - birthYear - 2;
document.write(
  "</br></br><h3>Age Calculator</h3> Current Year is " +
    currentYear +
    "</br>Birth year is " +
    birthYear +
    "</br>The age of the person is either " +
    actualAge +
    " or " +
    actualAge_02
);
// 12 ****************************************************
let radius = 6;
let circumference = 2 * 3.142 * radius;
let area = 2 * 3.142 * radius * radius;
document.write(
  "</br><h3>Geometrizer</h3> </br> Radius of the circle is " +
    radius +
    "</br>Circumference of the circle is " +
    circumference +
    "</br>Area of the circle is " +
    area
);
// 13******************************************************
let fvtSnack = "Chocolate";
let currentAge = 18;
let maximumAge = 40;
let estimation = 5;
let value = (maximumAge - currentAge) * estimation;
document.write(
  "</br><h3>The Lifetime Supply Calculator</h3> </br> Favourite Snack : " +
    fvtSnack +
    "</br>Current Age : " +
    currentAge +
    "</br>Maximum age : " +
    maximumAge +
    "</br>Amount of snacks per day : " +
    estimation +
    "</br>You will need " +
    value +
    " chocolates to last you until the ripe old age of " +
    maximumAge
);
