import { Menu } from "./Menu.js";
import { Theme } from "./Theme.js";

const theme = new Theme();
const menu = new Menu();

function setYearFooter() {
   const date = new Date();
   const newYear = date.getFullYear();

   if (newYear === 2023) {
      year.textContent = newYear;
   } else {
      year.textContent = `2023 - ${newYear}`;
   }
}

setYearFooter();
