// //1- Write a program that allow to user enter number then printit
// var number = window.prompt("Enter a number:");
// console.log("The number is " + number);
 
// //2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// var number2 = window.prompt("Enter a number:");
// if (number2 % 3 === 0 && number2 % 4 === 0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// //3- Write a program that allows the user to insert 2 integers then print the max
// var firstNum = parseInt(prompt("Enter the first integer:"));
// var secondNum = parseInt(prompt("Enter the second integer:"));

// if (firstNum > secondNum) {
//     console.log("The maximum is " + firstNum);
// } else if (secondNum > firstNum) {
//     console.log("The maximum is " + secondNum);
// } else {
//     console.log("The integers are equal");
// }

//  //4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
//  var num = parseInt(prompt("Enter an integer:"));
//  if (num < 0) {
//     console.log("Negative");
// } else if (num > 0) {
//     console.log("Positive");
// } else {
//     console.log("Zero");
// }

// //5- Write a program that take 3 integers from user then print the max element and the min element.
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));
// var num3 = parseInt(prompt("Enter the third integer:"));
// var max , min;
// if (num1 > num2 && num1 > num3) {
//     max=num1;
// } else if (num2 > num1 && num2 > num3) {
//     max=num2;
// } else if (num3 > num1 && num3 > num2) {
//     max=num3;
// } else {
//     console.log("The integers are equal");
// }

// if (num1 < num2 && num1 < num3) {
//     min=num1;
// } else if (num2 < num1 && num2 < num3) {
//     min=num2;
// } else if (num3 < num1 && num3 < num2) {
//     min=num3;
// } else {
//     console.log("The integers are equal");
// }

// console.log("Maximum number: " + max);
// console.log("Minimum number: " + min);

// //6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var number3 = parseInt(prompt("Enter an integer:"));

// if (number3 % 2 === 0) {
//     console.log("The number is even.");
// } else if(number3 % 2 === 1){
//     console.log("The number is odd.");
// } else{
//     console.log("Please enter the valid number!");
// }

// //8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var character = prompt("Enter a character:");

// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" ||character === "A" || character === "E" || character === "I" || character === "O" || character === "U" ) {
//     console.log("Vowel");
// } else {
//     console.log("Consonant"); }

//9-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant 
// var number4 = parseInt(prompt("Enter an integer:"));
// for (var i = 1 ; i<= number4 ; i++){
//     if(i< number4){
//       console.log( i + " , ");  
//     } else if (i == number4){
//         console.log( i );  
//     }else{
//             console.log("Please enter the valid number!");}
// }

// //10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// var number5 = parseInt(prompt("Enter an integer:"));

//     console.log("Multiplication table for : " + number5 );
//     for (var i = 1; i <= 12; i++) {
//         console.log(number5 * i);
//     }

// //11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var number6 = parseInt(prompt("Enter an integer:"));
// for (var i = 2; i <= number6; i += 2) {
//     console.log(i);
// }

// //12- Write a program that take two integers then print the power 
// var base = parseInt(prompt("Enter the base integer:"));
// var exponent = parseInt(prompt("Enter the exponent integer:"));
// var cal=base;
// for(var i = 1; i <exponent;i++ ){
//     cal *= base ; 
// }
// console.log(base + " Power of " + exponent + " is: " + cal);

// //12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var Subject1 = parseInt(prompt("Enter marks for subject 1:"));
// var Subject2 = parseInt(prompt("Enter marks for subject 2:"));
// var Subject3 = parseInt(prompt("Enter marks for subject 3:"));
// var Subject4 = parseInt(prompt("Enter marks for subject 4:"));
// var Subject5 = parseInt(prompt("Enter marks for subject 5:"));

// var totalMarks = Subject1 + Subject2 + Subject3 + Subject4 + Subject5;
// var averageMarks = totalMarks / 5;
// var percentage = (totalMarks / 500 ) * 100;
// console.log("Total marks: " + totalMarks);
// console.log("Average marks: " + averageMarks);
// console.log("Percentage: " + percentage + "%");

// //13-Write a program to input month number and print number of days in that month.
// var monthNumber = parseInt(prompt("Enter the month number (1-12):"));
// var daysInMonth1 = 31;
// var daysInMonth2 = 28;
// var daysInMonth3 = 31;
// var daysInMonth4 = 30;
// var daysInMonth5 = 31;
// var daysInMonth6 = 30;
// var daysInMonth7 = 31;
// var daysInMonth8 = 31;
// var daysInMonth9 = 30;
// var daysInMonth10 = 31;
// var daysInMonth11 = 30;
// var daysInMonth12 = 31
// if ( monthNumber < 1 || monthNumber > 12) {
//     console.log(" Please enter a valid month number from 1 to 12!");
// }
//  else {
//     switch(monthNumber){
//         case 1:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth1 );       
//             break;
//         case 2:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth2 );       
//             break;
        
//         case 3:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth3 );       
//             break;
//         case 4:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth4 );       
//             break;
        
//         case 5:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth5 );       
//             break;
//         case 6:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth6 );       
//             break;
//         case 7:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth7 );       
//             break;
//         case 8:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth8 );       
//             break;
        
//         case 9:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth9 );       
//             break;
//         case 10:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth10 );       
//             break;
        
//         case 11:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth11 );       
//             break;
//         case 12:
//             console.log("Number of days in month " + monthNumber + ": " + daysInMonth12 );       
//             break;
//         }
//     }

// //14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade 
// var physics = parseInt(prompt("Enter marks for Physics:"));
// var chemistry = parseInt(prompt("Enter marks for Chemistry:"));
// var biology = parseInt(prompt("Enter marks for Biology:"));
// var mathematics = parseInt(prompt("Enter marks for Mathematics:"));
// var computer = parseInt(prompt("Enter marks for Computer:"));

// var totalMarks2 = physics + chemistry + biology + mathematics + computer;
// var percentage2 = (totalMarks2 / (5 * 100)) * 100;
// var grade;
// if (percentage2 >= 90) {
//     grade = 'A';
// } else if (percentage2 >= 80) {
//     grade = 'B';
// } else if (percentage2 >= 70) {
//     grade = 'C';
// } else if (percentage2 >= 60) {
//     grade = 'D';
// } else if (percentage2 >= 40) {
//     grade = 'E';
// } else {
//     grade = 'F';
// }
// console.log("Total marks: " + totalMarks2);
// console.log("Percentage: " + percentage2 + "%");
// console.log("Grade: " + grade);

// //15- Write a program to print total number of days in month 
// var monthNumber2 = parseInt(prompt("Enter the month number (1-12):"));
//     switch(monthNumber2){
//         case 1:
//             console.log("Number of days in month " + monthNumber2 + ": " + 31 );       
//             break;
//         case 2:
//             console.log("Number of days in month " + monthNumber2 + ": " + 28 );       
//             break;
        
//         case 3:
//             console.log("Number of days in month " + monthNumber2 + ": " + 31 );       
//             break;
//         case 4:
//             console.log("Number of days in month " + monthNumber2 + ": " + 30 );       
//             break;
        
//         case 5:
//             console.log("Number of days in month " + monthNumber2 + ": " + 31 );       
//             break;
//         case 6:
//             console.log("Number of days in month " + monthNumber2 + ": " + 30 );       
//             break;
//         case 7:
//             console.log("Number of days in month " + monthNumber2 + ": " + 31 );       
//             break;
//         case 8:
//             console.log("Number of days in month " + monthNumber2 + ": " + 31 );       
//             break;
        
//         case 9:
//             console.log("Number of days in month " + monthNumber2 + ": " + 30 );       
//             break;
//         case 10:
//             console.log("Number of days in month " + monthNumber2 + ": " + 31 );       
//             break;
        
//         case 11:
//             console.log("Number of days in month " + monthNumber2 + ": " + 30 );       
//             break;
//         case 12:
//             console.log("Number of days in month " + monthNumber2 + ": " + 31 );       
//             break;
//         }

// if( monthNumber2 < 1 || monthNumber2 > 12) {
//     console.log("Invalid month number. Please enter a valid month number (1-12).");
// } else {
//     console.log("")
// }

//(a,e,I,o,u) 
// 16-Write a program to check whether an alphabet is vowel or consonant
// var character2 = prompt("Enter a character:");
// switch (character2){
// case 'A':
//     console.log(character2 + " is a vowel.");
// break;
// case 'a':
//     console.log(character2 + " is a vowel.");
// break;
// case 'E':
//     console.log(character2 + " is a vowel.");
// break;
// case 'e':
//     console.log(character2 + " is a vowel.");
// break;
// case 'I':
//     console.log(character2 + " is a vowel.");
// break;
// case 'i':
// console.log(character2 + " is a vowel.");
// break;
// case 'O':
//     console.log(character2 + " is a vowel.");
// break;
// case 'o':
// console.log(character2 + " is a vowel.");
// break;
// case 'U':
//     console.log(character2 + " is a vowel.");
// break;
// case 'u':
// console.log(character2 + " is a vowel.");
// break;
// default:
//     console.log(character2 + " is a consonant.");
// }

// //17- Write a program to find maximum between two numbers 
// var num10 = parseInt(prompt("Enter the first Number:"));
// var num20 = parseInt(prompt("Enter the second Number:"));
// switch (true) {
//     case num10 > num20:
//         console.log("Maximum number: " + num10);       
//          break;
//     case num10 < num20:
//         console.log("Maximum number: " + num20);     
//            break;
//     default:
//         console.log("Numbers are equal");
// }

// //18- Write a program to check whether a number is even or odd 
// var number10 = parseInt(prompt("Enter a number:"));
// switch (true) {
//     case number10 % 2 === 0:
//         console.log("The number is even.");
//         break;   
//     case number10 % 2 === 1:
//         console.log("The number is odd.");
//         break;            
// }

// //19- Write a program to check whether a number is positive or negative or zero 
// var number11 = parseInt(prompt("Enter a number:"));
// switch (true) {
//     case number11 > 0:
//         console.log("The number is positive.");
//         break;   
//     case number11 < 0 :
//         console.log("The number is negative.");
//         break; 
//     default:
//         console.log("The number is equal zero.");           
// }

//20- Write a program to create Simple Calculator 
var operation = parseInt(prompt("Enter an operation:"));
var num12 = parseInt(prompt("Enter a first number:"));
var num13 = parseInt(prompt("Enter a second number:"));
    switch (operation) {
        case 'add':
             console.log("Result = " + num12 + num13);   
             break;     
        case 'subtract':
            console.log("Result = " + num12 - num13);
             break;
        case 'multiply':
            console.log("Result = " + num12 * num13);
             break;
        case 'divide':
            console.log("Result = " + num12 / num13);
             break;
        default:
            console.log("Invalid operation") ;
    }
    
