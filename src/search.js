import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "/src/firebaseConfig.js";
import { getAuth } from "firebase/auth";

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const backBtn = document.getElementById("back-btn");

function showResult(html) {
  resultContainer.style.display = "block";
  resultText.innerHTML = html;
  resultText.style.color = "black";
}

searchButton.addEventListener("click", async () => {
  let userID = searchInput.value.trim();

  userID = Number(userID);
  if (isNaN(userID)) {
    showResult(
      `<span style="color:red">Please enter a valid numeric User ID.</span>`
    );
    return;
  }

  try {
    const usersRef = collection(db, "userIDs");
    const q = query(usersRef, where("userID", "==", userID));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      showResult(`<span style="color:red">No user found with that ID.</span>`);
      return;
    }

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();

      showResult(`
        <div>
          <p>Found user: <strong>${data.email}</strong></p>
          <button id="add-friend-btn" style="margin-top:10px; padding:8px 16px;">
            Add Friend
          </button>
        </div>
      `);

      document.getElementById("add-friend-btn").onclick = () =>
        addFriend(docSnap.id, data.email);
    });
  } catch (error) {
    console.error(error);
    showResult(`<span style="color:red">Error searching for user.</span>`);
  }
});

async function addFriend(friendUID, friendEmail) {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    showResult(`<span style="color:red">You must be logged in.</span>`);
    return;
  }

  try {
    const myDocRef = doc(db, "userIDs", currentUser.uid);

    await updateDoc(myDocRef, {
      friends: arrayUnion(friendUID),
    });

    showResult(`
      <p style="color:green;">
        Successfully added <strong>${friendEmail}</strong> as a friend!
      </p>
    `);
  } catch (err) {
    console.error(err);
    showResult(`<span style="color:red">Error adding friend.</span>`);
  }
}

backBtn.addEventListener("click", () => {
  window.location.href = "/friends.html";
});