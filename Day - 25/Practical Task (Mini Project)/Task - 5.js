// Login simulation with async flow

function login(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Checking credentials...");

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid username or password");
      }
    }, 2000);
  });
}

async function loginUser() {
  try {
    console.log("Logging in...");
    const result = await login("admin", "1234"); // change values to test
    console.log(result);
    console.log("Redirecting to dashboard...");
  } catch (error) {
    console.log("Login failed:", error);
  }
}

loginUser();
