const textInput = document.querySelector("#validation-input")


textInput.addEventListener("input", (event) => {
  textInput.value.length === +textInput.dataset.length ? 
    textInput.className = 'valid'
  : textInput.className = 'invalid';
});