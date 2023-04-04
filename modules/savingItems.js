export function savingItems(activeUserId) {
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
