// 1) Certificate card click (unchanged)
document.querySelectorAll(".certificate-card").forEach((card) => {
  card.addEventListener("click", function () {
    window.open(this.dataset.link, "_blank");
  });
});

// 2) Typing effect code (unchanged)
const texts = [
  " Software Engineer",
  "n Analyst",
  " Passionate Coder",
  " Python Developer",
];
let textIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typingText.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 150);
  } else {
    setTimeout(eraseEffect, 1000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 100);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

window.onload = typeEffect;

// 3) Updated Intersection Observer for timeline and project items
// This observer continuously observes items and adds the "show" class
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = { threshold: 0.1 };

  // Observe timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // To hide again when out-of-view, uncomment next line:
      // else { entry.target.classList.remove("show"); }
    });
  }, observerOptions);
  timelineItems.forEach((item) => timelineObserver.observe(item));

  // Observe project items
  const projectItems = document.querySelectorAll(".project-item");
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else { entry.target.classList.remove("show"); }
    });
  }, observerOptions);
  projectItems.forEach((item) => projectObserver.observe(item));
});

// 4) Contact form submission (unchanged)
document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { "Accept": "application/json" }
  });
  if (response.ok) {
    document.getElementById("form-message").style.display = "block";
    form.reset();
  } else {
    alert("Something went wrong. Please try again!");
  }
});