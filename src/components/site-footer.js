class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <!-- Footer: single source of truth -->
            <footer>
        <div class="navigation">
          <img
            id="back"
            src="images/icon-back.PNG"
            alt="Back"
            width="100"
            height="100"
          />

          <img
            id="home"
            src="images/icon-home.PNG"
            alt="Home"
            width="100"
            height="100"
          />

          <img
            id="friends"
            src="images/icon-friends.PNG"
            alt="Friends"
            width="100"
            height="100"
          />
        </div></footer>
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
