function setUpContact(){
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Contact us"

    const para = document.createElement("p");
    para.textContent = "We can be reached at 555-123-4567 or at Larrys_restaurant@fakemail.com."

    const content = document.querySelector("#content");
    content.appendChild(pageTitle);
    content.appendChild(para);
}

export {setUpContact}