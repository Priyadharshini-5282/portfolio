// 🔹 Navbar Active Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

// 🔹 Header Background Change on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.backgroundColor = window.scrollY > 50 ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.8)";
});

//contact
// Initialize EmailJS
(function() {
  emailjs.init("mLlSR9m1ERLmATk2b"); // ✅ Your Public Key
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_t5jvz16", "template_q2pnv5r", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});


// 🔹 Play / Pause video on hover
const projectBoxes = document.querySelectorAll(".project-vidbox");
projectBoxes.forEach(box => {
  const video = box.querySelector("video");
  const hoverSign = box.querySelector(".hover-sign");

  box.addEventListener("mouseenter", () => {
    video.play();
    hoverSign.classList.add("active");
  });

  box.addEventListener("mouseleave", () => {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

