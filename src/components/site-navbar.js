// Import specific functions from the Firebase Auth SDK
// @ts-nocheck
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/src/firebaseConfig.js";

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
            src="images/icon-settings.PNG"
            alt="Settings"
          />
        </div>

        <div class="nav-center">
          <span id="mapway" class="nav-title">WaySync</span>
          <img
            id="logo"
            class="nav-logo"
            src="images/WaySync Logo.png"
            alt="WaySync Logo"
          />
        </div>

        <div class="nav-right">
          <img
            id="account"
            class="nav-icon"
            src="images/icon-account.PNG"
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
