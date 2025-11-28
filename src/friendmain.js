import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userUID = user.uid;

    // Path: userIDs/{userUID}
    const userDocRef = doc(db, "userIDs", userUID);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const userIDValue = userData.userID; // your field

      document.getElementById("userID").textContent = userIDValue;
      console.log("UserID from Firestore:", userIDValue);
    } else {
      console.log("No document found for this UID in 'userIDs'");
      document.getElementById("userID").textContent = "No userID found";
    }
  } else {
    document.getElementById("userID").textContent = "Not signed in";
  }
});

//Friends list button
document.getElementById("friend-list-btn").addEventListener("click", () => {
  window.location.href = "/friendlist.html";
});

//Messages button
document.getElementById("messages-btn").addEventListener("click", () => {
  window.location.href = "/messages.html";
});

//Add Friend button
document.getElementById("add-friend-btn").addEventListener("click", () => {
  window.location.href = "/addfriend.html";
});
