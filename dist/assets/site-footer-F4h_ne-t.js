import{a as c,o as s,d as a,c as r,k as i}from"./style-D4sG9sV-.js";const l="/assets/icon-settings-C4ULQy3E.PNG",d="/assets/WaySync%20Logo-BXZY_zr-.png",m="/assets/icon-account-CG91r5VL.PNG",f=c();function g(e){if(!document.querySelector("site-navbar"))return;const t=document.getElementById("account");t&&(t.src=e)}async function u(){s(i,async e=>{if(!e)return;const n=a(f,"userIDs",e.uid),t=await r(n);t.exists()&&t.data().profileImage&&g(t.data().profileImage)})}class h extends HTMLElement{constructor(){super(),this.renderNavbar(),this.renderAuthControls()}renderNavbar(){this.innerHTML=`
      <div class="navbar">
        <div class="nav-left">
          <img
            id="setting"
            class="nav-icon"
            src="${l}"
            alt="Settings"
          />
        </div>

        <div class="nav-center">
          <span id="mapway" class="nav-title">WaySync
          <img
            id="logo"
            class="nav-logo"
            src="${d}"
            alt="WaySync Logo"
          />
          </span>
          
        </div>

        <div class="nav-right">
          <img
            id="account"
            class="nav-profile"
            <img src="${m}"
            alt="Account"
          />
          <div id="authControls" class="nav-auth"></div>
        </div>
      </div>
    `;const n=this.querySelector("#account");n&&n.addEventListener("click",()=>{window.location.href="/profile.html"});const t=this.querySelector("#setting");t&&t.addEventListener("click",()=>{window.location.href="/settings.html"});const o=this.querySelector("#mapway");o&&o.addEventListener("click",()=>{window.location.href="/main-map.html"})}renderAuthControls(){const n=this.querySelector("#authControls");if(!n){console.warn("authControls container not found in navbar");return}n.innerHTML="",s(i,t=>{t?n.innerHTML="":n.innerHTML=`
          <a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>
        `})}}customElements.define("site-navbar",h);document.addEventListener("DOMContentLoaded",()=>{u(),console.log("IMG in document:",document.getElementById("account"))});const v="/assets/icon-back-CHpD9m6m.png",y="/assets/icon-home-Df-udd2K.PNG",L="/assets/icon-friends-CDQDqUdD.png";class b extends HTMLElement{connectedCallback(){this.innerHTML=`
         <footer>
    <div class="footer-nav">

      <div class="footer-left">
        <img id="back" class="footer-icon" src="${v}" alt="Back" />
      </div>

      <div class="footer-center">
        <img id="home" class="footer-icon" src="${y}" alt="Home" />
      </div>

      <div class="footer-right">
        <img id="friends" class="footer-icon" src="${L}" alt="Friends" />
      </div>

    </div>
  </footer>
`;const n=this.querySelector("#friends");n&&n.addEventListener("click",()=>{window.location.href="/friends.html"});const t=this.querySelector("#home");t&&t.addEventListener("click",()=>{window.location.href="/main.html"});const o=this.querySelector("#back");o&&o.addEventListener("click",()=>{history.back(-1)})}}customElements.define("site-footer",b);
