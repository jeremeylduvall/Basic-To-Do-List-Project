// When Add button is pressed

var newTaskField = document.getElementById("new-task")
var addButton = document.getElementById("add");
var listItem = document.getElementsByTagName("li");
var newTask;
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");

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

	if (newTaskField.value === "") {
		alert("You have to enter a task!");
	} else {
		// Add item to ToDo
		incompleteTaskHolder.appendChild(buildTask(newTask));

		// Clear Add Item field
		newTaskField.value = "";
	}
};

// Fix Edit button

function editTask() {
	listItem = this.parentNode;

	if (listItem.className === "editMode") {
		listItem.classList.remove("editMode");
	} else {
		listItem.classList.add("editMode");
		this.innerText = "Save";
	}
}

for (var i = 0; i < listItem.length; i++ ) {

	var editButton = listItem[i].childNodes[3];

	editButton.addEventListener("click", editTask);

}



// Fix Delete button

// Fix checkbox
	// When checkbox is checked
		// Item is crossed off
		// Item is added to Completed list
	// When unchecked
		// Item is not crossed off
		// Item is added to TODO










































