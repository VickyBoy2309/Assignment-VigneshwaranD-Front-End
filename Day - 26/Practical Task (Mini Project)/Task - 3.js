// Fake API call using Promise

function fakeApiCall() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      const success = true; // change to false to test rejection

      if (success) {
        resolve({
          status: 200,
          data: "User data fetched successfully"
        });
      } else {
        reject({
          status: 500,
          error: "Server error"
        });
      }
    }, 2000);
  });
}

// Consuming the Promise
fakeApiCall()
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    console.log("Error:", error.error);
  });
