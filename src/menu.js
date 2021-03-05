

const ribs = {
    imgSrc: "https://jesspryles.com/wp-content/uploads/2019/08/al-pastor-ribs-49-1440x900.jpg",
    name: "Beef Ribs",
    description: "These ribs are made to order. Whether you enjoy them dry rubbed or slathered in sauce, you can order confidently knowing that your ribs will be served just how you like it.",
};

const maccinCheese = {
    imgSrc: "https://lh3.googleusercontent.com/xgae7lZDD34q-esxGQ_WaTxZ7W-yPg5GiajogIRre1DYyrWYXj5pDIkGjX8ts3daThYx7zLZbd8d3fubKvn9=w2048-h2048-c-rj-v1-e365",
    name: "Macaroni and Cheese",
    description: "Made with as many cheeses as our underpaid intern can order from the restaurant supply website, this macaroni is more cheese than pasta.",
};

const candiedYams = {
    imgSrc: "https://www.myforkinglife.com/wp-content/uploads/2019/10/candied-sweet-potatoes-1-copy.jpg",
    name: "Candied Yams",
    description: "Look, these are amazing. Just don't order a dessert after eating these."
}

const menu = [ribs, maccinCheese, candiedYams];


//create menu card function
function createFoodCard(item) {
    const card = document.createElement("div");
    card.classList.add("menuItem");

    const foodImage = document.createElement("img");
    foodImage.src = `${item.imgSrc}`;
    card.appendChild(foodImage);

    const foodName = document.createElement("h2");
    foodName.textContent = `${item.name}`;
    card.appendChild(foodName);

    const description = document.createElement("p");
    description.textContent = `${item.description}`;
    card.appendChild(description);

    document.querySelector("#content").appendChild(card);
}

function setUpMenu(){
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Menu"
    document.querySelector("#content").appendChild(pageTitle);

    menu.forEach((item) => {
        createFoodCard(item);
    })
};

export {setUpMenu}