const saveButton = document.querySelector(".button__save--js");
const loadButton = document.querySelector(".button__load--js");
const myEditor = document.querySelector(".my_editor--js");

const saveFunction = e => {
	localStorage.setItem("message", myEditor.value);
};

const loadFunction = e => {
	myEditor.value = localStorage.getItem("message");
};

saveButton.addEventListener("click", saveFunction);
loadButton.addEventListener("click", loadFunction);
