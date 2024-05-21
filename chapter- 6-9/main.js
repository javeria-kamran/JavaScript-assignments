// 01 ***************************
let a = 6;
document.write("Results </br> The value of a is " + a + "</br>------------------------------------</br>" );
a = ++a ;
document.write("The value of ++a is : " + a + "</br>Now the value of a is : " + a + "</br>");
a = a++;
document.write("</br> The value of a++ is : " + a );
a = a++ + 1;
document.write("</br> Now the value of a is " + a);
a =  --a;
document.write("</br></br>The value of --a is " + a + "</br>Now the value is a is " + a);
a = a--;
document.write("</br></br>The value of a-- is " + a );
a = a-- - 1;
document.write("</br>Now the value of a is " + a);
// 02************************************
let x = 2; 
let y = 1;
document.write("</br></br>a = " + x + "</br>b = " + y );

let result = --x - --y + ++y + y--;
//           1   - 0   + 1   + 1
document.write("</br>Result = " + result);

// 03*************************************
let personName = prompt("Enter your name " , "e.g: Jiya");
let greetPerson = prompt(`Hello ${personName} ! Welcome to our website`);

// *****************************04 was missing ***********************

// 05**************************************
let tableNum=+prompt('Input a number you want to see the multiples of');
 if(tableNum >=0){
     for(let i=1 ;i<=10 ;i++){document.write(5+ ' *'+i+"="+5*i+'<br>' )}
 }
 else{
     for(let i=1;i<=10;i++) {document.write(tableNo+ ' * '+i+"="+tableNum*i+'<br>' )}
 };

 // 06**************************************
 let sub1 = prompt("Enter first subject name");
let sub2 = prompt("Enter second subject name");
let sub3 = prompt("Enter third subject name");
let totalMarks = 300;
let obtained1 = +prompt("Enter your first subject obtained marks");
let obtained2 = +prompt("Enter your second subject marks")
let obtained3 = +prompt("Enter your third subject marks")

let obtainedMarks = obtained1 + obtained2 + obtained3;
let percentage=(obtainedMarks/totalMarks) * 100;
percentage = percentage.toFixed(2);
let percentage1 = (obtained1/100)*100;
percentage1 = percentage1.toFixed(2);
let percentage2 = (obtained2/100)*100;
percentage2 = percentage2.toFixed(2);
let percentage3 = (obtained3/100)*100;
percentage3=percentage3.toFixed(2);


document.write('<Table>');
document.write('<tr>');
document.write('<th>'+'Subjects '+'</th>')
document.write('<th>'+' Total'+'</th>')
document.write('<th>'+' Obtained Marks '+'</th>')
document.write('<th>'+' Percentage '+'</th>')
document.write('</tr>');

document.write('<tr>');
document.write('<td>' + sub1 + '</td>');
document.write('<td>' + 100 + '</td>');
document.write('<td>' + obtained1 + '</td>');
document.write('<td>' + percentage1 + '%' + '</td>');
document.write('</tr>');


document.write('<tr>');
document.write('<td>' + sub2 + '</td>');
document.write('<td>' + 100 + '</td>');
document.write('<td>' + obtained2 + '</td>');
document.write('<td>' + percentage2 +'%' + '</td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td>' + sub3 + '</td>')
document.write('<td>' + 100 + '</td>')
document.write('<td>'+ obtained3 + '</td>')
document.write('<td>'+ percentage3+ '%' + '</td>')
document.write('</tr>');

document.write("<tr>");
document.write("<th>" + "</th>");
document.write("<th>" + totalMarks + "</th>");
document.write("<th>" + obtainedMarks + "</th>");
document.write("<th>" + percentage+"%" + "</th>");
document.write("</tr>");
document.write("</Table>");