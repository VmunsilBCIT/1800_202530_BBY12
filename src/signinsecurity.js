import { auth } from "./firebaseConfig.js";
import {
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from "firebase/auth";

// Show user email on page load
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user-email").textContent = user.email;
  }
});

// ------------ Change Email ---------------
document.getElementById("change-email-btn").addEventListener("click", async () => {
  const user = auth.currentUser;
  const newEmail = prompt("Enter new email:");
  if (!newEmail) return;

  try {
    await updateEmail(user, newEmail);
    alert("Email updated!");
    document.getElementById("user-email").textContent = newEmail;
  } catch (error) {
    if (error.code === "auth/requires-recent-login") {
      reAuth(() => updateEmail(user, newEmail));
    } else {
      alert(error.message);
    }
  }
});

// ------------ Change Password ---------------
document.getElementById("change-password-btn").addEventListener("click", async () => {
  const user = auth.currentUser;
  const newPass = prompt("Enter new password:");
  if (!newPass) return;

  try {
    await updatePassword(user, newPass);
    alert("Password updated!");
  } catch (error) {
    if (error.code === "auth/requires-recent-login") {
      reAuth(() => updatePassword(user, newPass));
    } else {
      alert(error.message);
    }
  }
});

// ------------ Re-authentication ---------------
async function reAuth(callback) {
  const user = auth.currentUser;
  const currentPassword = prompt("Enter your current password:");

  const cred = EmailAuthProvider.credential(user.email, currentPassword);

  try {
    await reauthenticateWithCredential(user, cred);
    await callback();
    alert("Success!");
  } catch (err) {
    alert("Re-authentication failed: " + err.message);
  }
}
