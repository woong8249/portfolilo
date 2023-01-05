const body = document.querySelector("body");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const skill__btn = document.querySelectorAll(".skill__btn");
const navbar__meun__item = document.querySelectorAll(".navbar__menu__item");
const contact_me_button = document.querySelector(".home__btn");

contact_me_button.addEventListener("click", e => {
  contact.scrollIntoView({ behavior: "smooth" });
});

// It help to know user clickPoint
// window.addEventListener("scroll", () => {
//   for (const key in skill__btn) {
//     if (isNaN(key)) continue;
//     if (skill__btn[key].className === "skill__btn") {
//       skill__btn[key].classList.replace("skill__btn", "active");
//     }
//     setTimeout(() => {
//       skill__btn[key].classList.replace("active", "skill__btn");
//     }, "400");
//   }
// });

// It make to go selected point (Navbar)
for (const key in navbar__meun__item) {
  if (isNaN(key)) continue;
  navbar__meun__item[key].addEventListener("click", e => {
    const text = e.target.textContent;

    let element;
    if (text === "Home") {
      element = home;
    } else if (text === "About") {
      element = about;
    } else if (text === "Skills") {
      element = skills;
    } else if (text === "Projects") {
      element = projects;
    } else if (text === "Contact") {
      element = contact;
    }
    element.scrollIntoView({ behavior: "smooth" });
  });
}

const skill_item = document.querySelectorAll(".skill__item");

const open = e => {
  const { target } = e;
  let result;
  if (target.className.includes("skill__item")) {
    result = target;
    console.log(1);
  } else if (target.parentElement.className.includes("skill__item")) {
    result = target.parentElement;
    console.log(2);
  } else if (
    target.parentElement.parentElement.className.includes("skill__item")
  ) {
    result = target.parentElement.parentElement;
    console.log(3);
  }
  if (result.classList.length === 1) {
    result.className += " active2";
  } else result.className = "skill__item";
};

for (const key in skill_item) {
  if (isNaN(key)) continue;
  skill_item[key].addEventListener("click", open);
}
