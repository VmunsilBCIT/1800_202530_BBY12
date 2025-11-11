class SiteFooter extends HTMLElement {
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
        const friendsImg = this.querySelector("#friends");
        if (friendsImg) {
          friendsImg.addEventListener("click", () => {
            window.location.href = "/friends.html";
          });
        }

        const homeImg = this.querySelector("#home");
        if (homeImg) {
          homeImg.addEventListener("click", () => {
            window.location.href = "/main.html";
          });
        }

        const backImg = this.querySelector("#back");
        if (backImg) {
          backImg.addEventListener("click", () => {
            history.back(-1);
          });
        }
  } 
}

customElements.define("site-footer", SiteFooter);
