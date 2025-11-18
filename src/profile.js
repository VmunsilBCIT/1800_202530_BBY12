import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { onAuthReady } from "./authentication.js";
import { getAuth, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

/* ---------------------------------------------------------
   Show user profile info
--------------------------------------------------------- */
function showUserProfile() {
  const nameElement = document.getElementById("name-goes-here");
  const emailElement = document.getElementById("email-goes-here");
  const usernameDisplay = document.getElementById("username-display");

  onAuthReady((user) => {
    if (!user) {
      location.href = "index.html";
      return;
    }

    const name = user.displayName || "Your Username";
    const email = user.email || "email@example.com";

    nameElement.textContent = name;
    emailElement.textContent = email;
    usernameDisplay.textContent = name;

    enableInlineUsernameEdit(user, usernameDisplay, nameElement);
  });
}

/* ---------------------------------------------------------
   Allow username inline editing
--------------------------------------------------------- */
function enableInlineUsernameEdit(user, usernameDisplay, nameElement) {
  usernameDisplay.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = user.displayName || "";
    input.className = "form-control form-control-sm";
    input.style.maxWidth = "200px";
    usernameDisplay.replaceWith(input);
    input.focus();

    const save = () => {
      const newName = input.value.trim();
      if (!newName) {
        alert("Username cannot be empty!");
        input.focus();
        return;
      }

      updateProfile(user, { displayName: newName })
        .then(() => {
          usernameDisplay.textContent = newName;
          nameElement.textContent = newName;
          input.replaceWith(usernameDisplay);
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to update username.");
        });
    };

    input.addEventListener("blur", save);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") save();
    });
  });
}

/* ---------------------------------------------------------
   Image Upload (Fixed!)
   Stores FULL data URL — supports PNG/JPG/WEBP
--------------------------------------------------------- */
function uploadImage() {
  document.getElementById("inputImage").addEventListener("change", handleFileSelect);

  function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      const fullDataURL = e.target.result; // KEEP FULL URL
      saveProfileImage(fullDataURL);
    };

    reader.readAsDataURL(file);
  }
}

/* ---------------------------------------------------------
   Save Base64 Data URL to Firestore
--------------------------------------------------------- */
async function saveProfileImage(fullDataURL) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return;

    const userDocRef = doc(db, "userIDs", user.uid);

    try {
      await setDoc(userDocRef, { profileImage: fullDataURL }, { merge: true });

      console.log("✅ Profile image saved successfully!");
      displayProfileImage(fullDataURL);
    } catch (error) {
      console.error("❌ Error saving profile image:", error);
    }
  });
}

/* ---------------------------------------------------------
   Display image on profile page
--------------------------------------------------------- */
function displayProfileImage(fullDataURL) {
  const imgElement = document.getElementById("profileImage");
  if (imgElement) {
    imgElement.src = fullDataURL; // FULL URL
  }
}

/* ---------------------------------------------------------
   Load profile image when opening page
--------------------------------------------------------- */
async function loadProfileImage() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return;

    const userDocRef = doc(db, "userIDs", user.uid);
    const snap = await getDoc(userDocRef);

    if (snap.exists() && snap.data().profileImage) {
      displayProfileImage(snap.data().profileImage);
    }
  });
}

/* ---------------------------------------------------------
   BIO Editing / Saving
--------------------------------------------------------- */
async function displayBio() {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const bioRef = doc(db, "bio", user.uid);
    const snap = await getDoc(bioRef);

    if (snap.exists()) {
      document.getElementById("description").value = snap.data().description || "";
    }
  } catch (err) {
    console.error("Error loading bio:", err);
  }
}

async function writeBio() {
  const bioDescription = document.getElementById("description").value.trim();
  if (!bioDescription) {
    alert("Bio cannot be empty!");
    return;
  }

  const user = auth.currentUser;
  if (!user) return;

  try {
    await setDoc(
      doc(db, "bio", user.uid),
      { userID: user.uid, description: bioDescription, updatedAt: new Date() },
      { merge: false }
    );

    alert("Bio saved!");
    window.location.reload();
  } catch (err) {
    console.error("Error saving bio:", err);
    alert("Failed to save bio.");
  }
}

/* ---------------------------------------------------------
   Event Listeners
--------------------------------------------------------- */
document.getElementById("submitBtn").addEventListener("click", writeBio);

onAuthReady((user) => {
  if (user) displayBio();
  else location.href = "index.html";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "/login.html";
  });
});

/* ---------------------------------------------------------
   Initialize Page
--------------------------------------------------------- */
showUserProfile();
uploadImage();
loadProfileImage();