// Object to store ToDo list and categories
const todoList = {
    categories: {},
    addTask: function(task, category) {
        if (!this.categories[category]) {
            this.categories[category] = [];
        }
        this.categories[category].push({ task: task, completed: false });
    },
    displayTasksByCategory: function() {
        for (const category in this.categories) {
            console.log(category + ":");
            this.categories[category].forEach((task, index) => {
                console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.task}`);
            });
            console.log("\n");
        }
    },
    markTaskAsCompleted: function(categoryIndex, taskIndex) {
        const category = Object.keys(this.categories)[categoryIndex];
        if (this.categories[category][taskIndex]) {
            this.categories[category][taskIndex].completed = true;
        } else {
            console.log("Invalid task index.");
        }
    },
    removeTask: function(categoryIndex, taskIndex) {
        const category = Object.keys(this.categories)[categoryIndex];
        if (this.categories[category][taskIndex]) {
            this.categories[category].splice(taskIndex, 1);
        } else {
            console.log("Invalid task index.");
        }
    }
};

// Add tasks to the ToDo list with categories
todoList.addTask("Do laundry", "Home");
todoList.addTask("Buy groceries", "Home");
todoList.addTask("Finish project", "Work");
todoList.addTask("Call mom", "Personal");

// Display tasks grouped by categories
todoList.displayTasksByCategory();

// Mark a task as completed
todoList.markTaskAsCompleted(0, 0); // Mark "Do laundry" in "Home" category as completed

// Display tasks after marking as completed
console.log("Tasks after marking as completed:");
todoList.displayTasksByCategory();

// Remove a task
todoList.removeTask(2, 0); // Remove "Finish project" in "Work" category

// Display tasks after removing a task
console.log("Tasks after removing a task:");
todoList.displayTasksByCategory();