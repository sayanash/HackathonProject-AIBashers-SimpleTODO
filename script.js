document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');
    const deleteAllButton = document.getElementById('deleteAllButton');

    // Function to add a task
    addTaskButton.addEventListener('click', function () {
        const taskValue = taskInput.value.trim();
        if (taskValue !== '') {
            addTaskToPending(taskValue);
            taskInput.value = ''; // Clear input field
        }
    });

    // Function to add task to pending list
    function addTaskToPending(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Add event listener for marking task as complete
        li.querySelector('.complete-btn').addEventListener('click', function () {
            moveToCompleted(li);
        });

        // Add event listener for deleting task
        li.querySelector('.delete-btn').addEventListener('click', function () {
            li.remove();
        });

        pendingTasks.appendChild(li);
    }

    // Function to move task to completed list
    function moveToCompleted(taskElement) {
        taskElement.classList.add('completed');
        taskElement.querySelector('.complete-btn').remove();

        completedTasks.appendChild(taskElement);
    }

    // Delete All Tasks
    deleteAllButton.addEventListener('click', function () {
        pendingTasks.innerHTML = '';  // Clear pending tasks
        completedTasks.innerHTML = '';  // Clear completed tasks
    });
});

