// 01**********************************
var num = +prompt("Enter number: ");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write('Number :'+num+'<br>')
document.write('Round off value :'+round+'<br>')
document.write('Floor value :'+floor+'<br>')
document.write('ceil value :'+ceil+'<br>')

// 02**********************************
 var num = +prompt("Enter number: ");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write('Number :'+num+'<br>')
document.write('Round off value :'+round+'<br>')
document.write('Floor value :'+floor+'<br>')
document.write('ceil value :'+ceil+'<br>')

// 03**********************************

var num=+prompt('Enter number :');
var abs=Math.abs(num);
document.write('The absolute value of '+num+'  is '+abs)

// 04**********************************
var randomNo=Math.random()*6;
var floor=Math.floor(randomNo);
document.write('random die value : '+floor)


// 05**********************************
var coinValue=Math.random()*3;
var floor=Math.floor(coinValue);
console.log(floor)
if(coinValue<2){
    document.write(floor+'<br>'+' random coin value : Tails')
}
else{
    document.write(floor+'<br>'+' random coin value : Heads')
}


// 06**********************************
var random=Math.random()*100;
var ceil=Math.ceil(random);
document.write('random number between 1-100:'+ceil)


// 07**********************************

var weight=prompt('Enter your weight in kilogramas');
var parse=parseFloat(weight);
document.write('The weight of userr is '+parse.toFixed(1)+' kilograms')

//  ///////////////////////

var randomNo=Math.ceil((Math.random()*10));
document.write(randomNo)
var userInput=prompt('Enter a number in between 1 and 10');
if(userInput===randomNo){
    alert('Congratulations  you entered the exact number')
}
else{
    alert(' Oops! Try Again')
}

