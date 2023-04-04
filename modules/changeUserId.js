export function changeUserID(buttonName, names) {
    for (let index = 0; index < names.length; index++) {
        if (buttonName == names[index].name) {
            return index
        }
    }  
}
