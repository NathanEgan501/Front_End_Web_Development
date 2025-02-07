let myTasks: Array<string>=[];

function addTask(task:string):number{ //addTask function
    myTasks.push(task); //adds the task to the array
    console.log(task+" has been added to my Tasks."); //prints a message in the console
    return myTasks.length; //returns the number of elements in the array
}

function listAllTasks():void{ //listAllTasks function
    myTasks.forEach(function(element){ //iterates over all the tasks in the array
        console.log("Item: "+element+" is on my Tasks list."); //prints each array in the console
    });
}

function deleteTask(task:string){ //deleteTask function
    let index:number = myTasks.indexOf(task); // find the index of the task in the myTasks array
    if (index > -1){ //checks if the task exists in the array
        myTasks.splice(index,1); //removes the task from the array
        console.log("Item: "+task+" has been removed from my Tasks list"); //prints message that the task has been removed
    }
    else{
        console.log("Item: "+task+" is NOT in my Tasks list"); //prints message if the task isnt on the list
    }
    return myTasks.length; //returns the number of elements in the array after the deletion

}

addTask("Work");
addTask("Clean");
listAllTasks();
deleteTask("Stuff");
deleteTask("Clean");