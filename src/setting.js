import { auth } from "./firebaseConfig.js";
import { signOut } from "firebase/auth";

// Back arrow
document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {
  try {
    signOut(auth)
        localStorage.removeItem("loggedIn");
        console.log("User signed out successfully.");
        window.location.href = "/login.html";
      }
  catch(error) {
    console.error("Error signing out:", error);
  };
});
