// Add Two Numbers
//example 1

   //const num1=5;
   //const num2=3;
   //const sum = num1 + num2;
// display the sum
   //console.log('The sum of ' + num1 + ' and '+ num2+' is: '+ sum);

//example 2
// store input numbers

   //const num1=parseInt(prompt('Enter the first number '));
   //const num2=parseInt(prompt('Enter the second number'));
// add the two numbers
  //const sum = num1 + num2;
// display the sum 
   //console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Find the Square Root
 
// example 1
// take the input from the user
   //const number= prompt('Enter the number: ');
   //const result= Math.sqrt(number);

   //console.log(`The square root of ${number} is ${result}`);


// example 2
   //const number1 = 2.25;
   //const number2 = -4;
   //const number3 = 'hello';

   //const result1 = Math.sqrt(number1);
   //const result2 = Math.sqrt(number2);
   //const result3 = Math.sqrt(number3);

   //console.log(`The square root of ${number1} is ${result1} `);
   //console.log(`The square root of ${number2} is ${result2} `);
   //console.log(`The square root of ${number3} is ${result3} `);

//Calculate the Area of Triangle

//Example 1:

   //const baseValue = prompt('Enter the base of the triangle: ');
   //const heightValue = prompt('Enter the height of a triangle: ');

//calculete the area
   //const areaValue = (baseValue * heightValue) / 2;

   //console.log(`The area of the triangle is ${areaValue}`);

//Example 2:

//JavaScript program to find the area os triangle 
   //const side1 = parseInt(prompt('Enter side1: '));
   //const side2 = parseInt(prompt('Enter side2: '));
   //const side3 = parseInt(prompt('Enter side3: '));

//Calculate the semi-perimeter 
   //const s = (side1 + side2 + side3) / 2;
   //Calculate the area 
   //const areaValue = Math.sqrt((s-side1) * (s-side2) * (s-side3));
   //console.log(`The area of triangle is ${areaValue}`)

//Swap To Variables 

//Example 1:
//JavaScript program to swap two variables

//Take input to the users

   //let a  = prompt('Enter the first variable: ');
   //let b = prompt('Enter the second variable: ');

//create a temporary variable 

   //let temp;
//swap variables

   //temp = a;
   //a = b;
   //b = temp;
   //console.log(`The value of a after swapping: ${a}`);
   //console.log(`The value of a after swapping: ${b}`);

//Example 2:

//JavaScript program swap two variables

//take input from the users
   //let a  = prompt('Enter the first variable: ');
   //let b = prompt('Enter the second variable: ');

//using destructuring assignment 
   //[a,b] = [b,a];
   //console.log(`The value of a after swapping: ${a}`);
   //console.log(`The value of after swapping: ${b}` );

//Example 3:
//JavaScript program to swap two variables
//take input from the users
   //let a = parseInt (prompt('Enter the first variable: '));
   //let b = parseInt (prompt('Enter the second variable: '));
// addition and subtraction operator
   //a = a +b;
   //b=a-b;
   //a = a - b;
   //console.log(`The value of a after swapping: ${a}`);
   //console.log(`The value of b after swapping: ${b}`);

//Convert Kilometers to Miles


//take input from the users
   let a = parseInt(prompt('Enter a Kilometers value: '));
 
// multiply operator
const miles = (a * 0.621371)
console.log(miles)

//Convert Celsius to Fahrenheit

// program to convert celsius to fahrenheit
// ask the celsius value to the user
  //const celsius = prompt("Enter a celsius value: ");
// calculate fahrenheit
  //const fahrenheit = (celsius *1.8) + 32
// display the result
  //console.log(`$(celsius) degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

//Check if a number is Positive, Negative, or Zero

//Example 1:
//Il program that checks if the number is positive, negative or zero
// input from the user
 // const number = parselnt (prompt("Enter a number: "));
// check if number is greater than 0
  //if (number> 0) {
  //console.log("The number is positive");}
  // check if number is 0
  //else if (number == 0) {
  //console.log("The number is zero");}
  // if number is less than 0
  //else {
  //console.log("The number is negative");}

//Example 2:
// check if the number is positive, negative or zero
  //const number = prompt("Enter a number: ");
  //if (number >= 0) {
  //if (number == 0) {
  //console.log("The number is zero");} else {
  //console.log("The number is positive");}} else {
  //console.log("The number is negative");}

//Check if a Number is Odd or Even

//Example 1:
// program to check if the number is even or odd
// take input from the user
  //const number = prompt("Enter a number: ");
//check if the number is even
  //if (number % 2 == 0) {
  //console.log("The number is even.");}
// if the number is odd
  //else {
  //console.log("The number is odd.");}

//Example 2:
// program to check if the number is even or odd
// take input from the user
  //const number = prompt("Enter a number: ");
// ternary operator
  //const result = (number % 2 == 0) ? "even" : "odd";
