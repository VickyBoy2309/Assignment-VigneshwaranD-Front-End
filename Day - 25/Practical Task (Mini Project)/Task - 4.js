// Data fetch using async / await (Fake API)

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // change to false to test error

      if (success) {
        resolve({
          id: 69,
          name: "Vicky_Boy_23😉",
          role: "CEO"
        });
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    console.log("Fetching data...");
    const data = await fetchData(); // waits for promise
    console.log("Data received:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();
