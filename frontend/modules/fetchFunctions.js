export async function addItemToServer(_name, _owner, _done) {
    await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        body: JSON.stringify({
            name: _name,
            owner: _owner,
            done: _done
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export async function checkAllItems() {
    let allItems;
    await fetch("http://localhost:3000/api/todos").then(async (response) => {
        allItems = await response.json()
    })
    return allItems;
}

export async function deleteItem(itemText, ID) {
    const users = ["My", "Mom", "Dad"];

    let allItems;
    await fetch("http://localhost:3000/api/todos").then(async (response) => {
        allItems = await response.json()
    })

    allItems.forEach(async (item) => {
        if (item.name == itemText && item.owner == users[ID]) {
            await fetch(`http://localhost:3000/api/todos/${item.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
    })
}

export async function changeItem(itemText, ID) {
    const users = ["My", "Mom", "Dad"];

    let allItems;
    await fetch("http://localhost:3000/api/todos").then(async (response) => {
        allItems = await response.json()
    })

    allItems.forEach(async (item) => {
        if (item.name == itemText && item.owner == users[ID]) {
            await fetch(`http://localhost:3000/api/todos/${item.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    name: item.name,
                    owner: item.owner,
                    done: true
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
    })
}