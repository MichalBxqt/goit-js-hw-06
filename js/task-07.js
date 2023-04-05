const sizeControl = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

sizeControl.addEventListener("input", (e) => {
  
  textOutput.style.fontSize = e.currentTarget.value + "px";
});