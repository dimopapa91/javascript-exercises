// Create a function that returns the sum of all numbers in an array
const sumArray = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum;
}


//Create a function that checks if a number is even or odd

/* Requirements:

return "Even" or "Odd"

must use a function */

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    } 
}

//Create a function that counts how many vowels are in a string , Vowels = "a", "e", "i", "o", "u"

const countVowels = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}






 
console.log(sumArray([1, 2, 3, 4])); // expect 10
console.log(evenOrOdd(7));           // expect "Odd"
console.log(countVowels("hello"));   // expect 2  
