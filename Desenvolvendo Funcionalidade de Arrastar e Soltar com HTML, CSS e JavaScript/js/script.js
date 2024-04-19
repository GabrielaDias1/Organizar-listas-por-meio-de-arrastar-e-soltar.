let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");


rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});


rightBox.addEventListener("drop", function (e) {
    e.preventDefault();
    let selected = document.querySelector('.list.dragging');
    if (selected !== null) {
        rightBox.appendChild(selected);
        selected.classList.remove('dragging');
    }
});


leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});


leftBox.addEventListener("drop", function (e) {
    e.preventDefault();
    let selected = document.querySelector('.list.dragging');
    if (selected !== null) {
        leftBox.appendChild(selected);
        selected.classList.remove('dragging');
    }
});

for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        e.target.classList.add('dragging');
    });
}
