const slider = document.querySelector("input#font-size-control")
const text = document.querySelector("span#text")



slider.addEventListener('input', function() {
  text.style.fontSize = this.value + 'px';
}, false);