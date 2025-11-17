import { 
  collection, 
  query, 
  where, 
  getDocs, 
  setDoc, 
  doc, 
  getDoc 
} from "firebase/firestore";

import { db } from "/src/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// DOM elements
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const addBtn = document.getElementById("confirmAddFriend");
const backBtn = document.getElementById("back-btn");

let foundUserUID = null;
let myUID = null;


function showResult(message, isError = false) {
  resultContainer.style.display = "block";
  resultText.textContent = message;
  resultText.style.color = isError ? "red" : "green";
}


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    myUID = user.uid;
  }
});

// =======================
// 🔍 SEARCH FUNCTION
// =======================
searchButton.addEventListener("click", async () => {
  addBtn.style.display = "none";  
  foundUserUID = null;

  let userID = searchInput.value.trim();
  userID = Number(userID);

  if (isNaN(userID)) {
    showResult("⚠️ Please enter a valid numeric User ID.", true);
    return;
  }

  try {
    const usersRef = collection(db, "userIDs");
    const q = query(usersRef, where("userID", "==", userID));
    const snap = await getDocs(q);

    if (!snap.empty) {
      snap.forEach((docItem) => {
        const data = docItem.data();
        foundUserUID = docItem.id;

        if (foundUserUID === myUID) {
          showResult("⚠️ You cannot add yourself.", true);
          return;
        }

        showResult(`Found user: ${data.email}`);
        addBtn.style.display = "block";
      });
    } else {
      showResult("No user found with that ID.", true);
    }

  } catch (error) {
    console.error("Search error:", error);
    showResult("Error searching for user.", true);
  }
});

// =======================
// ➕ ADD FRIEND FUNCTION
// =======================
addBtn.addEventListener("click", async () => {
  if (!foundUserUID) {
    alert("No user selected.");
    return;
  }

  try {
   
    const checkDocRef = doc(db, "friends", myUID, "list", foundUserUID);
    const checkSnap = await getDoc(checkDocRef);

    if (checkSnap.exists()) {
      alert("You already added this user.");
      return;
    }

    
    await setDoc(checkDocRef, {
      createdAt: new Date(),
    });

    alert("Friend added successfully!");
    addBtn.style.display = "none";
    searchInput.value = "";

  } catch (error) {
    console.error("Add friend error:", error);
    alert("Failed to add friend.");
  }
});

// Back button
backBtn.addEventListener("click", () => {
  window.location.href = "/friends.html";
});
