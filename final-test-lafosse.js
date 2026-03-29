

//Create a function that returns the largest number in an array -> 
const findMax = (arr) => {
    return arr.reduce((max, num) => {
      return num > max ? num : max;
    });
  };
  
  console.log(findMax([3, 7, 2, 9, 5])); // 9

//Create a function that: takes a string returns true if it is a palindrome otherwise returns false 👉 Palindrome = same forward and backward

const isPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("madam")); // expect true

//Create a function that: takes an array of numbers, returns a new array with only numbers greater than 10 
// and multiply each of those numbers by 2

const processNumbers = (arr) => {
    return arr
      .filter(num => num > 10)
      .map(num => num * 2);
  };
  
  console.log(processNumbers([5, 12, 8, 20])); // [24, 40]