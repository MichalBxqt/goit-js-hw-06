const decButton = document.querySelector("#counter").children[0]
const value = document.querySelector("#counter").children[1]
const incButton = document.querySelector("#counter").children[2]
let counterValue = 0


decButton.addEventListener(`click`, (_event) =>{
  counterValue -= 1
  value.textContent = counterValue
})

incButton.addEventListener(`click`, (_event) =>{
  counterValue += 1
  value.textContent = counterValue
})