//created the ui here, will add the index.html to test if it works
const materialCSS = document.createElement("link");
materialCSS.rel = "stylesheet";
materialCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css";
document.head.appendChild(materialCSS);

const materialIcons = document.createElement("link");
materialIcons.rel = "stylesheet";
materialIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.appendChild(materialIcons);

//create main container
const appContainer = document.createElement("div");
appContainer.className = "container";
document.body.appendChild(appContainer);

//create card
const card = document.createElement("div");
card.className = "card";
appContainer.appendChild(card);

const cardContent = document.createElement("div");
cardContent.className = "card-content";
card.appendChild(cardContent);

//create heading
const heading = document.createElement("h3");
heading.className = "center-align";
heading.innerText = "TODO LIST";
cardContent.appendChild(heading);

//create form
const form = document.createElement("form");
form.id = "todo-form";
form.className = "row";
cardContent.appendChild(form);

//create task name input
const taskNameInput = document.createElement("input");
taskNameInput.type = "text";
taskNameInput.id = "task-name";
taskNameInput.placeholder = "Enter Task Name";
taskNameInput.className = "input-field col s12";
form.appendChild(taskNameInput);

//create task description input
const taskDescInput = document.createElement("textarea");
taskDescInput.id = "task-desc";
taskDescInput.placeholder = "Enter Task Description";
taskDescInput.className = "materialize-textarea input-field col s12";
form.appendChild(taskDescInput);

//create add button
const addButton = document.createElement("button");
addButton.type = "submit";
addButton.className = "btn waves-effect waves-light col s12";
addButton.innerHTML = '<i class="material-icons">add</i> Add Task';
form.appendChild(addButton);

//create task list
const taskList = document.createElement("ul");
taskList.className = "collection";
cardContent.appendChild(taskList);

//task array
let tasks = [];
let taskId = 1;

//task class
class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

//add a task
const addTask = (name, description) => {
    if (!name.trim() || !description.trim()) {
        alert("Task name and description cannot be empty.");
        return;
    }

    const newTask = new Task(taskId++, name, description);
    tasks.push(newTask);
    updateTaskList();
};

//function to update task list
const updateTaskList = () => {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerHTML = `
            <span><strong>${task.name}</strong> - ${task.description}</span>
            <a href="#" class="secondary-content" onclick="editTask(${task.id})"><i class="material-icons">edit</i></a>
            <a href="#" class="secondary-content" onclick="deleteTask(${task.id})"><i class="material-icons">delete</i></a>
        `;
        taskList.appendChild(li);
    });
};

//function to delete a task
const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    updateTaskList();
};

//function to edit a task
const editTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
        const newName = prompt("Edit Task Name:", task.name);
        const newDesc = prompt("Edit Task Description:", task.description);

        if (newName !== null && newDesc !== null && newName.trim() !== "" && newDesc.trim() !== "") {
            task.name = newName;
            task.description = newDesc;
            updateTaskList();
        }
    }
};

//for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(taskNameInput.value, taskDescInput.value);
    taskNameInput.value = ""; // Clear input
    taskDescInput.value = ""; // Clear input
});