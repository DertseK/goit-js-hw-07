const allCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', allCategories.length);
allCategories.forEach(categoy => {
  console.log('Category: ', categoy.children[0].textContent);
  console.log('Elements: ', categoy.children[1].children.length);
});
