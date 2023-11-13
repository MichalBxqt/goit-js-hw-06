const categories = document.querySelector("#categories").children;

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  console.log(`Category: ${category.children[0].textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
}
