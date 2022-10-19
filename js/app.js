const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".container section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const scrolled = window.scrollY;
    if (scrolled >= sectionTop - section.scrollHeight / 3) {
      links.forEach((link) => {
        link.classList.contains(section.id)
          ? link.classList.add("active")
          : link.classList.remove("active");
      });
    }
  });
});
