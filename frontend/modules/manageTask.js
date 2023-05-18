import { savingInLocalStorage } from "./savingItems.js";

export function manageTask(buttonDone, buttonDelete, ID) {
    buttonDone.addEventListener("click", () => {
        buttonDone.parentElement.parentElement.style.cssText = "color: var(--text-first); text-decoration: underline; transition: 1s;"
        buttonDone.parentElement.parentElement.dataset["done"] = "done";

        savingInLocalStorage(ID);
    })
    buttonDelete.addEventListener("click", () => {
        confirm("Вы уверены?") == true ? buttonDelete.parentElement.parentElement.remove() : null
    })
}
