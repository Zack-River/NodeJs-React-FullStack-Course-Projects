// Search bar
const searchBar = document.querySelector(".search-bar");
const searchField= document.querySelector(".search");

searchField.addEventListener("click", () => {
    searchBar.classList.add("expanded");
});

document.addEventListener("click", (event) => {
    if (!(event.target === searchBar) && !(event.target === searchField)) {
        searchBar.classList.remove("expanded");
    }
});

document.querySelector(".search").addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const posts = document.querySelectorAll(".post");
    posts.forEach(post => {
        const title = post.querySelector(".title").textContent.toLocaleLowerCase();
        
        if(title.includes(searchValue)) {
            post.style.display = "flex";
        }
        else {
            post.style.display = "none";
        }
    });
});

// Create Button
const createButton = document.querySelector(".create-btn");

createButton.addEventListener("click" , () => {
    window.location.href = "/create";
});

// Close Button
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function() {
        const postRemove = this.closest(".post");
        if (postRemove) {
            postRemove.remove();
            if(!document.querySelector(".post")) {
                document.querySelector("main").innerHTML = `<h1 class="no-more">No More Posts To View</h1>`;
            }
        }
    });
});

// Back Button
document.querySelector(".back-btn").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "/";
});