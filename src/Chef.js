class Chef {
  constructor(chefName, chefRestaurant) {
    this.name = chefName;
    this.restaurant = chefRestaurant;
  }
  greetCustomer(customerName, isMorning) {
    if (isMorning) {
      return `Good morning, ${customerName}!`
    } else {
      return `Hello, ${customerName}!`
    }
  }
  checkForFood(foodItem) {
    var currentMenuArray = this.restaurant.menus[foodItem.type];
    for (var i = 0; i < currentMenuArray.length; i++) {
      if (currentMenuArray[i] === foodItem) {
        return `Yes, we're serving ${foodItem.name} today!`
      }
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}



module.exports = Chef;
