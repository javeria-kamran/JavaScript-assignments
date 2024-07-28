// 01********************************
function powerOf(a, b) {
  let result = a ** b;
  return result;
}
let num = +prompt("Enter a ");
let power = +prompt("Enter b");
let consequences = powerOf(num, power);

console.log(consequences);

// 02********************************
let leapYear = +prompt("Enter a year to know the leap year");
switch (leapYear) {
  case 2012: 
  alert("This is a leap year")
    break;
    case 2016 :
        alert("This is a leap year")
        break;
        case 2020:
            alert("This is a leap year")
            break;
            default : alert("This is not a leap year")
};

// 03*************************************
function distanceOf(a ,b , c){
let distance = (a + b + c) / 2
return distance;
}
let num1 = +prompt("Enter the first side");
let num2 = +prompt("Enter the second side");
let num3 = +prompt("Enter the third side");

let S = distanceOf(num1 , num2 , num3);
alert(S);

function areaOf(){
let areaCalculation = S* (S - num1 )* (S - num2 )* (S - num3)
return areaCalculation
}
alert(areaOf());

// 04****************************************
function mainFunction() {
    let sub1 = +prompt('Enter your first subject marks');
    let sub2 = +prompt('Enter your second subject marks');
    let sub3 = +prompt('Enter your third subject marks');
    let total = +prompt('Enter your  total marks')
    let average = ave(sub1, sub2, sub3);
    let per = percen(sub1, sub2, sub3, total);
    document.write('<h3>' + 'Average is ' + '</h3>' + average + '<br>');
    document.write('<h3>' + 'Percentage is ' + '</h3>' + per+' %' + '<br>');

}
function ave(a, b, c) {
    let av = (a + b + c) / 3;
    av = av.toFixed(2)
    return av;
}

function percen(a, b, c, total) {
    let percentage = ((a + b + c) / total) * 100;
   percentage= percentage.toFixed(2);
    return percentage;
}
mainFunction();

// 05*****************************************
function index(str, char) {
    let no;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            no = i
            break;
        }
    }
    return no
}
let str = "Hello World!"
let indexOf = prompt('Write character to find ');
let result = index(str, indexOf);
console.log(result);

// 06******************************
let string1 = prompt('Enter sentences to delete vowels in them');
function removeVowels(sentence) {
    let removed = ''
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === 'a' || sentence[i] === 'A' || sentence[i] === 'e' || sentence[i] === 'E' || sentence[i] === 'i' || sentence[i] === 'I' || sentence[i] === 'o' || sentence[i] === 'O' || sentence[i] === 'u' || sentence[i] === 'U') {
            continue
        }
        else {
            removed += sentence[i]
        }
    }
    return removed
}
let result1 = removeVowels(string1);
console.log(string1);
console.log(result1);

// 07***********************************


let string2 = 'Please read this application and give me gratuity';
let occurence = [];
let counted = 0;
function findOccurence() {
    let chars = str.toLowerCase().split('');
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        let next = chars[i + 1];
        if (isCorrectCharc(char) && isCorrectCharc(next)) {
            count++;
            let twoChar = char + next;
            occurence.push(twoChar)
        }
    } return count
}
function isCorrectCharc(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false
    }

}
console.log(string2);
console.log(counted);
console.log(occurence);

// 08****************************************
let distance = +prompt("Enter distance from city A to City B in KM: ")
meter(distance)
feet(distance)
inches(distance)
centimeters(distance)

function meter(dis){
  let meterDistance = dis * 1000
  document.write("Distance between city A to city B is " + meterDistance + " meters." + "<br>")
}

function feet(dis){
  let feetDistance = dis * 3281
  document.write("Distance between city A to city B is " + feetDistance + " feets." + "<br>")
}

function inches(dis){
  let inchDistance = dis * 39370
  document.write("Distance between city A to city B is " + inchDistance + " inches." + "<br>")
}

function centimeters(dis){
  let centimeterDistance = dis * 100000
  document.write("Distance between city A to city B is " + centimeterDistance + " centimeters." + "<br>")
};

// 09**********************************

let workingHours = +prompt("Enter your working hours: ")
let overTime, overTimePay;
let overTimeHourPay = 12;

if(workingHours > 40){
  overTime = workingHours - 40;
  overTimePay = overTime * overTimeHourPay;
  alert("Your overtime pay cost is: " + overTimePay + "rupees");
}

else{
  alert("You need to work more to get overtime")
};

// 10*******************************

let amount = +prompt("Enter amount to Withdraw")
let hundreds = parseInt(amount / 100)
let fifties = parseInt((amount % 100) / 50)
let tens = parseInt((((amount % 100) % 50) / 10))

console.log(`${amount} , ${hundreds} , ${fifties} , ${tens}`);




