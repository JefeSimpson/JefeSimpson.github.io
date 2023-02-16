const BOX_CONTAINER = document.getElementById('delBox');
const BOX_BTN = document.getElementById('btn1');
const BOX_INPUT = document.getElementById('inputVal');

function addToItems() {
    const txt = BOX_INPUT.value;
    if (txt === "") {
        alert("This is not valid input, please try again.");
        return;
    }
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const checkBox = document.createElement("input");
    const spanBox = document.createElement("span");
    const delBox = document.createElement("img");
    const delBox1 = document.createElement("span");
    // delBox.src("")

    // divs
    div.classList.add("del");
    div1.classList.add("second-block");
    div2.classList.add("third-block");

    // input -> div1
    checkBox.classList.add("complete-box");
    checkBox.type = "checkbox";

    // span -> div1
    spanBox.classList.add('span-box');
    spanBox.textContent = txt;

    // span - red garbage -> div2
    delBox1.classList.add("del1");
    delBox1.setAttribute("id", "del");
    delBox1.innerHTML = `&#129511;`;

    div1.appendChild(checkBox);
    div1.appendChild(spanBox);
    div2.appendChild(delBox1);
    div.appendChild(div1);
    div.appendChild(div2);
    BOX_CONTAINER.append(div);

    BOX_INPUT.value = "";
}

function deleteItem(item) {
    item.parentElement.parentElement.remove();
}

BOX_BTN.addEventListener('click', addToItems);
BOX_INPUT.addEventListener('keypress', function (item) {
    if (item.key === "Enter") addToItems();
});
BOX_CONTAINER.addEventListener('click', function (item) {
    if (item.target.className === "del1")   deleteItem(item.target);
});