import { manageBlock } from "./manageBlock.js"

export function pageCreating(event, itemname = forminput.value, itemdone = false, itemsfield, forminput, activeUserId) {
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
    
    
    forminput.value = ""


    firstbutton.innerHTML = "Удалить"
    secondbutton.innerHTML = "Готово"    
    
    let blocks = document.querySelectorAll(".itemblock");
    manageBlock(blocks, activeUserId);
}
