/*
1. Add two strings together that use the same type of quotes

   e.g. `'Java' + 'Script'`

3. Add two strings together using different types of quotes

   e.g. `"I'm double quoted!" + 'I am single quoted.'`
   
6. Subtract two strings
  
   e.g. `'cats' - 'dogs'`
   
9. Add a string to a number
    
11. What happens when you try to put quotes inside your string's quotes?

Write your code below here, remember to use `console.log(someValue)`.
*/

let p1 = `Java`
let p2 = `Script`

console.log(p1 + p2) // `JavaScript` is printed

let p3 = "I'm doubled quoted!"
let p4 = 'I am single quoted.'

console.log(p3 + p4) // `I'm doubled quoted!I am single quoted.` is printed

let that = "this"
let there = "over"

console.log(that - there) // `NaN` is printed?

let pi = 3.14
let pie = "A kind of cake?"

console.log(pi + pie) // `3.14A kind of cake?` is printed

// [let p4B = 'I'm single quoted'] doesn't like everything after the second single apostrophe.

// ! BONUS STUFF

console.log(p1.length) // Allows you to find the length of the string

console.log(p4.toUpperCase()) // Converts the entire string to uppercase

/* I feel like I would have to make an object in order to get this last one to work. BUT I'm sure there's a way to do it without, so no completed bonus. */


