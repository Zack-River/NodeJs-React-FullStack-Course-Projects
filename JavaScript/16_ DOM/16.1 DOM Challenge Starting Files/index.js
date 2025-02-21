document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Zack River";
document.getElementsByTagName("li")[3].style.color = "Aqua";
document.getElementsByTagName("li")[1].style.color = "White";
document.getElementsByTagName("li")[1].style.backgroundColor = "Grey";
document.getElementsByTagName("li")[0].style.color = "Red";
document.getElementsByClassName("Mickey")[0].style.color = "Green";
document.querySelector("li a").style.color = "Red";
document.querySelector("li a").style.textDecoration = "none"
document.querySelector("li a").style.borderRadius = "25px";
document.querySelector("li a").style.border = "3px solid black";
document.querySelector("li a").style.fontFamily = "Tahoma";
document.querySelector("li a").style.backgroundColor = "Blue";
document.querySelector("li a").style.padding = "5px";

const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.marginBottom = "15px";
}

document.querySelectorAll("li").forEach(li => {
        li.style.fontSize = "50px";
});

// document.getElementsByClassName("btn")[0].style.backgroundColor = "Yellow";
// document.getElementsByClassName("btn")[0].style.borderRadius = "25px";
// document.getElementsByClassName("btn")[0].style.color = "Red";

Object.assign(document.getElementsByClassName("btn")[0].style, {
    backgroundColor: "Yellow",
    borderRadius: "25px",
    color: "Red"
});

document.querySelector(".btn").classList.toggle("huge");
document.querySelector(".btn").classList.toggle("huge");
document.querySelector("li a").setAttribute("href","https://www.bing.com");