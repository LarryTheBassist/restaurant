(()=>{"use strict";const e=document.querySelector("#content");function t(){const t=document.createElement("h1");t.textContent="Larry's Restaurant",e.appendChild(t);const n=document.createElement("img");n.src="https://jesspryles.com/wp-content/uploads/2019/08/al-pastor-ribs-49-1440x900.jpg",e.appendChild(n);const o=document.createElement("p");o.textContent="This restaurant is honestly so good. I mean, I honestly don't know what more to tell you. Established in 2015.",e.appendChild(o)}const n=[{imgSrc:"https://jesspryles.com/wp-content/uploads/2019/08/al-pastor-ribs-49-1440x900.jpg",name:"Beef Ribs",description:"These ribs are made to order. Whether you enjoy them dry rubbed or slathered in sauce, you can order confidently knowing that your ribs will be served just how you like it."},{imgSrc:"https://lh3.googleusercontent.com/xgae7lZDD34q-esxGQ_WaTxZ7W-yPg5GiajogIRre1DYyrWYXj5pDIkGjX8ts3daThYx7zLZbd8d3fubKvn9=w2048-h2048-c-rj-v1-e365",name:"Macaroni and Cheese",description:"Made with as many cheeses as our underpaid intern can order from the restaurant supply website, this macaroni is more cheese than pasta."},{imgSrc:"https://www.myforkinglife.com/wp-content/uploads/2019/10/candied-sweet-potatoes-1-copy.jpg",name:"Candied Yams",description:"Look, these are amazing. Just don't order a dessert after eating these."}];const o=document.querySelector("#content");document.querySelector("#home").addEventListener("click",(()=>{o.innerHTML="",t()})),document.querySelector("#menu").addEventListener("click",(()=>{o.innerHTML="",function(){const e=document.createElement("h1");e.textContent="Menu",document.querySelector("#content").appendChild(e),n.forEach((e=>{!function(e){const t=document.createElement("div");t.classList.add("menuItem");const n=document.createElement("img");n.src=`${e.imgSrc}`,t.appendChild(n);const o=document.createElement("h2");o.textContent=`${e.name}`,t.appendChild(o);const c=document.createElement("p");c.textContent=`${e.description}`,t.appendChild(c),document.querySelector("#content").appendChild(t)}(e)}))}()})),document.querySelector("#contact").addEventListener("click",(()=>{o.innerHTML="",function(){const e=document.createElement("h1");e.textContent="Contact us";const t=document.createElement("p");t.textContent="We can be reached at 555-123-4567 or at Larrys_restaurant@fakemail.com.";const n=document.querySelector("#content");n.appendChild(e),n.appendChild(t)}()})),document.querySelector("#navBar").addEventListener("click",(e=>{e.target.backgroundColor="green"})),t()})();