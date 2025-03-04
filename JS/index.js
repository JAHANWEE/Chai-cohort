let fruits = ["apple" , "banana"];
let intFruits = ["kiwi" , " avavcado", "dragon fruit"]

//unshift
fruits.unshift("new item");
//pop    
fruits.pop()            // removes last element of array
//sort
fruits.sort();          // sort the elements
//.at
console.log(fruits.at(1)); // gives new item as it takes the int value and return the item at taht index
console.log(intFruits.at(-1));     // gives dragonfruit as it counts from last to first.
//concat - merges two or more arrays
const conacatedarray = fruits.concat(intFruits);
console.log(conacatedarray);
//.every -- checks for the specified condiotion if true for all values of array , return boolean 
const numbers = (value) => value <50
const arr2 = [1 , 34, 45, 22 , 30]
console.log(arr2.every(numbers)); // true as all value less than 50
const arr3 = [3 , 45, 67, 78, 89]
console.log(arr3.every(numbers)); // false as condition is violated 
//.fill -- fils the array with the value from start to end index , if not specified , fills every index , or simple just value is given fills entire array with same value 
const aar3 = [1, 2, 3, 4]
console.log(aar3.fill(0,2,4)); // fills 0 from 2 to 3rd index =>[ 1, 2, 0, 0 ]
console.log(aar3.fill(4,2));  // fills array with 4 value from index 2 to end =>[ 1, 2, 4, 4 ]
console.log(aar3.fill(9));  // fills entire array with 9 =>[ 9, 9, 9, 9 ]




console.log(fruits)     // adds item to first of array.



