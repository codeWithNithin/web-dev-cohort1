const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

const tasks = [];

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const data = {
    task: taskText,
    completed: false
  }

  tasks.push(data);
  updateTaskList();
  taskInput.value = '';
});

function updateTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((ele, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox';
    li.classList.add('task-item');
    li.innerHTML = `<input id="checkboxInput" type="checkbox" /> <span class="task-text"> ${ele.task} </span> <button id="deleteBtn" class="delete-button">Delete</button>`;
    taskList.appendChild(li);
  }); 

  totalTasks.textContent = tasks.length; 
}

checkboxInput.addEventListener('change', () => {
  tasks[index].completed = !tasks[index].completed;
});