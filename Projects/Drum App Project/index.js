var btns = document.querySelectorAll(".drum");
for(let i = 0; i < btns.length; i++)
    btns[i].addEventListener("click", handleClick);

function handleClick(){
    alert("I Got Clicked!");
}