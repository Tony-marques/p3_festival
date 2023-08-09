export class Theme {
   constructor() {
    this.#themeBtnHandler();
    this.#checkTheme();
  }
  
  themeBtn = document.querySelector("button.theme");
  themeBtnI = document.querySelector("button.theme i");

   #themeBtnHandler() {
      this.themeBtn.addEventListener("click", () => {
         document.body.classList.toggle("dark");
         if (!document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "white");
            this.#addMoon();
         } else if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            this.#addSun();
         }
      });
   }
   #checkTheme() {
      const colorTheme = localStorage.getItem("theme");

      if (colorTheme === "dark") {
         document.body.classList.add("dark");
         this.#addSun();
      } else {
         this.#addMoon();
      }
   }

   #addMoon() {
      this.themeBtnI.classList.remove("fa-sun");
      this.themeBtnI.classList.add("fa-moon");
   }

   #addSun() {
      this.themeBtnI.classList.remove("fa-moon");
      this.themeBtnI.classList.add("fa-sun");
   }

}
