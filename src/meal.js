function nameMenuItem(name) {
  var result = "Delicious " + name;
  return result;
}

function createMenuItem(itemName, itemPrice, itemType) {
  menuItem = {
    name: itemName,
    price: itemPrice,
    type: itemType
  }
  return menuItem;
}

function addIngredients(ingredient, arr) {
  if (! arr.includes(ingredient)) {
    arr.push(ingredient)
  }

  return arr;
}

function formatPrice(price) {
  return "$" + price;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipeObject = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }

  return recipeObject;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
