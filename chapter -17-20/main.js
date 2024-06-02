

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)

let matrixOne =[];

// 2. Declare and initialize a multidimensional array representing the following matrix:

let matrix = [
     [0,1,2,3]
    ,[1,0,1,2]
    ,[2,1,0,1]];

for(let i=0;i<3;i++){
    for(let j = 0 ; j < 4 ; j++){
        document.write(arr[i][j]+' ')
    }
    document.write("</br>")
}



// 3. Write a program to print numeric counting from 1 to 10.

for(let i=1;i<=10;i++){
    document.write(i + "</br>")
}

// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

let table = prompt("Enter a table to show its multiplication table");
let tableLength = prompt("Enter the length multiplication table");
 document.write("Multiplication table of " + table + "</br>" + " Length " + tableLength + "</br>" + "</br>")
for(let i=1 ; i <= tableLength ;i++){
    document.write(table + ' X' +i+ ' =' + tableNo*i + '<br>')
}

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];

let fruit = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for(let i=0 ;i<fruit.length;i++){
    document.write(fruit[i]+'<br>')
}
document.write('<br>')
for(let j=0;j<fruit.length;j++){
    document.write('Element at index '+j + ' is '+fruit[j]+'<br>');}




// 6. Generate the following series in your browser. See example output.

// a
document.write('<h3>'+'Counting'+'</h3>')
document.write('<br>');
for(let i=1;i<=15;i++){
    document.write(i+'<br>')};

// b

document.write('<h3>'+'Reverse Counting'+'</h3>');
document.write('<br>');
for(let i=10;i>=1;i--){
    document.write(i+'<br>')
}

// c
document.write('<h3>'+'Even'+'</h3>')
document.write('<br>');
for(let i=0;i<=20;i++){
    document.write(i++ +'<br>')};


// d
document.write('<h3>'+'Odd'+'</h3>')
document.write('<br>');
for(let i=1;i<=19;i=i+2){
    document.write(i+'<br>')};
// e
document.write('<h3>'+'Series'+'</h3>')
document.write('<br>');
for(let i=2;i<=20;i=i+2){
    document.write(i+'k'+'<br>')
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let userInput = prompt('Enter the item name');
userInput = userInput.toLowerCase();
let check = false;
for (let i = 0; i < A.length; i++) {
    if (userInput === A[i]) {
        document.write(A[i] + ' is available at index ' + i + ' in our bakery')
        check = true;

    }
}

if (check === false) {
    document.write('We are sorry !!' + userInput + ' is not  in our bakery')

}

// 8. Write a program to identify the largest number in the given array.
A = [24, 53, 78, 91, 12]

let nums = [24,53,78,91,12];
let largest=nums[0];
console.log(nums[0])
for(let i=0;i<nums.length;i++){
     if(nums[i]>largest)
     {largest=nums[i]}
}
document.write('Array items are : ' + nums + '<br>');
document.write('The largest number is '+largest)

// 9. Write a program to identify the smallest number in the given array.
A = [24, 53, 78, 91, 12]

let arrr=[24,53,78,91,12];
let smallestNo=arrr[0];
for(let i=0;i<arrr.length;i++){
    if(arrr[i]<smallestNo){
        smallestNo=arrr[i]
    }
}
document.write('Array items : ' + arrr + '<br>');
document.write('The smallest number is '+smallestNo)

// 10. Write a program to print multiples of 5 ranging 1 to 100.

for(let i=5;i<=100;i=i+5){
    document.write(i+',')
}

