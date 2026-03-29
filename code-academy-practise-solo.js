const words = ['sun', 'moon', 'stars'];
//use .map() to make them uppercase
const bigWords = words.map(word => word.toUpperCase());
console.log(bigWords);

//use .forEach() with index
const bigWordsWithIndex = words.forEach((word, index) => {
    console.log(`${index}: ${word}`)
})


//chain .filter() and .map()
const filteredAndMapped = words.filter(word => word.length > 3).map(word => word.toUpperCase());
console.log(filteredAndMapped);

// const nested = [['a', 'b'], ['c', 'd']];  -> Try flattering it with .reduce()

const nested = [['a', 'b'], ['c', 'd']];

//const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
const flattenedWithSpread = nested.reduce((acc, curr) => [...acc, ...curr], []);
console.log(flattened); // expect ['a', 'b', 'c', 'd']