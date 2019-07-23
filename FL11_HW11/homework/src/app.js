let rootNode = document.getElementById('root');

let newTask = document.getElementById('taskValue');
let addTask = document.getElementById('addTask');
let maxItem = document.getElementById('maxItem');



function createElements (inputValue) {
    let taskBlock = document.createElement('div');
    let leftPart = document.createElement('div');
    let taskCheckbox = document.createElement('input');
    let addedTask = document.createElement('p');
    let editTask = document.createElement('button');
    let removeTask = document.createElement('button');
    let editIcon = document.createElement('i');
    let removeIcon = document.createElement('i');
    editIcon.className = 'material-icons';
    editIcon.innerHTML = 'edit';
    removeIcon.innerHTML = 'delete';
    removeIcon.className = 'material-icons';
    taskBlock.className = 'taskBlock';
    leftPart.className = 'leftPart';
    taskCheckbox.type = 'checkbox';
    addedTask.innerHTML = inputValue;
    editTask.appendChild(editIcon);
    removeTask.appendChild(removeIcon);
    leftPart.appendChild(taskCheckbox);
    leftPart.appendChild(addedTask);
    leftPart.appendChild(editTask);
    taskBlock.appendChild(leftPart);
    taskBlock.appendChild(removeTask);
    rootNode.appendChild(taskBlock);
}

function addNewTask () {
    
    let tasks = [];
    tasks.push(newTask.value);
    for (let i = 0; i < tasks.length; i++) {
        createElements(tasks[i]);
    }
}

addTask.addEventListener('click', addNewTask);
