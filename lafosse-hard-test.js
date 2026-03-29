//Write a function reverseString(str) that returns the string reversed.

const reverseString = (str) => {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


reverseString("hello") // "olleh"
reverseString("abc")   // "cba"



/* 
Write a function countPositivesSumNegatives(arr) that:
returns an array with 2 values

first value = how many positive numbers are in the array

second value = the sum of all negative numbers

Ignore zeros. 
*/

const countPositivesSumNegatives = (arr) => {
    
}


countPositivesSumNegatives([1, 2, 3, -1, -2, 0]) // [3, -3]
countPositivesSumNegatives([0, 0, 0]) // [0, 0]