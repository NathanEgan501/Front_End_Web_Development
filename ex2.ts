// Interface for a To-Do list
interface myToDoInterface { 
    myTasks: Array<string>; // Array to hold tasks
    addTask(task: string): number; // Method to add a task
    listAllTasks(): void; // Method to list all tasks
    deleteTask(task: string); // Method to delete a task
}

// Class implementing the To-Do list
class ToDo implements myToDoInterface { 
    myTasks: string[] = []; // Initialize an empty task array

    // Add a task and return the new count
    addTask(task: string): number { 
        this.myTasks.push(task); // Add task to the array
        console.log(task + " has been added to my Tasks."); // Log addition
        return this.myTasks.length; // Return updated count
    }

    // List all tasks
    listAllTasks(): void {
        this.myTasks.forEach((element) => { // Iterate through tasks
            console.log("Item: " + element + " is on my Tasks list."); // Log each task
        });
    }

    // Delete a task if it exists
    deleteTask(task: string) {
        let index: number = this.myTasks.indexOf(task); // Find task index
        if (index > -1) { // If task exists
            this.myTasks.splice(index, 1); // Remove task
            console.log("Item: " + task + " has been removed from my Tasks list"); // Log removal
        } else {
            console.log("Item: " + task + " is NOT in my Tasks list"); // Log if not found
        }
        return this.myTasks.length; // Return updated count
    }
}

// Create a ToDo instance and test methods
let myToDo = new ToDo();
myToDo.addTask("Work"); // Add a task
myToDo.listAllTasks(); // List tasks
myToDo.deleteTask("Test"); // Try to delete a task