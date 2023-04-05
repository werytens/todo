import { manageTask } from "./manageTask.js";

export function createTodo(text, done, userID) {
    const taskList = document.querySelector(".task__list");

    let div = document.createElement('div');
    div.classList.add("task__element");
    div.dataset["done"] = done; 
    if (done == "done") { div.style.cssText = "color: var(--text-first); text-decoration: underline; transition: 1s;" }
    taskList.append(div);

    let taskText = document.createElement("p");
    taskText.classList.add("task__text");
    taskText.innerHTML = text;
    div.append(taskText);

    let taskButtons = document.createElement("div");
    taskButtons.classList.add("task__buttons");
    div.append(taskButtons);

    createButtons(taskButtons, userID);
}

function createButtons(taskButtons, userID) {
    let buttonDone = document.createElement("button");
    let buttonDelete = document.createElement("button");
    buttonDone.classList.add("done");
    buttonDelete.classList.add("delete");
    buttonDone.innerHTML = "Done";
    buttonDelete.innerHTML = "Delete";

    taskButtons.append(buttonDone);
    taskButtons.append(buttonDelete);

    manageTask(buttonDone, buttonDelete, userID);
}

