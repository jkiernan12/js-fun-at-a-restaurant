function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }

   return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  var restaurantMenuType = restaurant.menus[menuItem.type];
  var isNotOnMenu = true;
  if (! restaurantMenuType.includes(menuItem)) {
    restaurantMenuType.push(menuItem);
  }
}

function removeMenuItem(restaurant, menuItemName, menuItemType) {
  var restaurantItemType = restaurant.menus[menuItemType];

    for (var i = 0; i < restaurantItemType.length; i++) {
      if (restaurantItemType[i].name === menuItemName) {
        restaurantItemType.splice(i, 1);
        return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`
      }
    }

      return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  }

module.exports = {
   createRestaurant,
   addMenuItem,
   removeMenuItem
}
