import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const db = getFirestore();

// Read UID from URL
const params = new URLSearchParams(window.location.search);
const uid = params.get("uid");

const usernameEl = document.getElementById("friend-username");
const useridEl = document.getElementById("friend-userid");
const emailEl = document.getElementById("friend-email");
const bioEl = document.getElementById("friend-bio");
const locEl = document.getElementById("friend-loc");
const pfpEl = document.getElementById("friend-pfp");

async function loadProfile() {
  if (!uid) {
    usernameEl.textContent = "No UID provided!";
    return;
  }

  try {
    // Load data from userIDs/{uid}
    const userRef = doc(db, "userIDs", uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      usernameEl.textContent = "User not found.";
      return;
    }

    const data = snap.data();

    usernameEl.textContent = data.username || "(no username)";
    useridEl.textContent = data.userID || "(no userID)";
    emailEl.textContent = data.email || "(no email)";

    // Location
    if (data.location) {
      locEl.textContent = `Lat: ${data.location.lat}, Lng: ${data.location.lng}`;
    } else {
      locEl.textContent = "No location available";
    }

    // Set default pfp
    pfpEl.src = "./images/default-pfp.png";

    // Load bio if exists
    const bioRef = doc(db, "bio", uid);
    const bioSnap = await getDoc(bioRef);

    if (bioSnap.exists()) {
      const bioData = bioSnap.data();
      bioEl.textContent = bioData.description || "No bio written.";
    } else {
      bioEl.textContent = "No bio written.";
    }
  } catch (err) {
    console.error("Profile loading error:", err);
    usernameEl.textContent = "Error loading profile.";
  }
}

/* ---------------------------------------------------------
   Display image on profile page
--------------------------------------------------------- */
function displayProfileImage(fullDataURL) {
  const imgElement = document.getElementById("friend-pfp");
  if (imgElement) {
    imgElement.src = fullDataURL; // FULL URL
  }
}

/* ---------------------------------------------------------
   Load profile image when opening page
--------------------------------------------------------- */
async function loadFriendProfileImage() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return;

    const userDocRef = doc(db, "userIDs", uid);
    const snap = await getDoc(userDocRef);

    if (snap.exists() && snap.data().profileImage) {
      displayProfileImage(snap.data().profileImage);
    }
  });
}

loadProfile();
loadFriendProfileImage();
