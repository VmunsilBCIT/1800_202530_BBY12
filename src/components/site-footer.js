class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <!-- Footer: single source of truth -->
<<<<<<< HEAD
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
=======
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
        </div></footer
    >
>>>>>>> 55770273086af3cbdd9b52ac6539a8172cef83c2
        `;
  }
}

customElements.define("site-footer", SiteFooter);
