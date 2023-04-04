export function clearingItems() {
    const itemblocksArray = document.querySelectorAll(".itemblock")
    itemblocksArray.forEach(element => element.remove())
}
