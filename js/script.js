```javascript id="ehf-script"
/* ===================================
   EHF PREMIUM SCRIPT.JS
   PART 3
   INTERACTIONS + ANIMATIONS + WHATSAPP
=================================== */

/* ==========================
PRELOADER
========================== */

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    preloader.style.transition = "0.6s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 700);
  }
});

/* ==========================
AOS INIT
========================== */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100
    });
  }
});

/* ==========================
SWIPER SLIDER
========================== */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      speed: 900
    });
  }
});

/* ==========================
SMOOTH SCROLL NAV LINKS
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

/* ==========================
FAQ TOGGLE (SAFE CUSTOM)
========================== */

const faqButtons = document.querySelectorAll(".accordion-button");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      window.scrollBy({
        top: 1,
        behavior: "smooth"
      });
    }, 300);
  });
});

/* ==========================
REVEAL ON SCROLL (BACKUP EFFECT)
========================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==========================
WHATSAPP FORM SUBMIT
========================== */

const form = document.getElementById("whatsappForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "8801000000000"; // replace your number

    const text =
      `Name: ${name}%0A` +
      `Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  });
}

/* ==========================
NAVBAR ACTIVE SCROLL EFFECT
========================== */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ==========================
ACTIVE NAV LINK HIGHLIGHT
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});

/* ==========================
BUTTON RIPPLE EFFECT (OPTIONAL UX TOUCH)
========================== */

document.querySelectorAll("button, .btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    const rect = this.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";

    ripple.classList.add("ripple-effect");
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
```
