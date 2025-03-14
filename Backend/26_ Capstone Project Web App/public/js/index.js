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

document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function() {
        const postRemove = this.closest(".post"); // Find the parent .post div
        if (postRemove) {
            postRemove.remove();
            if(!document.querySelector(".post")) {
                document.querySelector("main").innerHTML = `<h1 class="no-more">No More Posts To View</h1>`;
            }
        }
    });
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