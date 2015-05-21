// When Add button is pressed

var newTaskField = document.getElementById("new-task")
var addButton = document.getElementById("add");
var newTask;
var incompleteTasks = document.getElementById("incomplete-tasks");

function buildTask (a) {
	
	// Create list item

	var taskItem = document.createElement("li");

	// Create checkbox

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	// Create label

	var label = document.createElement("label");
	label.innerText = a;

	// Create checkbox

	var textField = document.createElement("input");
	textField.type = "text";

	
	// Create Edit button

	var editButton = document.createElement("button");
	editButton.classList.add("Edit");
	editButton.innerText = "Edit";

	// Create Delete button

	var deleteButton = document.createElement("button");
	deleteButton.classList.add("Delete");
	deleteButton.innerText = "Delete";

	// Append everything

	taskItem.appendChild(checkbox);
	taskItem.appendChild(label);
	taskItem.appendChild(textField);
	taskItem.appendChild(editButton);
	taskItem.appendChild(deleteButton);
	

	return taskItem;
};

addButton.onclick = function () {
	var newTask = newTaskField.value;

	// Add item to ToDo
	incompleteTasks.appendChild(buildTask(newTask));

	// Clear Add Item field
	newTaskField.value = "";


};




// 	Value is grabbed from the input
// 	Item is added to the TODO list
// 	Edit and Delete buttons are added