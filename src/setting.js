import { auth } from "./firebaseConfig.js";
import { signOut } from "firebase/auth";

// Back arrow
document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
      window.location.href = "/login.html"; // 跳转到登录页
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
});
