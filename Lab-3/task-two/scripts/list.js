const BOX_CONTAINER = document.getElementById("delBox");
const BOX_TEMPLATE = document.getElementById("templateBox");
const BOX_BUTTON = document.getElementById("btn1");
const BOX_DELETE_IMG = document.getElementById("del1");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo-list") || '[]';

    return JSON.parse(value);
}

function setItems() {
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo-list", itemsJson);
}

function addItem() {
    const txt1 = document.getElementById('inputVal');
    items.unshift({
        inputValue: txt1.value,
        completed: false
    });

    setItems(items);
    refreshList();
}

function refreshList() {
    BOX_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = BOX_TEMPLATE.content.cloneNode(true);
        const completedInput = itemElement.querySelector('.complete-box');
        const textInput = itemElement.querySelector('.span-box');
        // const txt1 = document.getElementById('inputVal');

        completedInput.checked = item.completed;
        textInput.value = item.inputValue;
        // txt1.checked = item.inputValue;
        BOX_CONTAINER.append(itemElement);
    }
}

BOX_BUTTON.addEventListener('click', () => {
    addItem();
});



refreshList();

console.log(items);

// const txt1 = document.getElementById('inputVal');
// const btn1 = document.getElementById('btn1');
// const out1 = document.getElementById('output1');
//
// function fun1() {
//     out1.innerHTML = txt1.value;
// }
//
// btn1.addEventListener('click', fun1);
