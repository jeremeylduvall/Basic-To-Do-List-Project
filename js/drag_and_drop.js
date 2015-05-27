
// Canvas drag image
var canvas = document.createElementNS("http://www.w3.org/1999/xhtml","canvas");

// Create dragging event. Pass in list item HTML

function dragging (HTML) {
	event.dataTransfer.setData("HTML", HTML);
	event.dataTransfer.setDragImage(canvas, 0, 0);
	event.dataTransfer.effectAllowed = "move";
};

// Create drop event. Log out data to check

function dropping () {
  	var listItem = event.dataTransfer.getData("HTML");
  	event.target.parentNode.insertAdjacentHTML('beforeBegin', listItem);
  	event.preventDefault();
};