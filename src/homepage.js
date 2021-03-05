const content = document.querySelector("#content");

function setUpHomepage (){
    //create header
    const headline = document.createElement("h1");
    headline.textContent = "Larry's Restaurant";
    content.appendChild(headline);

    //set up image
    const bbqImage = document.createElement("img");
    bbqImage.src = "https://jesspryles.com/wp-content/uploads/2019/08/al-pastor-ribs-49-1440x900.jpg"
    content.appendChild(bbqImage);

    //set up text
    const textPara = document.createElement("p");
    textPara.textContent = "This restaurant is honestly so good. I mean, I honestly don't know what more to tell you. Established in 2015."
    content.appendChild(textPara);
}

export {setUpHomepage};