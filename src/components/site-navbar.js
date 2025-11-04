// // Import specific functions from the Firebase Auth SDK
// import { onAuthStateChanged } from "firebase/auth";

// import { auth } from "../firebaseConfig.js";

class SiteNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderNavbar();
    this.renderAuthControls();
  }

  renderNavbar() {
    this.innerHTML = `
      <!-- Navbar -->
      <div class="navigation">
        <img
          id="setting"
          src="../images/icon-settings.PNG"
          alt="Settings"
          width="30"
          height="30"
        />
        <span>WaySync</span>
        <img
          id="account"
          src="../images/icon-account.PNG"
          alt="Account"
          width="30"
          height="30"
        />
        <div id="authControls" style="display: inline-block; margin-left: 10px;"></div>
      </div>
    `;

    const settingImg = this.querySelector("#setting");
    if (settingImg) {
      settingImg.addEventListener("click", () => {
        window.location.href = "../settings.html";
      });
    }

    const accountImg = this.querySelector("#account");
    if (accountImg) {
      accountImg.addEventListener("click", () => {
        window.location.href = "../profile.html";
      });
    }
  }

  renderAuthControls() {
    const authControls = this.querySelector("#authControls");
    if (!authControls) return;

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        authControls.innerHTML = `
          <a class="btn btn-outline-light" id="loginBtn" href="../login.html" style="min-width: 80px;">Log in</a>
        `;
      } else {
        authControls.innerHTML = "";
      }
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
