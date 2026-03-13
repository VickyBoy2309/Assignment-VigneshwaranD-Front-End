// Fetch users and display emails (Fake API using async/await)

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Tony Stark", email: "ironman1@starkindustry.com" },
        { id: 69, name: "Steve Rogers", email: "bb@bb.com" },
        { id: 100, name: "Bruce Banner", email: "steve@69.com" }
      ]);
    }, 2000);
  });
}

async function displayEmails() {
  try {
    console.log("Fetching users...");
    const users = await fetchUsers(); // wait for data

    console.log("User Emails:");
    users.forEach(user => {
      console.log(user.email);
    });
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

displayEmails();
