const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // Lower threshold so very tall sections (like Experience on mobile)
    // still become visible when user scrolls into them.
    threshold: 0.05,
    rootMargin: "0px 0px -8% 0px",
  }
);

sections.forEach((section) => observer.observe(section));
