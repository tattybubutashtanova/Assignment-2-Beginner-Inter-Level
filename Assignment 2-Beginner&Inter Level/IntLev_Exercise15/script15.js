function addTask() {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);

    taskInput.value = ""; // Clear input field
}
