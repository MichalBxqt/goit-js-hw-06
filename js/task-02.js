const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients")

const ingredientsMap = ingredients.map((ingredient) => {
 
const ingredientLi = document.createElement("li")
ingredientLi.textContent = ingredient
ingredientLi.classList.add("item")
return ingredientLi
});

ingredientsUl.append(...ingredientsMap)

