/* EXERCISE 1
Get the result of the SUM of 12 and 20
*/

let additionEquation = 12 + 20
console.log(additionEquation)

/* EXERCISE 2
Create a variable named x containing the number 12. Then, UNCOMMENT the "return x" line.
*/

 let x = 12    

/* EXERCISE 3
Create a variable named name containing the string John Doe Then, UNCOMMENT the "return name" line.
*/

let name = "John Doe"

/* EXERCISE 4
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
Then, UNCOMMENT the commented out lines.
*/

12 - x

/* EXERCISE 5
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
Eventually, return both result1 and result2
Then, UNCOMMENT the commented out lines.
*/

let name1 = "John"
let name2 = "john"
console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())

/* EXERCISE 6
Write the code to print the literal value of a 
number x: its value must be less than 10. (ex.: if x is 1 print "one", if 5 print "five" etc.) */

x = 9
switch(x){
    case 1: console.log("one"); break;
    case 2: console.log("two"); break;
    case 3: console.log("three"); break;
    case 4: console.log("four"); break;
    case 5: console.log("five"); break;
    case 6: console.log("six"); break;
    case 7: console.log("seven"); break;
    case 8: console.log("eight"); break;
    case 9: console.log("nine"); break;
    default: console.log("The number must be between 1 and 9")
}

/* EXERCISE 7
Return the largest between two numbers a and b using a ternary operator.*/

let a = 15
let b = 99
let isaBigger = a >= b
let isbBigger = b >= a

/* Expanded alternative
if (isaBigger) {
    console.log(a)
} else {
    console.log(b)
} */

// More condensed alternative: this line is exactly the same as the commented out IF-ELSE block above
largestNumber = isaBigger ? console.log(a) : console.log(b)
