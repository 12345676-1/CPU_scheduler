Project Components:
Task Class (task.h):

Represents a process with attributes such as ID, burst time, priority, and arrival time. This class encapsulates the essential data related to tasks that will be scheduled by the CPU Scheduler.
Scheduler Class (scheduler.h, scheduler.cpp):

Manages tasks and implements various CPU scheduling algorithms:
FCFS (First-Come, First-Served): Executes processes in the order they arrive.
SJN (Shortest Job Next): Executes processes with the shortest burst time first.
Priority Scheduling: Executes processes based on their priority.
Round-Robin (RR): Executes processes in a cyclic order with a fixed time quantum.
Multilevel Queue: Divides processes into high-priority and low-priority queues, executing them accordingly.
Main Function (main.cpp):

Contains the entry point of the program where the scheduler is instantiated and tested with a predefined set of tasks. This is where you would initialize the scheduler, add tasks, and execute scheduling algorithms to observe their behavior.
Frontend (frontend/index.html, style.css, script.js):

Provides a user-friendly web interface to interact with the CPU scheduler.
HTML (index.html): Defines the structure and input elements (e.g., forms) for users to input task parameters.
CSS (style.css): Styles the frontend interface for better usability and visual appeal.
JavaScript (script.js): Handles user interactions and communicates with the backend (via AJAX or WebSockets) to send task data, receive scheduling results, and update the UI dynamically.
