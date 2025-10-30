// Import specific functions from the Firebase Auth SDK
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
      <!-- Navbar: single source of truth -->
      <div class="navigation">
        <img
          id="setting"
          src="images/icon-settings.PNG"
          alt="Settings"
          width="100"
          height="100"
        />
        WaySync
        <img
          id="account"
          src="images/icon-account.PNG"
          alt="Account"
          width="100"
          height="100"
        />
        <div id="authControls" style="display: inline-block; margin-left: 20px;"></div>
      </div>
    `;

    const accountImg = this.querySelector("#account");
    if (accountImg) {
      accountImg.addEventListener("click", () => {
        window.location.href = "/profile.html";
      });
    }
  }

  renderAuthControls() {
    const authControls = this.querySelector("#authControls");
    if (!authControls) {
      console.warn("authControls container not found in navbar");
      return;
    }

    // Clear any existing content
    authControls.innerHTML = "";

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        authControls.innerHTML = `
          <a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>
        `;
      } else {
        // Authenticated users see no button
        authControls.innerHTML = "";
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
