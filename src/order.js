function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
      deliveryOrders.push(order);
    }
  return deliveryOrders;
}

function refundOrder(orderNumber, deliveryOrders) {
  for (let i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
      break;
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  var orderNames = "";

  for (var i = 0; i < deliveryOrders.length; i++) {
    if (i !== (deliveryOrders.length - 1)) {
    orderNames = orderNames + deliveryOrders[i].item + ", ";
    } else {
    orderNames = orderNames + deliveryOrders[i].item;
  }
}

  return orderNames;
}

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true;
    }
  }
  
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
