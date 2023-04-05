let counterValue = 0;
const value = document.getElementById("value")
const decrement = document.querySelector(`[data-action="decrement"]`)
const increment = document.querySelector(`[data-action="increment"]`)

const onClickDec = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const onClickInc = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrement.addEventListener('click',onClickDec);
increment.addEventListener('click',onClickInc);
