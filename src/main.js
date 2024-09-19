const saveButton = document.querySelector(".button__save--js");
const loadButton = document.querySelector(".button__load--js");
const myEditor = document.querySelector(".my_editor--js");

console.log(saveButton);
console.log(loadButton);
console.log(myEditor);

let message = myEditor.value;

const saveFunction = e => {
	console.log("klik klik");
	console.log(myEditor.value);
	localStorage.setItem("message", myEditor.value);
};

const loadFunction = e => {
	console.log("klik klik");
	myEditor.value = localStorage.getItem("message");
};

saveButton.addEventListener("click", saveFunction);
loadButton.addEventListener("click", loadFunction);
