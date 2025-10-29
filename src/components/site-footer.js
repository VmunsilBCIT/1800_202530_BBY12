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
  }
}

customElements.define("site-footer", SiteFooter);
