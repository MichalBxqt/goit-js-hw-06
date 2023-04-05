const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
outputEl.textContent = inputEl.value ? inputEl.value : "Anonymous";
});