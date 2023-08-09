const menuBtn = document.querySelector(".fa-solid.fa-bars");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");
const themeBtn = document.querySelector("button.theme");
const themeBtnI = document.querySelector("button.theme i");

menuBtn.addEventListener("click", () => {
   nav.classList.toggle("active");
   if (nav.classList.contains("active")) {
      menuBtn.classList.add("fa-x");
   } else {
      menuBtn.classList.remove("fa-x");
   }
   links.forEach((link) => {
      link.addEventListener("click", () => {
         nav.classList.remove("active");
         menuBtn.classList.remove("fa-x");
      });
   });
});

window.addEventListener("resize", () => {
   nav.classList.remove("active");
});

themeBtn.addEventListener("click", () => {
   document.body.classList.toggle("dark");
   if (!document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "white");
      addMoon();
   } else if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      addSun()
   }
});

function checkTheme() {
   const colorTheme = localStorage.getItem("theme");

   if (colorTheme === "dark") {
      document.body.classList.add("dark");
      addSun()
   } else {
      addMoon();
   }
}

function addMoon() {
   themeBtnI.classList.remove("fa-sun");
   themeBtnI.classList.add("fa-moon");
}

function addSun() {
   themeBtnI.classList.remove("fa-moon");
   themeBtnI.classList.add("fa-sun");
}

checkTheme();

