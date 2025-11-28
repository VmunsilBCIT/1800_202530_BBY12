import { a, o, d as c, c as r, k as s } from "./style-D4sG9sV-.js";
const l = a();
function d(n) {
  if (!document.querySelector("site-navbar")) return;
  const e = document.getElementById("account");
  e && (e.src = n);
}
async function m() {
  o(s, async (n) => {
    if (!n) return;
    const t = c(l, "userIDs", n.uid),
      e = await r(t);
    e.exists() && e.data().profileImage && d(e.data().profileImage);
  });
}
class f extends HTMLElement {
  constructor() {
    super(), this.renderNavbar(), this.renderAuthControls();
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
          <span id="mapway" class="nav-title">WaySync
          <img
            id="logo"
            class="nav-logo"
            src="images/WaySync Logo.png"
            alt="WaySync Logo"
          />
          </span>
          
        </div>

        <div class="nav-right">
          <img
            id="account"
            class="nav-profile"
            src="images/icon-account.PNG"
            alt="Account"
          />
          <div id="authControls" class="nav-auth"></div>
        </div>
      </div>
    `;
    const t = this.querySelector("#account");
    t &&
      t.addEventListener("click", () => {
        window.location.href = "/profile.html";
      });
    const e = this.querySelector("#setting");
    e &&
      e.addEventListener("click", () => {
        window.location.href = "/settings.html";
      });
    const i = this.querySelector("#mapway");
    i &&
      i.addEventListener("click", () => {
        window.location.href = "/main-map.html";
      });
  }
  renderAuthControls() {
    const t = this.querySelector("#authControls");
    if (!t) {
      console.warn("authControls container not found in navbar");
      return;
    }
    (t.innerHTML = ""),
      o(s, (e) => {
        e
          ? (t.innerHTML = "")
          : (t.innerHTML = `
          <a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>
        `);
      });
  }
}
customElements.define("site-navbar", f);
document.addEventListener("DOMContentLoaded", () => {
  m(), console.log("IMG in document:", document.getElementById("account"));
});
class g extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <footer>
    <div class="footer-nav">

      <div class="footer-left">
        <img id="back" class="footer-icon" src="images/icon-back.PNG" alt="Back" />
      </div>

      <div class="footer-center">
        <img id="home" class="footer-icon" src="images/icon-home.PNG" alt="Home" />
      </div>

      <div class="footer-right">
        <img id="friends" class="footer-icon" src="images/icon-friends.PNG" alt="Friends" />
      </div>

    </div>
  </footer>
`;
    const t = this.querySelector("#friends");
    t &&
      t.addEventListener("click", () => {
        window.location.href = "/friends.html";
      });
    const e = this.querySelector("#home");
    e &&
      e.addEventListener("click", () => {
        window.location.href = "/main.html";
      });
    const i = this.querySelector("#back");
    i &&
      i.addEventListener("click", () => {
        history.back(-1);
      });
  }
}
customElements.define("site-footer", g);
