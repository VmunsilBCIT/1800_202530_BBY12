import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "/src/firebaseConfig.js";

// DOM elements
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const backBtn = document.getElementById("back-btn");

function showResult(message, isError = false) {
  resultContainer.style.display = "block";
  resultText.textContent = message;
  resultText.style.color = isError ? "red" : "green";
}

searchButton.addEventListener("click", async () => {
  let userID = searchInput.value.trim();
  console.log("User typed:", `"${userID}"`);

  // Convert to number
  userID = Number(userID);
  if (isNaN(userID)) {
    showResult("⚠️ Please enter a valid numeric User ID.", true);
    return;
  }

  try {
    const usersRef = collection(db, "userIDs");

    // DEBUG: Print all documents
    console.log("All documents in userIDs collection:");
    const allDocs = await getDocs(usersRef);
    allDocs.forEach((doc) =>
      console.log("Doc ID:", doc.id, "Data:", doc.data())
    );

    // Query by numeric userID
    const q = query(usersRef, where("userID", "==", userID));
    const querySnapshot = await getDocs(q);

    console.log("Query results for userID:", userID);
    querySnapshot.forEach((doc) =>
      console.log("Matched doc ID:", doc.id, "Data:", doc.data())
    );

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        showResult(`Found user: ${data.email}`);
      });
    } else {
      showResult("No user found with that ID.", true);
    }
  } catch (error) {
    console.error("Error searching for user:", error);
    showResult("Error searching for user.", true);
  }
});

// Add Friend button — navigates to addfriends.html
document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "/friends.html";
});
