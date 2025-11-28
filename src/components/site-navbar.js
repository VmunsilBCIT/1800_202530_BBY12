// Import specific functions from the Firebase Auth SDK
// @ts-nocheck
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/src/firebaseConfig.js";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import settingsIcon from "/images/icon-settings.PNG";
import logoIcon from "/images/WaySync Logo.png";
import accountIcon from "/images/icon-account.PNG";

const db = getFirestore();

/* ---------------------------------------------------------
   Display image on NavBar
--------------------------------------------------------- */
function displayProfileImage(fullDataURL) {
  const navbar = document.querySelector("site-navbar");
  if (!navbar) return;
  const imgElement = document.getElementById("account");
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

class SiteNavbar extends HTMLElement {
  constructor() {
    super();
    this.renderNavbar();
    this.renderAuthControls();
  }

  renderNavbar() {
    this.innerHTML = `
      <div class="navbar">
        <div class="nav-left">
          <img
            id="setting"
            class="nav-icon"
            src="${settingsIcon}"
            alt="Settings"
          />
        </div>

        <div class="nav-center">
          <span id="mapway" class="nav-title">WaySync
          <img
            id="logo"
            class="nav-logo"
            src="${logoIcon}"
            alt="WaySync Logo"
          />
          </span>
          
        </div>

        <div class="nav-right">
          <img
            id="account"
            class="nav-profile"
            <img src="${accountIcon}"
            alt="Account"
          />
          <div id="authControls" class="nav-auth"></div>
        </div>
      </div>
    `;

    //Account button
    const accountImg = this.querySelector("#account");
    if (accountImg) {
      accountImg.addEventListener("click", () => {
        window.location.href = "/profile.html";
      });
    }

    //Setting button
    const settingImg = this.querySelector("#setting");
    if (settingImg) {
      settingImg.addEventListener("click", () => {
        window.location.href = "/settings.html";
      });
    }

    //Logo click
    const waySyncSpan = this.querySelector("#mapway");
    if (waySyncSpan) {
      waySyncSpan.addEventListener("click", () => {
        window.location.href = "/main-map.html";
      });
    }
  }

  renderAuthControls() {
    const authControls = this.querySelector("#authControls");
    if (!authControls) {
      console.warn("authControls container not found in navbar");
      return;
    }

    authControls.innerHTML = "";

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        authControls.innerHTML = `
          <a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>
        `;
      } else {
        authControls.innerHTML = "";
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);

document.addEventListener("DOMContentLoaded", () => {
  loadProfileImage();
  console.log("IMG in document:", document.getElementById("account"));
});
