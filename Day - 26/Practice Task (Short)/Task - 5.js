// Original Promise
function createPromise() {
  return new Promise((resolve, reject) => {
    resolve("Promise resolved successfully!");
  });
}

// Converted to async / await
async function useAsyncAwait() {
  try {
    const result = await createPromise(); // waits for promise
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

useAsyncAwait();
