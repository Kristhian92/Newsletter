let container = document.querySelector('.container');
let parentDiv = document.getElementsByClassName("subscription");
let inpt = document.getElementById("subscribe");
let btn = document.querySelector("button");
let required = document.createElement("h4");
let txt = document.createTextNode("Valid email required");
required.appendChild(txt);

let vr = '';

inpt.onchange = function (e) {
    vr = e.target.value;
    if (vr === "" || vr.indexOf("@") === -1 || vr.slice(-4) !== ".com") {
        document.body.appendChild(required);
        inpt.style.cssText =
            "background-color: rgba(255, 0, 0, 0.05); border-color: rgba(255, 0, 0, 0.6); color: rgba(255, 0, 0, 0.6)";
        required.style.cssText =
            "position : absolute; right: 51%; top: 89%; font-family: Arial, Helvetica, sans-serif; color: rgba(255, 0, 0, 0.6)";
    } else {
        required.style.display = "none";
        inpt.style.cssText =
            "background-color: white; border-color: rgb(166, 166, 166); color: rgb(166, 166, 166)";
        btn.style.cssText =
            "background-image: linear-gradient(to right, #DE3163, #FF6347); box-shadow: 0 10px 20px rgba(255, 0, 0, 0.6)";
    }
};

let newContainer = document.createElement("div");
newContainer.className = "container-2";
let image = document.createElement("img");
image.src = "./assets/images/icon-success.svg";
image.alt = "icon";
let title = document.createElement("h1");
let titleContent = document.createTextNode("Thanks for subscribing!");
title.appendChild(titleContent);
let description = document.createElement("p");
let descContent =
    document.createTextNode(`A confirmation email has been sent to ${inpt.value}: 
Please open it and click the button inside to confirm your subscription`);
description.appendChild(descContent);
let button = document.createElement("button");
let buttonContent = document.createTextNode("Dismiss message");
button.appendChild(buttonContent);

newContainer.style.cssText =
    "display: none; background-color: white; font-family: Arial, Helvetica, sans-serif; width: 25%; padding: 2rem; border-radius: 2rem; margin: 6rem auto ";
title.style.cssText =
    "font-size: 2.5rem; font-weight: 750; color: rgb(29, 29, 57)";
button.style.cssText =
    "background-color: rgb(29, 29, 57); border: none; color: white; padding: 1.2rem; width: 99%; margin-top: 1rem; border-radius: 0.5rem; cursor: pointer; ";

newContainer.appendChild(image);
newContainer.appendChild(title);
newContainer.appendChild(description);
newContainer.appendChild(button);
document.body.appendChild(newContainer);

btn.onclick = function () {
    if (vr !== "" && vr.indexOf("@") !== -1 && vr.slice(-4) === ".com") {
        container.style.display = 'none';
        newContainer.style.display = 'block';
    }
}
button.onmouseover = function () {
    button.style.backgroundImage = 'linear-gradient(to right, #DE3163, #FF6347)';
    button.style.boxShadow = '0 10px 20px rgba(255, 0, 0, 0.6)';
}
button.onclick = function () {
    newContainer.style.display = 'none';
}