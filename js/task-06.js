const textInput = document.getElementById("validation-input");


textInput.addEventListener("blur", () => {
  textInput.value.length === +textInput.dataset.length
  ? textInput.className = 'valid'
  : textInput.className = 'invalid';
});