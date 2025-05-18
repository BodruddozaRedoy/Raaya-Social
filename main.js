const menuBar = document.getElementById("menu-bar");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const navLinks = document.getElementById("nav-links");
const menuButtons = document.querySelector("#menu .buttons");

// show and hide menu
menuBar.addEventListener("click", () => {
  menu.classList.add("show-menu");
  document.body.style.overflow = "hidden";
  navLinks.style.display = "flex";
  menuButtons.style.display = "flex";
});

// hide menu
closeBtn.addEventListener("click", () => {
  menu.classList.remove("show-menu");
  document.body.style.overflow = "";
});

// close menu when outside clicked
document.addEventListener("click", (e) => {
  if (
    !menu.contains(e.target) &&
    !menuBar.contains(e.target) &&
    menu.classList.contains("show-menu")
  ) {
    menu.classList.remove("show-menu");
    document.body.style.overflow = "";
  }
});

// accordion show and hide functionality
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    // console.log(accordion)
  const header = accordion.querySelector(".accordion-header");
  const plusBtn = accordion.querySelector(".accordion-plus-btn");
  const minusBtn = accordion.querySelector(".accordion-minus-btn");
  const content = accordion.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    // close all other accordions
    accordions.forEach((otherAccordion) => {
        // console.log(otherAccordion, accordion)
      if (otherAccordion !== accordion) {
        const otherContent = otherAccordion.querySelector(".accordion-content");
        const otherPlusBtn = otherAccordion.querySelector(".accordion-plus-btn");
        const otherMinusBtn = otherAccordion.querySelector(".accordion-minus-btn");

        otherContent.classList.add("accordion-hide");
        otherPlusBtn.classList.remove("accordion-hide");
        otherMinusBtn.classList.add("accordion-hide");
      }
    });

    // Toggle current accordion
    content.classList.toggle("accordion-hide");
    plusBtn.classList.toggle("accordion-hide");
    minusBtn.classList.toggle("accordion-hide");
  });
});

