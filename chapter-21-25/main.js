// 01************************************
var firstName = prompt('Write your first name');
var lastName = prompt('Write your last name');
alert('Hello ' + firstName + ' ' + lastName)

// 02*************************************

var userMobile = prompt('Write your favourite mobile phone model');
var length = userMobile.length;
document.write('My favourite phone is :' + userMobile + '<br>' + 'Length of string:' + length);


// 03************************************
var word = 'Pakistani';
var indexNo = word.indexOf("n");
document.write('String :' + word + '<br>' + " Index of 'n' :"+indexNo);

// 04************************************

var word='Hello World';
var lastIndex=word.lastIndexOf('l');
document.write('String :'+word+'<br>'+"  Last index of 'l' :"+lastIndex);

// 05************************************

var word ='Pakistani';
var indexChar=word.charAt(3);
document.write('String :'+word+'<br>'+"  Character at index 3 :"+indexChar);

// 06************************************

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
alert('Hello '+firstName.concat(lastName))

// 07************************************
var city='Hyderabad';
var replace=city.replace('Hyder','Islam');
document.write('City :'+city+'<br>'+'After replacement :'+replace)

// 08************************************
var message = "Jiya and khansa are best friends. They play cricket and football together.";
var replace=message.replace(/and/g,'&');
document.write('Message :'+message+'<br>'+'After replacement :'+replace)


// 09************************************
var str = "742";
var num = Number(str);
document.write("value: " + str + "<br>");
document.write("Type: " + typeof(str) + "<br>");
document.write("value: " + num + "<br>");
document.write("Type: " + typeof(num) + "<br>");

// 10************************************

var userInput=prompt('Please enter any word');
var capital=userInput.toUpperCase();
document.write('User input :'+userInput+'<br>'+'Upper Case :'+capital)

// 11************************************


var userInput=prompt('Enter any word');
var firstChar=userInput.slice(0,1);
firstChar=firstChar.toUpperCase();
var otherChars=userInput.slice(1);
otherChars=otherChars.toLowerCase();
var titleCase=firstChar+otherChars;
document.write('User Input :'+userInput+"<br>"+'title case :'+titleCase );

// 12************************************
var num=76.09;
var str=num.toString();
var dotIndex=str.indexOf('.');
var result=str.slice(0,dotIndex)+str.slice(dotIndex+1);
document.write('Number :'+str+'<br>'+'Result ' +result);

// 13************************************
var userInput=prompt('Enter your name: ');
var charCode;
for(var i=0;i<userInput.length;i++){
    charCode=userInput.charCodeAt(i);
     if(charCode===33||charCode===44||charCode===46||charCode===64){
        alert("Please enter a valid username")
     }

}

// 14************************************
var arr = ["cake", "pie", "cookies", "chips", "sandwich"];
var userInput = prompt("What do you want to order: ");
userInput = userInput.toLowerCase();
var check = false;
for (var i = 0; i < arr.length; i++) {
    if (userInput === arr[i]) {
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        check = true;
    }
}
if (check === false) {
    document.write("We are sorry. " + userInput + " is not available in our bakery");
}

// 15************************************
var password = prompt("Enter your password: ");
var passwordLength = false;
var passwordChar = false;
var passwordInt = false;
var passwordStart = true;

// Checking for Alphabet
for (i = 0; i < password.length; i++){
    var charValue = password[i].charCodeAt(0);

    // Checking for UpperCase varters
    if (charValue >= 65 && charValue <= 90 ){
        passwordChar = true;
    }

    // Checking for LowerCase varters
    else if (charValue >= 97 && charValue <= 122 ){
        passwordChar = true;
    }
}

// Checking for Numbers
for (i = 0; i < password.length; i++){
    var charValue = password[i].charCodeAt(0);  
    if (charValue >= 48 && charValue <= 57 ){
        passwordInt = true;
    }
}

// Checking for first 
var charValue = password.charCodeAt(0);
if (charValue >= 48 && charValue <= 57 ){
    passwordStart = false;
}

// Checking for Length
if(password.length >= 6){
    passwordLength = true;
}

if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
    alert("Enter valid Password");
}

else{
    alert("Password Approved");
}


// 16************************************
var str='University of Karachi';
var arr =str.split("");
for(var i=0;i<str.length;i++){
    document.write(arr[i]+'<br>')
}
// 17************************************ 

var userInput=prompt('Write any word');
document.write('User input :'+userInput+'<br>'+'Last character of input:'+userInput[userInput.length-1])

// 18************************************
var str='The quick brown fox jumps over the lazy dog';
str =str.toLowerCase();
var count=str.match(/the/g);
var length=count.length;
document.write('Text:'+str+'<br>'+'There are '+length+' occurence(s) of word "the"')

