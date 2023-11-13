const button = document.querySelector("button.change-color")
const spanColor = document.querySelector("span.color")

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor()
  spanColor.innerHTML = randomColor
  document.body.style.backgroundColor = randomColor
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
