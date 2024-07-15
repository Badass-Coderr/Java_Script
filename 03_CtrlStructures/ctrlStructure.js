// Day 3
// of 30 Days of Java script by Hitesh Choudhary


// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 1;
if(num > 0)
    console.log("Positive");
else if(num == 0)
    console.log("Zero");
else
console.log("Negative");

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if(age >= 18) console.log("Eligible");
else console.log("Not Eligible");


// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 5, b = 7, c = 9;
if(a >= b && a >= c)  console.log("a = " + a + " is greatest");
else if(b >= c && b >= a)  console.log("b = " + b + " is greatest");
else if(c >= b && c >= a)  console.log("c = " + c + " is greatest");


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5;
switch (day) {
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thrusday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    
    default: console.log("Invalid");
    break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 70;
switch (score) {
    case score>80: console.log("A");       
        break;
    case score>70: console.log("B");       
        break;
    case score>60: console.log("C");       
        break;
    case score>50: console.log("D");       
        break;
    case score>40: console.log("E");       
        break;
    default: console.log("F"); 
        break;
}


// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the temary operator to check if a number is even or odd and log the result to the console.
let n = 5;
n%2 == 0 ? console.log("Even") : console.log("Odd");


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 3000;
if(year % 2 == 0 || year % 2 == 0)
    console.log("Leap Year");
else
    console.log("Not a leap Year");

