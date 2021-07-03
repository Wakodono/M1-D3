let additionEquation = 12 + 20
console.log(additionEquation)

/* EXERCISE 2
Create a variable named x containing the number 12. Then, UNCOMMENT the "return x" line.
*/

function ex2(){
    let x = 12
    return x
}

/* EXERCISE 3
Create a variable named name containing the string John Doe Then, UNCOMMENT the "return name" line.
*/

function ex3(){
    let name = "John Doe" 
   return name
}

/* EXERCISE 4
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
Then, UNCOMMENT the commented out lines.
*/

function ex4(){
   let x = 12
   let result = x - 12
   return result
}

/* EXERCISE 5
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
Eventually, return both result1 and result2
Then, UNCOMMENT the commented out lines.
*/

let name1 = "John"
let name2 = "john"

let areTheyEqual = name1 !== name2
console.log(areTheyEqual)

name1.toLowerCase()
name2.toLowerCase()

let areTheyEqualNow = name1 == name2
console.log("are they equal now" + ":" + areTheyEqualNow)