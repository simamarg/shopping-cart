var addItemToScreen = function(name, price, url) {
  var source = $('#add-item-template').html();
  var template = Handlebars.compile(source);  
  var newHTML = template({name: name, price: price, url: url});
  $('.row:last-child').append(newHTML);
};

$('.add-item-save').on('click', function() {
  var name = $('#add-item-name').val();
  var price = $('#add-item-price').val();
  var url = $('#add-item-image').val();
  addItemToScreen(name, price, url);
  $('#add-item-name').val('');
  $('#add-item-price').val('');
  $('#add-item-image').val('');
});