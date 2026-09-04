/* =========================================================
   FAQ
========================================================= */

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {

  faq.addEventListener("toggle", () => {

    if (faq.open) {

      faqs.forEach((otherFaq) => {

        if (otherFaq !== faq) {
          otherFaq.removeAttribute("open");
        }

      });

    }

  });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

const links = document.querySelectorAll(
  'a[href^="#"]'
);

links.forEach((link) => {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});