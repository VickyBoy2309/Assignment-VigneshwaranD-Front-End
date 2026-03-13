// Creating a Promise that resolves

const myPromise = new Promise((resolve, reject) => {
  resolve("Promise resolved successfully!");
});

// Consuming the Promise
myPromise.then((message) => {
  console.log(message);
});
