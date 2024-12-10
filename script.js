
const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('taskbtn');
const taskList = document.getElementById('todolist');
const progress = document.getElementById('progress');



addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function updateProgress() {
    const totalTasks = taskList.children.length;
    const completedTasks = document.querySelectorAll('.task-text.completed').length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    progress.textContent = `Completed: ${percentage}%`;

    
}


function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue) {
      
        const listItem = document.createElement('li');
        listItem.classList.add('task'); 

       
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskValue;
        taskSpan.className = 'task-text';

       
        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed'); 
            updateProgress(); 
        });

      
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        deleteBtn.className = 'delete-btn';

        deleteBtn.addEventListener('click', () => {
            listItem.remove(); 
            updateProgress(); 
        });
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';

        
        editBtn.addEventListener('click', () => {
            const newTaskValue = prompt('Edit task:', taskSpan.textContent);
            if (newTaskValue !== null && newTaskValue.trim() !== '') {
                taskSpan.textContent = newTaskValue.trim();
            }
        });
        
        listItem.appendChild(taskSpan);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

       
        taskList.appendChild(listItem);

        taskInput.value = '';

 
        updateProgress();
    }


}

