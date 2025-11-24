import { auth } from "./firebaseConfig.js";
import { signOut } from "firebase/auth";

function safeAddListener(id, event, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, handler);
}

// Navigation buttons
safeAddListener("lang", "click", () => {
  window.location.href = "/language.html";
});

safeAddListener("block", "click", () => {
  window.location.href = "/blocked-users.html";
});

safeAddListener("share", "click", () => {
  window.location.href = "/sharelocation.html";
});

safeAddListener("customer", "click", () => {
  window.location.href = "/customer-service.html";
});

safeAddListener("sns", "click", () => {
  window.location.href = "/signinsecurity.html";
});

// Logout
safeAddListener("logoutBtn", "click", () => {
  try {
    signOut(auth);
    localStorage.removeItem("loggedIn");
    window.location.href = "/login.html";
  } catch (error) {
    console.error("Error signing out:", error);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  const saved = localStorage.getItem("selectedLocationShare");

  let found = false;

  options.forEach(option => {
    const value = option.dataset.value;

    if (saved && value === saved) {
      option.classList.add("selected");
      found = true;
    }

    option.addEventListener("click", () => {
      options.forEach(o => o.classList.remove("selected"));
      option.classList.add("selected");

      localStorage.setItem("selectedLocationShare", value);
    });
  });

  // Default if none saved
  if (!found && options.length > 0) {
    options[0].classList.add("selected");
    localStorage.setItem("selectedLocationShare", options[0].dataset.value);
  }
});
