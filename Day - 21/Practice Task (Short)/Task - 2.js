//OG Array
let Avengers = ["Captain America","Iron Man","Thor","Hulk","Hawkeye","Black Widow"];
console.log(`This is a Original Array`,Avengers);

//The Array after push a new value - This is used to add new value at the end of the array
Avengers.push("Scarlet Witch");
console.log(`This is a new array after using "push"`,Avengers);

//The array after pop a value - This is used to delete a last value from the array
Avengers.pop();
console.log(`This is a array after using "pop"`,Avengers);

//The array after shift a value - This is used to delete the value at index[0] of the array
Avengers.shift();
console.log(`This is a new array after using "shift"`,Avengers);

//The array after unshift a value - This is used to add new value of the begining of the array
Avengers.unshift("Spider-Man");
console.log(`This is a array after using "unshift"`,Avengers);