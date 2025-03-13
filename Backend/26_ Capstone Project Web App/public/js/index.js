const searchBar = document.querySelector(".search-bar");
const searchField= document.querySelector(".search");
const createButton = document.querySelector(".create-btn");

searchField.addEventListener("click", () => {
    searchBar.classList.add("expanded");
});

document.addEventListener("click", (event) => {
    if (!(event.target === searchBar) && !(event.target === searchField)) {
        searchBar.classList.remove("expanded");
    }
});

createButton.addEventListener("click" , () => {
    window.location.href = "/create";
});