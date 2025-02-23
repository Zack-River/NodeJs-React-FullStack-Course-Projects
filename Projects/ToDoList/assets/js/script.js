document.querySelector(".submit").addEventListener("click", function () {
    let inputValue = document.querySelector("input").value;
    if (inputValue.trim() !== "") {
        let task = `
        <div class="task">
            <p class="task-content">${inputValue}</p>
            <i class="fa fa-remove delete-task"></i> <!-- Delete button -->
        </div>`;

        document.querySelector(".tasks").innerHTML += task;
        document.querySelector("input").value = "";
    }
});

document.querySelector(".tasks").addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-task")) {
        event.target.closest(".task").remove(); // Remove the task container
    }
});