import { auth } from "./firebaseConfig.js";
import { signOut } from "firebase/auth";

// Language bar
document.getElementById("lang").addEventListener("click", () => {
  window.location.href = "/language.html";
});

// Blacklist bar
document.getElementById("block").addEventListener("click", () => {
  window.location.href = "/blocked-users.html";
});

// Do not distrub bar
document.getElementById("dnd").addEventListener("click", () => {
  window.location.href = "/donotdisturb.html";
});

// User customer service bar
document.getElementById("customer").addEventListener("click", () => {
  window.location.href = "/customer-service.html";
});

// Change of Email and Password bar
document.getElementById("sns").addEventListener("click", () => {
  window.location.href = "/signinsecurity.html";
});

// Logout
safeAddListener("logoutBtn", "click", () => {
  try {
    signOut(auth)
        localStorage.removeItem("loggedIn");
        console.log("User signed out successfully.");
        window.location.href = "login.html";
      }
  catch(error) {
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
