// Day 1
// of 30 Days of Java script by Hitesh Choudhary


// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 69;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str = "Cristan Grey";
console.log(str);

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const horny = true;
console.log(horny);

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num1 = 1500;                    //number
let str1 = "De de Re Baba";         //string
let haiYaNahi = false;              //boolean
let arr = [7, 5, 3, 2];             //object
let obj = {                         //object
    Name : "Badass_Coderr",         //undefined
    college : "NIT Warangal"
}

console.log(num1 + " - " + typeof(num1));
console.log(str1 + " - " + typeof(str1));
console.log(haiYaNahi + " - " + typeof(haiYaNahi));
console.log(arr + " - " + typeof(arr));
console.log(obj + " - " + typeof(obj));
console.log(obj[0] + " - " + typeof(obj[0]));


// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let num2 = 150;
num2 = 100;
console.log(num2);          //100

// Task 6: Try reassigning a variable declared with const and observe the error.
horny = true;       //refer Task 3 const variable
                    //TypeError: Assignment to constant variable.


// Feature request -------------
// 1. Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// solution : Reffer to task 4;


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between tet and const when it comes to reassignment.
horny = true;       //canst reassigned goves error
num2 = 150;         //let reassigned no error





