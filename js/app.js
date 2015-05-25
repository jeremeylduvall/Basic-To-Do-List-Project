var newTaskField = document.getElementById("new-task")
var addButton = document.getElementById("add");
var listItem = document.getElementsByTagName("li");
var newTask;
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");
var noTasks = '<div id="emptyToDo">Nothing to do today!</div>';
var noCompleted = '<div id="emptyToDo">You haven\'t done anything!</div>';

function hideEmptyToDo () {

	if (incompleteTaskHolder.getElementsByTagName("li")[0] === undefined ) {
		incompleteTaskHolder.innerHTML = noTasks;
	}
};

function hideEmptyCompleted () {
	if (completedTasksHolder.getElementsByTagName("li")[0] === undefined ) {
		completedTasksHolder.innerHTML = noCompleted;
	}
};

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
	editButton.classList.add("edit");
	editButton.innerText = "Edit";

	// Create Delete button
	var deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
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
		
		if (incompleteTaskHolder.innerHTML === noTasks ) {
			// If it's the first item, replace innerHTML
			incompleteTaskHolder.innerHTML = "";
			incompleteTaskHolder.appendChild(buildTask(newTask));
		} else {
			// Add item to ToDo
			incompleteTaskHolder.appendChild(buildTask(newTask));
		}
		// Clear Add Item field
		newTaskField.value = "";
	};

	bindEvents();
};


// Fix Edit button

function editTask() {
	
	editedTask = this.parentNode;
	label = editedTask.getElementsByTagName('label');
	textField = editedTask.querySelectorAll('input[type=text]');

	if (editedTask.className === "editMode") {
		if (textField[0].value === "") {
			// Don't allow blank tasks
			alert ("You have to enter a task");
		} else {
			// Set label to newly entered value
			label[0].innerText = textField[0].value;

			// Remove the class editMode
			editedTask.classList.remove("editMode");

			// Set button back to "Edit"
			this.innerText = "Edit";
		};
	} else {
		// Add class editMode
		editedTask.classList.add("editMode");

		// Set button to "Save"
		this.innerText = "Save";

		// Set text field to previous label value
		textField[0].value = label[0].innerText;

	}
};

// Fix Delete button

function deleteTask() {
	
	deletedTask = this.parentNode;

	if (deletedTask.parentNode === incompleteTaskHolder) {
		incompleteTaskHolder.removeChild(deletedTask);
	} else if (deletedTask.parentNode === completedTasksHolder) {
		completedTasksHolder.removeChild(deletedTask);
	}

	// Check for empties
	hideEmptyToDo();

	// See if Completed container is empty
	hideEmptyCompleted();
};

// Fix checkbox

function checkTask() {
	
	checkedTask = this.parentNode;

	if (this.checked) {
	
		if (completedTasksHolder.innerHTML === noCompleted) {

			// Set innerHTML to blank and append checked task
			completedTasksHolder.innerHTML = "";
			completedTasksHolder.appendChild(checkedTask);
		} else {

			// Item is added to Completed list
			// Item is crossed off
			incompleteTaskHolder.removeChild(checkedTask);
			completedTasksHolder.appendChild(checkedTask);
		};

		hideEmptyToDo();
	} else {

		// Item is not crossed off
		// Item is added to TODO
		completedTasksHolder.removeChild(checkedTask);
		if (incompleteTaskHolder.innerHTML === noTasks){
			incompleteTaskHolder.innerHTML = "";
			incompleteTaskHolder.appendChild(checkedTask);
		} else {
			incompleteTaskHolder.appendChild(checkedTask);
		};

		hideEmptyCompleted();
	}


};

// Loop over list items and bind events to click

function bindEvents () {

	for (var i = 0; i < listItem.length; i++ ) {

		var editButton = listItem[i].childNodes[3];
		var deleteButton = listItem[i].childNodes[4];
		var checkbox = listItem[i].firstChild;

		editButton.addEventListener("click", editTask);
		deleteButton.addEventListener("click", deleteTask);
		checkbox.addEventListener("click", checkTask);
	}
};

// Call binding event

bindEvents();


