import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --------------------
// Load Messages
// --------------------
async function loadMessages() {
  const user = auth.currentUser;
  if (!user) return console.error("User not logged in");

  // Grab current user's document
  const userDocRef = doc(db, "userIDs", user.uid);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    console.log("No messages found");
    return;
  }

  const notifications = userDoc.data().notifications || [];

  // Group messages by sender UID
  const grouped = {};
  const usernameCache = {}; // cache to avoid multiple Firestore reads

  for (const n of notifications) {
    const senderUID = n.from;

    // Fetch sender's username if not cached
    if (!usernameCache[senderUID]) {
      try {
        const senderDoc = await getDoc(doc(db, "userIDs", senderUID));
        usernameCache[senderUID] = senderDoc.exists()
          ? senderDoc.data().username || senderUID
          : senderUID;
      } catch {
        usernameCache[senderUID] = senderUID;
      }
    }

    if (!grouped[senderUID]) grouped[senderUID] = [];
    grouped[senderUID].push({ ...n, username: usernameCache[senderUID] });
  }

  buildTabs(grouped);
  autoSelectFirstTab();
}

// --------------------
// Build Tabs
// --------------------
function buildTabs(grouped) {
  const tabs = document.getElementById("sender-tabs");
  const display = document.getElementById("messages-display");

  tabs.innerHTML = "";
  display.innerHTML = "";

  Object.keys(grouped).forEach((senderUID) => {
    const username = grouped[senderUID][0].username || senderUID;

    const tab = document.createElement("button");
    tab.classList.add("sender-tab");
    tab.textContent = username;

    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".sender-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      display.innerHTML = "";

      grouped[senderUID].forEach((msg) => {
        const box = document.createElement("div");
        box.classList.add("message-box");
        box.innerHTML = `
    <p class="message-text">${msg.message}</p>
    <span class="message-time">${
      msg.timestamp.toDate
        ? msg.timestamp.toDate().toLocaleString()
        : new Date(msg.timestamp).toLocaleString()
    }</span>
  `;
        display.appendChild(box);
      });
    });

    tabs.appendChild(tab);
  });
}

// --------------------
// Auto select first tab
// --------------------
function autoSelectFirstTab() {
  const firstTab = document.querySelector(".sender-tab");
  if (firstTab) firstTab.click();
}

// --------------------
// Listen for auth changes
// --------------------
auth.onAuthStateChanged(() => loadMessages());
