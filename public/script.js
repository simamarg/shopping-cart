// an array with all of our cart items
var cart = [];

var calculateTotal = function () {
  var total = 0;
  cart.forEach(function(item) {
    total += item.price;
  });
  return total;
};

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

var addItem = function (item) {
  if (cart.indexOf(item) === -1) { // only add item if it's not in the cart yet
    cart.push(item);
  }
}

var clearCart = function () {
  cart = [];
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
  updateCart();
});

// update the cart as soon as the page loads!
updateCart();
