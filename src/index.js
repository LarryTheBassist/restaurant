import {setUpHomepage} from "./homepage";
import {setUpMenu} from "./menu";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    setUpHomepage();
})

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", ()=> {
    content.innerHTML = "";
    setUpMenu();
})

const contactButton = document.querySelector("#contact");


setUpHomepage(content);
