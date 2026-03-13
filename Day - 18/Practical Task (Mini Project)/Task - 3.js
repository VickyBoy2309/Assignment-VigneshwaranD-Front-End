const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const correctPassword = "admin123";
let enteredPassword = "";

function askPassword() {
  rl.question("Enter your password: ", (input) => {
    enteredPassword = input;

    if (enteredPassword === correctPassword) {
      console.log("Login successful!");
      rl.close();
    } else {
      console.log("Wrong password. Try again.\n");
      askPassword(); // repeat until correct
    }
  });
}

askPassword();