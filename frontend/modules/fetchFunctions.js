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