document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // MOBILE NAVIGATION
  // ================================

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector("#navLinks");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Change menu icon
      if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
      } else {
        menuBtn.textContent = "☰";
      }
    });

    // Close menu when a navigation link is clicked
    document.querySelectorAll("#navLinks a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
      });
    });
  }


  // ================================
  // CONTACT FORM
  // ================================

  const contactForm = document.querySelector("#contact form");

  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const name =
        contactForm.querySelector('input[type="text"]').value.trim();

      const email =
        contactForm.querySelector('input[type="email"]').value.trim();

      const phone =
        contactForm.querySelector('input[type="tel"]').value.trim();

      const guests =
        contactForm.querySelector("select").value;

      const message =
        contactForm.querySelector("textarea").value.trim();


      // Basic validation
      if (!name || !email || !phone || !guests || !message) {
        alert("Please fill in all the fields.");
        return;
      }


      // Email validation
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }


      // Success message
      alert(
        `Thank you, ${name}!\n\n` +
        `Your farmhouse enquiry has been received.\n` +
        `We will contact you shortly.`
      );


      // Clear form
      contactForm.reset();
    });
  }


  // ================================
  // SCROLL EFFECT FOR NAVBAR
  // ================================

  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
      navbar.style.background = "rgba(16, 39, 25, 0.98)";
      navbar.style.boxShadow =
        "0 5px 20px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.background =
        "rgba(25, 53, 35, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });


  // ================================
  // SCROLL REVEAL
  // ================================

  const revealElements = document.querySelectorAll(
    ".room-card, .amenity, .activity, .about-text, .about-image"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15
    }
  );


  revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });


  // ================================
  // GALLERY IMAGE CLICK
  // ================================

  const galleryImages =
    document.querySelectorAll(".gallery-grid img");

  galleryImages.forEach(image => {

    image.addEventListener("click", () => {

      const overlay = document.createElement("div");

      overlay.className = "image-overlay";

      overlay.innerHTML = `
        <div class="close-image">✕</div>
        <img src="${image.src}" alt="${image.alt}">
      `;

      document.body.appendChild(overlay);

      overlay.addEventListener("click", (event) => {

        if (
          event.target === overlay ||
          event.target.classList.contains("close-image")
        ) {
          overlay.remove();
        }

      });

    });

  });

});
