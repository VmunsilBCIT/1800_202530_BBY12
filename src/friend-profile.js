import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

const params = new URLSearchParams(window.location.search);
const uid = params.get("uid");

console.log("Friend UID:", uid);

const usernameEl = document.getElementById("friend-username");
const emailEl = document.getElementById("friend-email");
const bioEl = document.getElementById("friend-bio");
const pfpEl = document.getElementById("friend-pfp");

async function loadFriendProfile(uid) {
  if (!uid) {
    usernameEl.textContent = "No UID provided in URL";
    emailEl.textContent = "";
    bioEl.textContent = "";
    return;
  }

  try {
    const userRef = doc(db, "userIDs", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      usernameEl.textContent = userData.userID || "No userID found";
      emailEl.textContent = userData.email || "No email found";
    } else {
      usernameEl.textContent = "User not found";
      emailEl.textContent = "";
    }

    const bioRef = doc(db, "bio", uid);
    const bioSnap = await getDoc(bioRef);

    if (bioSnap.exists()) {
      const bioData = bioSnap.data();
      bioEl.textContent = bioData.description || "No bio yet.";
    } else {
      bioEl.textContent = "No bio yet.";
    }
  } catch (error) {
    console.error("Error loading friend profile:", error);
    usernameEl.textContent = "Error loading profile.";
  }
}

loadFriendProfile(uid);
