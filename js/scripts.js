// Parallax Effect on Scroll
window.addEventListener("scroll", function () {
  const parallaxSections = document.querySelectorAll(".parallax");
  let scrollPosition = window.pageYOffset;

  parallaxSections.forEach((section) => {
    section.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });
});

// Smooth Scroll for Anchor Links
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
