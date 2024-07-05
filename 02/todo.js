function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let taskText = taskInput.value;

    if (taskText === "") {
        alert("empty")
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = taskText

    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    delButton.className = "delButton";
    delButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(delButton);
    taskList.appendChild(listItem);
    taskInput.value = ""
}