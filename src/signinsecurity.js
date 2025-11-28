import { auth } from "./firebaseConfig.js";
import {
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

//reset modal bar
function reset() {
  document.getElementById("currentPassword").value = "";
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
  document.getElementById("ChangeEmail").value = "";
}

// Show modal bar(for change password)
function openPasswordModal() {
  document.getElementById("modalOverlay").style.display = "flex";
  document.getElementById("changePasswordContainer").style.display = "flex";
  document.getElementById("EmailContainer").style.display = "none";
  reset();
}

// Show modal bar(for change email)
function openEmailModal() {
  document.getElementById("modalOverlay").style.display = "flex";
  document.getElementById("EmailContainer").style.display = "flex";
  document.getElementById("changePasswordContainer").style.display = "none";
  reset();
}

// Hide modal bar
function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}

//close bar when click cancel button
document.getElementById("cancelPasswordBtn").addEventListener("click", () => {
  closeModal();
});
document.getElementById("Cancel").addEventListener("click", () => {
  closeModal();
});

// Show user email on page load
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user-email").textContent = user.email;
  }
});

// ------------ Change Email ---------------
document
  .getElementById("change-email-btn")
  .addEventListener("click", async () => {
    openEmailModal();
  });

document.getElementById("Confirm").addEventListener("click", async () => {
  try {
    const user = auth.currentUser;
    const newEmail = document.getElementById("ChangeEmail").value;
    if (!newEmail) return;

    await updateEmail(user, newEmail);
    alert("Email updated!");
    closeModal();
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
//open bar
document.getElementById("change-password-btn").addEventListener("click", () => {
  openPasswordModal();
});

//check password when click confirm button
document
  .getElementById("confirmPasswordBtn")
  .addEventListener("click", async () => {
    const user = auth.currentUser;

    const currentPass = document.getElementById("currentPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    if (!currentPass || !newPass || !confirmPass) {
      alert("All fields are required.");
      return;
    }

    if (newPass !== confirmPass) {
      alert("New passwords do not match.");
      return;
    }

    try {
      // Step 1: Verify current password
      const credential = EmailAuthProvider.credential(user.email, currentPass);
      await reauthenticateWithCredential(user, credential);

      // Step 2: Update password
      await updatePassword(user, newPass);

      alert("Password updated successfully!");
      closeModal();
      reset();
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Current password is incorrect.");
      } else if (err.code === "auth/weak-password") {
        alert("Password must be at least 6 characters.");
      } else {
        alert("Error: " + err.message);
      }
    }
  });
