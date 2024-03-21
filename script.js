let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  // Vyberte všechny odkazy s třídou "scroll-link"
  const scrollLinks = document.querySelectorAll(".scroll-link");

  // Přidání posluchačů pro každý odkaz
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Zabrání přesměrování na odkaz

      const targetId = this.getAttribute("href").substring(1); // Získání ID cílového elementu

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Plynulé skrolování na místo cílového elementu
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
