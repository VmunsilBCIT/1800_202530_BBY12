class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="navigation">
          <img
            id="back"
            src="../images/icon-back.PNG"
            alt="Back"
            width="30"
            height="30"
          />
          <img
            id="home"
            src="../images/icon-home.PNG"
            alt="Home"
            width="30"
            height="30"
          />
          <img
            id="friends"
            src="../images/icon-friends.PNG"
            alt="Friends"
            width="30"
            height="30"
          />
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);

