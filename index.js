let frombutton = document.getElementById('frombtn')
let itemsfield = document.querySelector(".listelem")
let forminput = document.getElementById('frominp')

let names = [
    {name: "Максима", id: "0"},
    {name: "Мамы", id: "1"},
    {name: "Папы", id: "2"}
] 


let activeUserId;


document.querySelector(".test").addEventListener("click", () => {

    console.log(localStorage)
})


const worksButtons = document.querySelectorAll(".work__buttons")

worksButtons.forEach(button => button.addEventListener("click", (event) => {
    setTitle(button.innerHTML)

    activeUserId = changeUserID(button.innerHTML.slice(7))

    if (localStorage.length != 0) {
        let localDataUser = (JSON.parse(localStorage.getItem(activeUserId)))

        
        clearingItems()
        // console.log(localDataUser[0].name)
        pageCreating(event, localDataUser[0].name, localDataUser[0].done)
    }
}));

function clearingItems() {
    const itemblocksArray = document.querySelectorAll(".itemblock")
    itemblocksArray.forEach(element => element.remove())
}


document.addEventListener("DOMContentLoaded", (event) => {
    let defaultIndex;

    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage[index] != undefined) {
            defaultIndex = index;
        }
    }

    let localStorage_ = (JSON.parse(localStorage.getItem(defaultIndex)));
    console.log(localStorage_[0])
    pageCreating(event, localStorage_[0].name, localStorage_[0].done)
})


function setTitle(name) {
    document.querySelector(".title").innerHTML = name;
}

function changeUserID(buttonName) {
    for (let index = 0; index < names.length; index++) {
        if (buttonName == names[index].name) {
            return index
        }
    }  
}

frombutton.addEventListener("click", pageCreating);



function pageCreating(event, itemname = forminput.value, itemdone = false) {
    event.preventDefault();

    let itemblock = document.createElement("div");
    let pelement = document.createElement("p");
        

    pelement.innerHTML = itemname;

    if (itemdone != false) {
        itemblock.style.cssText = "background: #F0E68C;"
    }
    
    let buttons = document.createElement("div");
    let firstbutton = document.createElement("button");
    let secondbutton = document.createElement("button");
    
    itemsfield.append(itemblock)
    itemblock.append(pelement);
    itemblock.append(buttons);
    buttons.append(firstbutton);
    buttons.append(secondbutton);

    itemblock.classList.add("itemblock");
    pelement.classList.add("item");
    buttons.classList.add("buttons");
    firstbutton.classList.add("delete__item");
    secondbutton.classList.add("ready__item");
    
    
    firstbutton.innerHTML = "Удалить"
    secondbutton.innerHTML = "Готово"    
    
    let blocks = document.querySelectorAll(".itemblock");
    manageBlock(blocks);

    savingItems()
}


function savingItems() {
        let items = document.querySelectorAll(".item");
        let itemblocks = document.querySelectorAll(".itemblock");
        let objectArrays = [];
        let objStart;
        let done;

        for (let index = 0; index < itemblocks.length; index++) {
            itemblocks[index].title == "done" ? done = true : done = false;

            objStart = {
                name: items[index].innerHTML,
                done
            }
            objectArrays.push(objStart);
        }


        localStorage.setItem(activeUserId, JSON.stringify(objectArrays));
}


function manageBlock(array) {
    array.forEach(itemblock => itemblock.addEventListener("click", (event) => {
        if (event.target.classList.value == "delete__item") {
            itemblock.remove()
        } else if (event.target.classList.value == "ready__item") {
            itemblock.style.cssText = "background: #F0E68C;"
            itemblock.title = "done";

            readyClick();
        }
    }))
}

function readyClick() {
    savingItems()
}


// Очистка локального хранилища

document.getElementById("clear").addEventListener("click", () => {
    localStorage.clear()

    let clearBTN = document.getElementById("clear");

    clearBTN.innerHTML = "Очищено";
    console.log("Было очищено локальное хранилище")
    clearBTN.style.color = "red";

    setTimeout(() => {clearBTN.innerHTML = "Очистить"; clearBTN.style.color = "black";}, 3000);
})
