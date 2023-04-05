const categoriesNumber = document.querySelectorAll('.item')
console.log(`Nummber of categories: ${categoriesNumber.length}`)

for (const category of categoriesNumber){
  console.log(category.children[0].textContent)
  console.log(category.children[1].children.length)
}
