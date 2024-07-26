// All Variables
let allLis = document.querySelectorAll("ul li");
let input = document.getElementById("input-box");
let list = document.getElementById("list-container");

// Operations
function addTask() {
    if (input.value === "") {
        alert("You Must Write Your Task’s Name")
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML = input.value;
        list.appendChild(newTask);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        newTask.appendChild(span);
    }
    input.value = "";
    saveData();
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let newTask = document.createElement("li");
        newTask.innerHTML = input.value;
        list.appendChild(newTask);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        newTask.appendChild(span);
        input.value = "";
    }
    saveData()
})

list.addEventListener("click", function (ele) {
    if (ele.target.tagName === "LI") {
        ele.target.classList.toggle("checked");
        saveData();
    } else if (ele.target.tagName === "SPAN") {
        ele.target.parentElement.remove();
    }
}, false)

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();