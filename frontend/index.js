import { createTodo } from "./modules/createTask.js";
import { setTitle } from "./modules/setTitle.js";
import { savingInLocalStorage } from "./modules/savingItems.js";
import { clearItems } from "./modules/clearItems.js";

const allTaskButtons = document.querySelectorAll(".task__button");
const input = document.querySelector(".if__input");
const button = document.querySelector(".if__button");
const users = ["My", "Mom", "Dad"];

let userID;

const defaultTasks = [{
    name: "Create #TODO",
    done: "done"
}, {
    name: "Dont Create #TODO", done: "undone"
}];

document.addEventListener("DOMContentLoaded", () => {
    setTitle("My");

    button.disabled = true;
    userID = 0;

    if (JSON.parse(localStorage.getItem(userID)) == null) {
        defaultTasks.forEach(task => {createTodo(task.name, task.done, userID)});
    } else {
        JSON.parse(localStorage.getItem(userID)).forEach(item => {createTodo(item.name, item.done, userID)});
    }
});

button.addEventListener("click", (event) => {
    event.preventDefault()

    createTodo(input.value, "undone", userID);

    input.value = "";
    button.disabled = true;

    savingInLocalStorage(userID);
});

input.addEventListener("input", () => {button.disabled = false;});

allTaskButtons.forEach(button => button.addEventListener("click", () => {
    setTitle(button.innerHTML);
    clearItems();
    userID = users.indexOf(button.innerHTML);

    if (JSON.parse(localStorage.getItem(userID)) != null) {
        JSON.parse(localStorage.getItem(userID)).forEach(item => {createTodo(item.name, item.done, userID)});   
    }
}));

document.querySelector(".delete__completed").addEventListener("click", () => {
    if (confirm("Вы уверены?") == false) {return}
    document.querySelectorAll(".task__element").forEach(task => { task.dataset.done == "done" ? task.remove() : null; savingInLocalStorage(userID); })
})

document.querySelector(".delete__all").addEventListener("click", () => {
    if (confirm("Вы уверены?") == false) {return}
    document.querySelectorAll(".task__element").forEach(task => { task.remove(); savingInLocalStorage(userID); })
})
