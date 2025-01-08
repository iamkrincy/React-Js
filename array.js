let array = [11,22,33,44,55,66,77,88,99];

console.log(typeof array);
console.log(array.length);


//array methods :- push ,pop ,shift ,unshift , slice, splice ,concat ,some ,every ,map ,foreach ,isArray(),indexof , includes , copuywhitin , reduce , reverse , filter , sort

array.push(100); //push method use for value add in the last 
array.pop(); // pop method use for remove the last value
array.shift() // shift method use for first value delete
array.unshift(222) // Adding element at the beginning
array.reverse(); // reverse method use for reverse the array


// Array.splice (start, deleteCount, item 1)
array.splice(4,0,555) 

array.slice(0,4) //Array.slice (startIndex , endIndex);

console.log(array);

let myset = new Set();

// Adding new elements to the set
myset.add("California");
myset.add("Seattle");
myset.add("Chicago");

// Creating an iterator object
const setIterator = myset.entries();

console.log(setIterator);
