console.log("Hello from the console!")
const content = document.querySelector("#content");

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
textPara.textContent = "This restaurant is honestly so fucking good. I mean, I honestly don't know what more to tell you. Established in 2015, we are desperately trying to survive the 'rona."
content.appendChild(textPara);