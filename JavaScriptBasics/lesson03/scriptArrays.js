
// An array with values of different types. 
let array = ['element index 0', 1, true];
console.log(array);


// Nested arrays. 
let array0 = ['name', 1, true, ['array1'], ['array2'], ['array3']];
console.log(array0);

// Acessing an single element by index
console.log(array[0]);

// Acessing all elements by .forEach() method
array.forEach(function(item, index){console.log(`Index: ${ index } item: ${array[index]} type: ${typeof(array[index])}`)});
array.forEach((item, index) => console.log(`Index: ${ index } item: ${array[index]} type: ${typeof(array[index])}`));

// Adding new elements at the end with push method
array.push("I am in!", 0, "wow!")
console.log(array)

// Removing the last element pop method
console.log(`Removing: ${ array.pop() }`)
console.log(array);

// Removing the first element with shif methodt
var element = array.shift();
console.log(`Removing: ${ element }`);
console.log(array);

// Adding the first element with unshif methodt
console.log(`Adding: ${ element }`)
array.unshift(element)
console.log(array);

// Getting the index of an element
console.log(`Index of '${ element }' is ${array.indexOf(element)}`)

// Removing a sequence of elements with splice method
array.splice(0, 3)
console.log(array)

// Getting a sub array with slice method
var newArray = array.slice(0,1);
console.log(newArray);