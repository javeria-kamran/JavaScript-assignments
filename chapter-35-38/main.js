// 01********************************

function tellTime(){
    var today= new Date();
    document.write(today);
}
tellTime();


// 02********************************
function greetUser(){
   var firstName=prompt('Write your first name');
   var secondName=prompt('Write your second name');
   alert('Hello '+firstName+' '+secondName)
}
greetUser();


// 03********************************

function sum(){
    var firstNum=+prompt('Enter first number');
    var secondNum=+prompt('Enter Second number');
    var result=firstNum+secondNum;
    alert('The sum of '+firstNum+' and '+secondNum+' is '+result)
}
sum();

// 04********************************

function calculator(num1,opera,num2){
    if(opera==='+'){
        var result= num1+num2;
        alert(result)
    }
    else if(opera==='-'){
        var result= num1-num2;
        alert(result)
    }
    else if(opera==='*'){
        var result= num1*num2;
        alert(result)
    }
    else if(opera==='/'){
        var result= num1/num2;
        alert(result)
    }
    else{
        alert('Invalid Operator')
    }
}
var firstNumber=+prompt('Enter first number');
var operator=prompt('Enter operator');
var secondNumber=+prompt('Enter Second number');
calculator(firstNumber,operator,secondNumber);


// 05********************************

function square(num){
    var square=num**2;
    alert(square)
}
var number=+prompt('Enter number to be square')
square(number);

// 06********************************

function factorial(){
var n = +prompt('enter n')
var fact = 1;
if (n === 1 || n === 0) {
}
else {
    for (var i = n; i >= 1; i--) {
        fact = fact * i
    }
}
document.write(fact)
}
factorial();


// 07********************************
function counting(start,end){
    for(var i = start; i <= end; i++ ){
        document.write(i + '<br>');
    }
}
var start = +prompt("Enter start number for counting:");
var end = +prompt("Enter end number for counting:");
counting(start,end);

// 08********************************
function calculateHypotenuse(base,perpendicular){


function calculateHypotenuse(base, perpendicular) {
    var base, perpendicular;

    function calculateSquare(num) {
        num = num * num;
        return num;
    }
    base = calculateSquare(base);
    perpendicular = calculateSquare(perpendicular);
    var hyp = base + perpendicular;

    return hyp;

}

var base = +prompt('Enter base of right angle triangle');
var perpendicular = +prompt('Enter perpendicular of right angle triangle');
var hyp = calculateHypotenuse(base, perpendicular)
alert('The hypotenuse of right angle triangle is ' + hyp)


// 09********************************

function areaCalculate(width,height){
    var A=width*height;
    return A;
}
var width=+prompt('Enter width of triangle');
var height=+prompt('Enter height of triangle');
var result=areaCalculate(width,height);
document.write(result)

// 10********************************

function palindrome(string) {
      var check = '';
      for (var i = string.length - 1; i >= 0; i--) {
            check += string[i]
      }
      if (string === check) {
            alert(string + ' is a plindrome word')
      }
      else {
            alert(string + ' is  not a plindrome word')

      }
}
var str = prompt('Write any word')
palindrome(str);

// 11********************************

function UpperCase(str) {
    var arr = str.split(' ');
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    return newArray.join(' ')

}

var str = 'the quick brown fox'
var result = UpperCase(str)
document.write('EXAMPLE  SRING :' + str + '<br>')
document.write('EXPECTED  SRING :' + result + '<br>')


// 12********************************


function longest(str) {
    var split = str.split(' ');
    var first = split[0].length;
    for (var i = 0; i < split.length; i++) {
        if (first < split[i].length) {
            first = split[i]
        }
    }
    return first;
}
var str = 'Web Development Tutorial ';
var result = longest(str);
document.write('EXAMPLE  SRING :' + str + '<br>')
document.write('EXPECTED  SRING :' + result + '<br>')


// 13********************************
function count(str, letter) {
    var find=0;   
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            find += 1;
        }
    }
    return find
}
var str = 'JSResourceS.com';
var letter = 'o'
var result = count(str, letter);
document.write('The occurence of o in this string is ' + result)

// 14********************************


function calcCircumference(value){
    var circumference=2*3.141*value;
    return circumference
}
 function calcArea(value){
     var area=3.141*(value*value);
     return area
 }
var radius=+prompt('Enter radius of circle ');
var circumference=calcCircumference(radius);
var area=calcArea(radius);
document.write('The Circumference of circle is '+circumference+'<br>')
document.write('The Area of circle is '+area+'<br>')
}

