import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { onAuthReady } from "./authentication.js";
import { getAuth, updateProfile } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

function showUserProfile() {
  const nameElement = document.getElementById("name-goes-here");
  const emailElement = document.getElementById("email-goes-here");
  const usernameDisplay = document.getElementById("username-display");
  const bioElement = document.getElementById("bio-goes-here");

  onAuthReady((user) => {
    if (!user) {
      location.href = "index.html";
      return;
    }

    const name = user.displayName || "Your Username";
    const email = user.email || "email@gmail.ca";
    const bio = user.bio || "Click to edit";

    nameElement.textContent = name;
    emailElement.textContent = email;
    usernameDisplay.textContent = name;
    bioElement.textContent = bio;

    enableInlineUsernameEdit(user, usernameDisplay, nameElement);
    enableInlineBioEdit(user, bioElement); // new
  });
}

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

document.getElementById("file").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const image = document.getElementById("output");
  const url = URL.createObjectURL(file);
  image.src = url;

  image.onload = () => URL.revokeObjectURL(url);
});

// --- NEW: Inline bio editing ---
function enableInlineBioEdit(user, bioElement) {
  bioElement.addEventListener("click", () => {
    const input = document.createElement("textarea");
    input.value = bioElement.textContent;
    input.className = "form-control";
    input.rows = 3;
    bioElement.replaceWith(input);
    input.focus();

    const save = () => {
      const newBio = input.value.trim();
      // You could also store bio in Firestore or Realtime DB
      // For now we just update the page display
      bioElement.textContent = newBio || "Click to edit";
      input.replaceWith(bioElement);
    };

    input.addEventListener("blur", save);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        // Enter saves, Shift+Enter for new line
        e.preventDefault();
        save();
      }
    });
  });
}

// --- Load bio when page loads ---
async function displayBio(id) {
  try {
    const bioRef = doc(db, "bio", id);
    const bioSnap = await getDoc(bioRef);

    if (bioSnap.exists()) {
      const bioData = bioSnap.data();
      document.getElementById("description").value = bioData.description || "";
    } else {
      console.log("No such bio found!");
    }
  } catch (error) {
    console.error("Error getting bio document:", error);
  }
}

// --- Write a new bio ---
async function writeBio() {
  console.log("Inside writeBio");

  const bioDescription = document.getElementById("description").value.trim();
  if (!bioDescription) {
    alert("Bio cannot be empty!");
    return;
  }

  const user = auth.currentUser;
  if (user) {
    try {
      const docRef = await addDoc(collection(db, "bio"), {
        userID: user.uid,
        description: bioDescription,
        updatedAt: new Date(),
      });

      // save for future reload
      localStorage.setItem("bioDocID", docRef.id);

      alert("Bio saved!");
      window.location.reload(); // reload to show updated bio
    } catch (error) {
      console.error("Error adding bio:", error);
      alert("Failed to save bio.");
    }
  } else {
    console.log("No user signed in");
  }
}

// --- Attach event listener ---
document.getElementById("submitBtn").addEventListener("click", writeBio);

// --- Load bio if it exists ---
const bioDocID = localStorage.getItem("bioDocID");
if (bioDocID) {
  displayBio(bioDocID);
}

showUserProfile();
