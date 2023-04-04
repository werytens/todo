import {savingItems} from "./savingItems.js"

export function manageBlock(array, activeUserId) {
    array.forEach(itemblock => itemblock.addEventListener("click", (event) => {
        if (event.target.classList.value == "delete__item") {
            itemblock.remove()

            readyClick(activeUserId);
        } else if (event.target.classList.value == "ready__item") {
            itemblock.style.cssText = "background: #F0E68C;"
            itemblock.title = "done";

            readyClick(activeUserId);
        }
    }))
}

function readyClick(activeUserId) {
    savingItems(activeUserId)
}
