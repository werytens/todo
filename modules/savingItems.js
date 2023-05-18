export function savingInLocalStorage(ID) {
    const allItems = document.querySelectorAll(".task__element");

    let finnalyData = [];
    allItems.forEach(item => finnalyData.push({name: item.children[0].innerHTML, done: item.dataset.done}));

    localStorage.setItem(ID, JSON.stringify(finnalyData)); 
}
