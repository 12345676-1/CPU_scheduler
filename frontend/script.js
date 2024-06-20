document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const burstTimeInput = document.getElementById('burst-time');
    const priorityInput = document.getElementById('priority');
    const arrivalTimeInput = document.getElementById('arrival-time');

    const burstTime = parseInt(burstTimeInput.value);
    const priority = parseInt(priorityInput.value);
    const arrivalTime = parseInt(arrivalTimeInput.value);

    // Basic validation
    if (isNaN(burstTime) || isNaN(priority) || isNaN(arrivalTime)) {
        alert('Please enter valid numbers for Burst Time, Priority, and Arrival Time.');
        return;
    }

    // Create task object
    const task = {
        burstTime: burstTime,
        priority: priority,
        arrivalTime: arrivalTime
    };

    // Add task to the scheduler and display the output
    addTaskToScheduler(task);

    // Clear form fields
    burstTimeInput.value = '';
    priorityInput.value = '';
    arrivalTimeInput.value = '';
});

function addTaskToScheduler(task) {
    // This function should send the task to the backend and receive scheduling results
    // For now, let's just display the task as a placeholder
    const outputDiv = document.getElementById('scheduler-output');
    const taskElement = document.createElement('div');
    taskElement.textContent = `Task - Burst Time: ${task.burstTime}, Priority: ${task.priority}, Arrival Time: ${task.arrivalTime}`;
    outputDiv.appendChild(taskElement);
}
