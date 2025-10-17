class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <!-- Footer: single source of truth -->
            <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <div class="container-fluid d-flex justify-content-around">
        <!-- Home Button -->
        <button class="btn btn-outline-light" onclick="history.back()">
          <img src="./images/icon-back.png" alt="Back" class="icon" />
        </button>

        <!-- Friends Button -->
        <a href="friends.html" class="btn btn-outline-light">
          <img src="./images/icon-friends.png" alt="Friends" class="icon" />
        </a>

        <!-- Back Button -->
        <a href="index.html" class="btn btn-outline-light">
          <img src="./images/icon-home.jpg" alt="Home" class="icon" />
        </a>
      </div>
    </nav>
        `;
  }
}

customElements.define("site-footer", SiteFooter);
