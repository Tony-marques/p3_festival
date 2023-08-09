export class Menu {
   constructor() {
      this.#menuBtnHandler();
      this.#resize();
   }

   menuBtn = document.querySelector(".fa-solid.fa-bars");
   nav = document.querySelector("nav");
   links = document.querySelectorAll("nav ul li a");

   #menuBtnHandler() {
      this.menuBtn.addEventListener("click", () => {
         console.log("test");
         this.nav.classList.toggle("active");
         if (this.nav.classList.contains("active")) {
            this.menuBtn.classList.add("fa-x");
         } else {
            this.menuBtn.classList.remove("fa-x");
         }
         this.links.forEach((link) => {
            link.addEventListener("click", () => {
               this.nav.classList.remove("active");
               this.menuBtn.classList.remove("fa-x");
            });
         });
      });
   }

   #resize() {
      window.addEventListener("resize", () => {
         this.nav.classList.remove("active");
         this.menuBtn.classList.remove("fa-x");
      });
   }
}
