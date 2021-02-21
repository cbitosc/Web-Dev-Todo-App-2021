const todoText = [];

const addNewItem = () => {
	const inputReference = document.getElementById("todo-input");
	const newValue = inputReference.value;
	if (newValue === "") return;
	todoText.unshift(newValue);
	inputReference.value = "";
	displayList();
}

const displayList = () => {
	const listReference = document.getElementById("todo-list");
	let displayText = "";

	todoText.forEach((individualText, idx) => {
		let temp = `<li class="collection-item"><div>${individualText}<a href="#" class="secondary-content" onclick="deleteItem(${idx})"><i class="material-icons">delete</i></a></div></li>`
		displayText += temp;
	})

	listReference.innerHTML = displayText;
}

const deleteItem = (idx) => {
	todoText.splice(idx, 1);
	displayList();
}