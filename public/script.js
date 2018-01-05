// an array with all of our cart items
var cart = [];

var findItemIndexByName = function (name) {
  return cart.findIndex(function (element) {
    return element.name === name;
  });
}

var addItem = function (item) {
  if (findItemIndexByName(item.name) > -1) {
    item.quantity++;
  } else {
    item.quantity = 1;
    cart.push(item);
  }
}

var clearCart = function () {
  cart = [];
}

var calculateTotal = function () {
  var total = 0;
  cart.forEach(function(item) {
    total += (item.price * item.quantity);
  });
  return total;
};

var removeItem = function (name) {
  var i = findItemIndexByName(name);
  if (cart[i].quantity > 1) {
    cart[i].quantity--;
  } else {
    cart.splice(i, 1);
  }
}

var updateCart = function () {
  $('.cart-list').empty();

  // adding items to the cart using Handlebars only if the cart array is not empty
  if (cart.length) {
    var cartData = {cart: cart};
    var source = $('#item-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(cartData);
    $('.cart-list').append(newHTML);
  }

  $('.total').text(calculateTotal());
}

// events
$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.container').on('click', '.add-to-cart', function () {
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
  updateCart();
});

$('.container').on('click', '.remove-item', function () {
  var itemName = $(this).closest('p').data().name;
  removeItem(itemName);
  updateCart();
});

// update the cart as soon as the page loads!
updateCart();