var button = document.getElementById("button");
var placement = document.getElementById("placement");
var tree = ""
var erase = document.getElementById("erase")

function buildTree() {
var height = document.getElementById("height").value;
var character = document.getElementById("character").value;
for (i = 0; i < height; i++) {
	// spacing
	for (j = 0; j < height-i-1; j++) {
		tree += "&nbsp;"
	}
	// character
	for (j = 0; j < i*2+1; j++) {
		tree += character;
	}
	tree += "<br>"
}
placement.innerHTML = tree

}

function eraser () {
	document.getElementById("height").value = ""
	document.getElementById("character").value = ""
	placement.innerHTML = ""
}


button.addEventListener("click", buildTree);
erase.addEventListener("click", eraser)