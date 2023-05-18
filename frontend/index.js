import { createTodo } from "./modules/createTask.js";
import { setTitle } from "./modules/setTitle.js";
import { savingInLocalStorage } from "./modules/savingItems.js";
import { clearItems } from "./modules/clearItems.js";
import { addItemToServer, checkAllItems, deleteItem, changeItem } from "./modules/fetchFunctions.js";

const allTaskButtons = document.querySelectorAll(".task__button");
const input = document.querySelector(".if__input");
const button = document.querySelector(".if__button");
const users = ["My", "Mom", "Dad"];

let userID;

const defaultTasks = [{
    name: "Create #TODO",
    done: "done"
}, {
    name: "Dont Create #TODO", 
    done: "undone"
}];

document.addEventListener("DOMContentLoaded", async () => {
    setTitle("My");

    button.disabled = true;
    userID = 0;

    let allItems = await checkAllItems();

    if (allItems.length === 0) {
        defaultTasks.forEach(task => {createTodo(task.name, task.done, userID)});
    } else {   
        let newItemsArray = [];

        allItems.forEach((item, index) => {
            if (item.owner == "My") {
                newItemsArray[index] = {
                    name: item.name,
                    done: item.done
                }
            }
        })
        
        newItemsArray.forEach(item => {createTodo(item.name, item.done, userID)});
    }
});

button.addEventListener("click", async (event) => {
    event.preventDefault()

    createTodo(input.value, "undone", userID);

    await addItemToServer(input.value, users[userID], false);

    input.value = "";
    button.disabled = true;
});

input.addEventListener("input", () => {button.disabled = false;});

allTaskButtons.forEach(button => button.addEventListener("click", async() => {
    setTitle(button.innerHTML);
    clearItems();
    userID = users.indexOf(button.innerHTML);

    let allItems = await checkAllItems();

    if (allItems.length != 0) {
        let newItemsArray = [];

        allItems.forEach((item, index) => {
            if (item.owner == users[userID]) {
                newItemsArray[index] = {
                    name: item.name,
                    done: item.done
                }
            }
        })
        
        newItemsArray.forEach(item => {createTodo(item.name, item.done, userID)});
    }
}));

// document.querySelector(".delete__completed").addEventListener("click", () => {
    // deleteItem();

    // if (confirm("Вы уверены?") == false) {return}
    // document.querySelectorAll(".task__element").forEach(task => { task.dataset.done == "done" ? task.remove() : null; savingInLocalStorage(userID); })
// })

// document.querySelector(".delete__all").addEventListener("click", () => {
//     if (confirm("Вы уверены?") == false) {return}
//     document.querySelectorAll(".task__element").forEach(task => { task.remove(); savingInLocalStorage(userID); })
// })