import {setUpHomepage} from "./homepage";
import {setUpMenu} from "./menu";
import {setUpContact} from "./contact";

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
contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    setUpContact();
})

document.querySelector("#navBar").addEventListener("click", (e)=> {
    e.target.backgroundColor = "green";
})

setUpHomepage();
