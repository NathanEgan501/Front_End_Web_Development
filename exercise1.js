var myTasks = [];
function addTask(task) {
    myTasks.push(task); //adds the task to the array
    console.log(task + " has been added to my Tasks."); //prints a message in the console
    return myTasks.length; //returns the number of elements in the array
}
function listAllTasks() {
    myTasks.forEach(function (element) {
        console.log("Item: " + element + " is on my Tasks list."); //prints each array in the console
    });
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index > -1) {
        myTasks.splice(index, 1);
        console.log("Item: " + task + " has been removed from my Tasks list");
    }
    else {
        console.log("Item: " + task + " is NOT in my Tasks list");
    }
    return myTasks.length;
}
addTask("Work");
addTask("Clean");
listAllTasks();
deleteTask("Stuff");
deleteTask("Clean");
