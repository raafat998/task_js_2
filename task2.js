// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".


let num1 = 11;

let num2 =8;


if(num1 > 10 && num2 > 10){

  console.log('Both numbers are greater than 10');
}else{
  console.log('At least one number is not greater than 10');
}

// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
let u = "raafat"
let p = "2161998"

let userName = prompt("Please enter your name:");
let password = prompt("Please enter your password:");


if((u==userName )&& (p==password))
{

  console.log('Access granted');
} 
else {

  console.log('Access denied');
}



// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

let num = prompt("Please enter number:");
if(num>=10 && num<=20){
  console.log('The number is between 10 and 20');
}else{
  console.log('The number is not between 10 and 20');
}



// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
let age = prompt("Please enter your age :");
if(age<18){
  console.log('yes');
}else{
  console.log('no');
}
let candrive = prompt("Please enter your age :");
if(candrive == 'yes')
{
  console.log('You can drive');
}else{
  console.log('You cannot drive');
}




// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".

let number = prompt("Please enter number:");

if(number>0 && number<10)
  {
    
    console.log('Valid number');
  }else{
    console.log('Invalid number');
  }

// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".

let number1 = prompt("Please enter number:");

if((number1>=5 && number1<=10 )|| (number1>=20 && number1<=25) )
  {
    console.log('Invalid number');

  }else{
    console.log('The number is not valid');

  }


// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".

let password1 = prompt("Please enter your password:");
p1='password';

s='secret';

if( p1==password1 || s==password1)
{

  console.log('Access granted');
} 
 else {

  console.log('Access denied');
}


// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".

let num3=  prompt("Please enter your password:");

if(number3 >= 0 && number3 <= 100 && number3 % 2 === 0){


 console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".

let number4 = parseInt(prompt("Please enter the first number:"));


let number5 = parseInt(prompt("Please enter the second number:"));


if (number4 < 0 || number5 < 0) {
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}


// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".// طلب إدخال العمر
let age2 = parseInt(prompt("Please enter your age:"));


let isStudent = prompt("Are you a student? (yes or no):");


if (age2 < 18 || isStudent.toLowerCase() === 'yes') {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}
