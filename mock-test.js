// 1. Write a function getFirst(arr) that returns the first element of an array.

const getFirst = (arr) => {
    return arr[0];
}

getFirst([1, 2, 3]) // 1
getFirst(["a", "b", "c"]) // "a"
getFirst([]) // undefined

console.log(getFirst([1, 2, 3])); // Output: 1

// 2. Write a function sumArray(arr) that returns the sum of all numbers in an array.

const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10

sumArray([1, 2, 3, 4]) // 10
sumArray([5, 5]) // 10
sumArray([]) // 0

// 3. Write a function reverseString(str) that returns the reverse of a string.

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"

reverseString("hello") // "olleh"
reverseString("abc") // "cba"

// 4. Write a function countVowels(str) that returns how many vowels are in a string.

const countVowels = (str) => {
    return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length
;}

console.log(countVowels("hello")); // Output: 2

countVowels("hello") // 2
countVowels("javascript") // 3
countVowels("sky") // 0

// 5.Write a function findMax(arr) that returns the largest number in an array.

const findMax = (arr) => {
    return Math.max(...arr);
}

console.log(findMax([3, 7, 2, 9, 5])); // Output: 9

findMax([3, 7, 2, 9, 5]) // 9
findMax([-10, -3, -20]) // -3

// 6. Write a function isPalindrome(str) that returns true if the word reads the same backwards, otherwise false

const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
} 

console.log(isPalindrome("racecar")); // Output: true

isPalindrome("racecar") // true
isPalindrome("madam") // true
isPalindrome("hello") // false


// 7. Write a function getEvens(arr) that returns a new array containing only the even numbers.

const getEvens = (arr) => {
    return arr.filter % 2 ? true : false;
}

console.log(getEvens([1, 2, 3, 4, 5, 6]))
getEvens([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
getEvens([1, 3, 5]) // []


/* 8. Write a function fizzBuzz(n) that:
returns "FizzBuzz" if divisible by both 3 and 5
returns "Fizz" if divisible by 3
returns "Buzz" if divisible by 5
otherwise returns the number  */

const fizzBuzz = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}


fizzBuzz(3) // "Fizz"
fizzBuzz(5) // "Buzz"
fizzBuzz(15) // "FizzBuzz"
fizzBuzz(7) // 7


// 8. 
