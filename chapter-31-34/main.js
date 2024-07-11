// 01*************************
let currentDate = new Date();
document.write(currentDate);

// 02*************************
let month = currentDate.getMonth();
let arrayy = ["jan" , "feb" , "march" , "april" , "may" , "june" , "july" , "aug" , "sep" , "oct", "nov" , "Dec"]
alert("Current month: " + arrayy[month]);

// 03*************************
let dayToday =  currentDate.getDay();
let dayList = ["sun" , "mon" , "tue", "wed", "thurs" , "fri" ,"sat"];
alert("Current day: " + dayList[dayToday]);


// 04*************************
if(dayToday === "sun" || dayToday === "sat"){
    alert("It's a funday yohoo!")
} else{
    alert("It's a weekday oh no!")
};


// 05*************************
let dateOf = currentDate.getDate();
if(dateOf <= 15){
    console.log("First fifteen days of the month")
}else {
    console.log("Last fifteen days of the month");
};

// 06****************************
let milisecs = currentDate.getTime();
document.write('Current Date :' + currentDate + '<br>');
document.write('ELasped milliseconds since January 1,1970 :'+milisecs+'<br>');
document.write("Elapsed minutes since January 1, 1970: " + (milisecs/(999*60)) + "<br>");

// 07****************************
let hoursOf = currentDate.getHours();
if(hoursOf < 12){
    console.log("it's AM")
}else{
    console.log("It's PM");
};

// 08*****************************
let newDate = new Date("Thur Dec 2020");
console.log(newDate);

// 09*****************************
let muharram = new Date(" fri 19 july 2024").getTime();
let difference = muharram - currentDate.getTime();
let resultDay = Math.floor(difference / ( 1000* 60 * 60 * 24));
console.log(resultDay + " days left in 9th and !0th muharram");

// 10**********************************
let today = currentDate.getTime();
let year2015 = new Date('1 Jan,2015');
let milli2015 = year2015.getTime();
let diffMilliSec = today - year2015
let seconds=Math.floor(diffMilliSec/(1000));
document.write('On reference date :'+currentDate+'<br>'+' ,'+seconds+' seconds had passed since beginning of 2015');

// 11******************************

let todayAgain = new Date();
let hoursAgo = todayAgain.getHours();
hoursAgo=hoursAgo-1;
document.write("current date: " + todayAgain + "<br>");
todayAgain.setHours(hoursAgo);
document.write("1 hour ago, it was " + todayAgain);

// 12********************************
let today2 = new Date();
let yearsAgo = today2.getFullYear();
yearsAgo = yearsAgo-100;
document.write("current date: " + today2 + "<br>");
today2.setFullYear(yearsAgo);
document.write("100 years back, it was " + today2);

// 13*****************************
let askperson = +prompt("Enter your age:" ,  "04");
let personAge = currentDate.getFullYear() - askperson;
console.log( "Your age is "+ askperson + " \nand your birth year is "  + personAge);

// 14***************************

let  customerName = 'Kamran Umer';
let  todayOf =new Date();
let  monthOf =todayOf.getMonth();
mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
let  noUnits=310;
let  chargePerunit=55;
let  netAmount=noUnits*chargePerunit;
let  lastCharge = 1350;
let  afterDueDate=netAmount+lastCharge;
document.write('<h1>'+'K-Electric Bill'+'</h1>')
document.write('Customer Name :'+customerName+'<br>');
document.write('Month :'+mlist[monthOf]+'<br>');
document.write('Number of units :'+noUnits+'<br>');
document.write('Charges per unit :'+chargePerunit+'<br>');
document.write('<br>')
document.write('Net Amount Payabale (Within Due Date) :'+netAmount+'<br>');
document.write('Late payment surcharge :'+lastCharge+'<br>');
document.write('Gross payment Payable(after Due Date) :'+afterDueDate+'<br>');
