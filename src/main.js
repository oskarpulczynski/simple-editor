const saveButton = document.querySelector(".button__save--js");
const loadButton = document.querySelector(".button__load--js");
const checkButton = document.querySelector(".button__check--js");
const myEditor = document.querySelector(".my_editor--js");

const saveFunction = e => {
	localStorage.setItem("message", myEditor.value);
};

const loadFunction = e => {
	myEditor.value = localStorage.getItem("message");
};

let color = "green";

const checkFunction = e => {
	const textLength = myEditor.value.length;
	myEditor.classList.remove("text-gray-900", "dark:text-white");
	myEditor.classList.remove(`text-${color}-600`, `dark:text-${color}-600`);
	if (textLength <= 10) {
		color = "red";
	} else if (textLength > 10 && textLength <= 20) {
		color = "blue";
	} else {
		color = "green";
	}

	myEditor.classList.add(`text-${color}-600`, `dark:text-${color}-600`);
};

saveButton.addEventListener("click", saveFunction);
loadButton.addEventListener("click", loadFunction);
checkButton.addEventListener("click", checkFunction);
