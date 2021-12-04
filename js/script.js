const rangeEl = document.querySelector("#character-count");
const currentEl = document.querySelector(".current-count");

// Update character counter
rangeEl.addEventListener("click", (event) => {
	event.preventDefault();
	const value = rangeEl.value;
	currentEl.innerHTML = value;
});
