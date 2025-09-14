// Frontend logic for the Todo application

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Fetch existing tasks on page load
  fetchTasks();

  // Handle new task submission
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = taskInput.value.trim();
    if (!description) return;
    addTask(description);
    taskInput.value = '';
  });

  async function fetchTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    renderTasks(tasks);
  }

  function renderTasks(tasks) {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.classList.add('task-item');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => {
        updateTask(task.id, {
          done: checkbox.checked,
          description: task.description
        });
      });
      const span = document.createElement('span');
      span.textContent = task.description;
      if (task.done) {
        span.classList.add('completed');
      }
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTask(task.id));
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }

  async function addTask(description) {
    await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description })
    });
    fetchTasks();
  }

  async function updateTask(id, data) {
    await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    fetchTasks();
  }

  async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, {
      method: 'DELETE'
    });
    fetchTasks();
  }
});
