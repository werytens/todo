import { clearingItems } from './modules/clearingItems.js';
import { pageCreating } from "./modules/pageCreating.js"
import { setTitle } from "./modules/setTitle.js"
import { changeUserID } from "./modules/changeUserId.js"
import { savingItems } from "./modules/savingItems.js"

let frombutton = document.getElementById('frombtn')
let itemsfield = document.querySelector(".listelem")
let forminput = document.getElementById('frominp')

let names = [
    {name: "Максима", id: "0"},
    {name: "Мамы", id: "1"},
    {name: "Папы", id: "2"}
] 


let activeUserId = 0;

let worksButtons = document.querySelectorAll(".work__buttons")

worksButtons.forEach(button => button.addEventListener("click", (event) => {
    setTitle(button.innerHTML)
    clearingItems()

    activeUserId = changeUserID(button.innerHTML.slice(7), names)

    let localData = JSON.parse(localStorage.getItem(activeUserId))

    if (localData == null) {
        console.log("У выбранного пользователя нет данных")
        return
    }

    for (let index = 0; index < localData.length; index++) {
        pageCreating(event, localData[index].name, localData[index].done, itemsfield, forminput, activeUserId)
    }
}));


document.addEventListener("DOMContentLoaded", (event) => {
    if (JSON.parse(localStorage.getItem(0)) == null) {
        let startItems = {
            name: "Доделать TODO",
            done: true
        }

        setTitle("Задачи Максима")
        pageCreating(event, startItems.name, startItems.done, itemsfield, forminput, activeUserId)
    } else {
        setTitle("Задачи Максима")
        let localData = JSON.parse(localStorage.getItem(0))

        for (let index = 0; index < localData.length; index++) {
            pageCreating(event, localData[index].name, localData[index].done, itemsfield, forminput, activeUserId)
        }
    }
})



frombutton.addEventListener("click", (event) => {
    event.preventDefault()

    pageCreating(event, forminput.value, false, itemsfield, forminput, activeUserId)
});

frombutton.addEventListener("click", () => {
    setTimeout(() => { savingItems(activeUserId) }, 100);
})


// Очистка локального хранилища

document.getElementById("clear").addEventListener("click", () => {
    localStorage.clear()

    let clearBTN = document.getElementById("clear");

    clearBTN.innerHTML = "Очищено";
    console.log("Было очищено локальное хранилище")
    clearBTN.style.color = "red";

    setTimeout(() => {clearBTN.innerHTML = "Очистить"; clearBTN.style.color = "black";}, 3000);
})
