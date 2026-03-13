// Convert Object to JSON & back

// Original JavaScript object
const user = {
  name: "Vicky",
  age: 21,
  role: "Student"
};

// Object ➜ JSON (string)
const jsonData = JSON.stringify(user);
console.log("JSON String:", jsonData);

// JSON ➜ Object
const parsedObject = JSON.parse(jsonData);
console.log("Converted back to Object:", parsedObject);
