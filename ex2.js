// Class implementing the To-Do list
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.myTasks = []; // Initialize an empty task array
    }
    // Add a task and return the new count
    ToDo.prototype.addTask = function (task) {
        this.myTasks.push(task); // Add task to the array
        console.log(task + " has been added to my Tasks."); // Log addition
        return this.myTasks.length; // Return updated count
    };
    // List all tasks
    ToDo.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (element) {
            console.log("Item: " + element + " is on my Tasks list."); // Log each task
        });
    };
    // Delete a task if it exists
    ToDo.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task); // Find task index
        if (index > -1) { // If task exists
            this.myTasks.splice(index, 1); // Remove task
            console.log("Item: " + task + " has been removed from my Tasks list"); // Log removal
        }
        else {
            console.log("Item: " + task + " is NOT in my Tasks list"); // Log if not found
        }
        return this.myTasks.length; // Return updated count
    };
    return ToDo;
}());
// Create a ToDo instance and test methods
var myToDo = new ToDo();
myToDo.addTask("Work"); // Add a task
myToDo.listAllTasks(); // List tasks
myToDo.deleteTask("Test"); // Try to delete a task
