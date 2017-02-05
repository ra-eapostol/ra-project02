webpackHotUpdate(0,{

/***/ 2:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ShoppingCart = function () {\n\tfunction ShoppingCart() {\n\t\t_classCallCheck(this, ShoppingCart);\n\n\t\t/* When a new instance of ShoppingCart is created, it receives one\n     property, an empty cart object.*/\n\t\tthis.cart = {};\n\t\tthis.quantityTotal;\n\t\tthis.total;\n\t}\n\n\t_createClass(ShoppingCart, [{\n\t\tkey: 'passData',\n\t\tvalue: function passData(theApp) {\n\t\t\ttheApp.buildCartView();\n\t\t\tvar buttons = document.getElementsByTagName('button');\n\n\t\t\t$('.addToCartButton').on('click', function () {\n\t\t\t\tvar sku = this.dataset.sku;\n\n\t\t\t\tvar checkSku = function checkSku(product) {\n\t\t\t\t\treturn product.sku == sku;\n\t\t\t\t};\n\n\t\t\t\tvar product = theApp.products.filter(checkSku);\n\n\t\t\t\tconsole.log(sku);\n\t\t\t\tif (sku != undefined || sku != null) {\n\t\t\t\t\ttheApp.ShoppingCart.addToCart(sku, product[0].name, product[0].image, product[0].regularPrice);\n\t\t\t\t\tdocument.cookie = JSON.stringify(theApp.ShoppingCart.cart);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t$('.quickView-addToCart').on('click', function () {\n\t\t\t\t// console.log('clicked');\n\t\t\t\t$('.overlay').fadeToggle();\n\t\t\t\t$('.quickView').fadeToggle();\n\t\t\t});\n\n\t\t\t$('.clearCartButton').on('click', function () {\n\t\t\t\tconsole.log('clearing');\n\t\t\t\t// console.log(this);\n\t\t\t\ttheApp.ShoppingCart.clearCart();\n\t\t\t});\n\n\t\t\t// $('.stripe-button-el').on('click', function() {\n\t\t\t// \t$('#cart-charge-total').attr(\"value\", `${theApp.ShoppingCart.total}`);\n\t\t\t// })\n\n\t\t\t$('.checkoutButton').on('click', function () {\n\t\t\t\t$('#cart-box').fadeToggle('fast', function () {\n\t\t\t\t\t$('#cart-form').fadeToggle();\n\t\t\t\t\t$('#cart-charge-total').attr(\"value\", '' + theApp.ShoppingCart.total);\n\t\t\t\t});\n\t\t\t\t$('.cart-buttons').fadeToggle();\n\t\t\t\t$('.cart-form-back-button').fadeToggle();\n\t\t\t});\n\n\t\t\t$('.formBackButton').on('click', function () {\n\t\t\t\t$('.cart-form-back-button').fadeToggle('fast', function () {\n\t\t\t\t\t$('.cart-buttons').fadeToggle();\n\t\t\t\t});\n\t\t\t\t$('#cart-form').fadeToggle('fast', function () {\n\t\t\t\t\t$('#cart-box').fadeToggle();\n\t\t\t\t});\n\t\t\t});\n\n\t\t\t$('.quickViewButton').on('click', function () {\n\t\t\t\tconsole.log('quickView clicked');\n\t\t\t\tvar sku = this.dataset.sku;\n\t\t\t\tvar checkSku = function checkSku(product) {\n\t\t\t\t\treturn product.sku == sku;\n\t\t\t\t};\n\n\t\t\t\tvar product = theApp.products.filter(checkSku);\n\n\t\t\t\tvar quickView = $('.quickView');\n\n\t\t\t\tquickView.children('.flex-row').children('.prod-image').css({\n\t\t\t\t\t\"background-image\": 'url(\\'' + product[0].image + '\\')',\n\t\t\t\t\t\"background-size\": \"contain\",\n\t\t\t\t\t\"background-position\": \"cover\",\n\t\t\t\t\t\"background-repeat\": \"no-repeat\",\n\t\t\t\t\t\"height\": \"100px\" });\n\n\t\t\t\t$('.prod-name').html('' + product[0].name);\n\t\t\t\t$('.prod-price').html('' + product[0].regularPrice);\n\t\t\t\t$('.quickView-addToCart').attr('data-sku', '' + product[0].sku);\n\t\t\t\t$('.prod-desc').html('' + product[0].longDescription);\n\t\t\t\t// console.log($('.quickView-addToCart'));\n\n\t\t\t\tquickView.children('.flex-row').children('flex-col').children('.flex-row').children('.prod-price').html('<p>' + product[0].price + '</p>');\n\n\t\t\t\t$('.overlay').fadeToggle();\n\t\t\t\t$('.quickView').fadeToggle();\n\t\t\t});\n\n\t\t\t$('.closeButton').on('click', function () {\n\t\t\t\t$('.overlay').fadeToggle();\n\t\t\t\t$('.quickView').fadeToggle();\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'addToCart',\n\t\tvalue: function addToCart(sku, name, image, price) {\n\t\t\t/* First, in order to use addToCart, we'll have to pass it 4 arguments:\n      the sku number, the name, the image and the price.*/\n\t\t\tif (this.cart[sku] === undefined) {\n\t\t\t\t/* It then checks the cart to see if there's already an item with that sku\n       number. If there's no item with the same sku, it creates it, and starts\n       the quantity at 1; */\n\t\t\t\tvar item = { \"sku\": sku,\n\t\t\t\t\t\"name\": name,\n\t\t\t\t\t\"image\": image,\n\t\t\t\t\t\"price\": price,\n\t\t\t\t\t\"quantity\": 1\n\t\t\t\t};\n\t\t\t\t/* Once the item has been created, it gets added to the ShoppingCart */\n\t\t\t\tthis.cart[sku] = item;\n\t\t\t} else {\n\t\t\t\t/* If the item is already in the cart, it just increases the quantity\n       by 1. */\n\t\t\t\tthis.cart[sku].quantity++;\n\t\t\t};\n\t\t\t// console.log(this.cart);\n\t\t\tthis.updateTotal();\n\t\t}\n\t}, {\n\t\tkey: 'removeItemFromCart',\n\t\tvalue: function removeItemFromCart(sku) {\n\t\t\t/* The method takes one argument, the sku number. It uses this to locate\n      the item in the ShoppingCart, and then delete that property all together\n      from this.cart */\n\t\t\tdelete this.cart[sku];\n\t\t\tthis.updateTotal();\n\t\t}\n\t}, {\n\t\tkey: 'updateQuantity',\n\t\tvalue: function updateQuantity(sku, quantity) {\n\t\t\t/* This function gets passed the sku number, and a quantity. I want this function\n      to do 2 things for me: If I increase or decrease the quantity in the shopping \n      car, it should set the quantity in this.cart to that amount. If I try to set \n      the quantity to 0, I want it to remove that item from the cart completely */\n\t\t\tif (quantity > 0) {\n\t\t\t\t// This block only runs if I'm trying \n\t\t\t\tthis.cart[sku][\"quantity\"] = quantity; // to change the quantity to a number \n\t\t\t\t// greater than 0\n\n\t\t\t} else {\n\t\t\t\t/* If I try to change the quantity to 0, then it automatically calls\n       the removeFromCart method and deletes that item from the cart. */\n\t\t\t\tthis.removeItemFromCart(sku);\n\t\t\t}\n\t\t\tthis.updateTotal();\n\t\t}\n\t}, {\n\t\tkey: 'clearCart',\n\t\tvalue: function clearCart() {\n\t\t\t/* This method is straight forward enough. If we want to empty the cart, all\n      we have to do is reset the cart property of the ShoppingCart with an empty\n      object */\n\t\t\tconsole.log('clearing...');\n\t\t\tthis.cart = {};\n\t\t\tdocument.getElementById(\"cart-box\").innerHTML = '';\n\t\t\tthis.updateTotal();\n\t\t\tdocument.cookie = '';\n\t\t\t// console.log(document.cookie);\n\t\t\t$('.total').empty();\n\t\t\t$('#cart-main').slideToggle();\n\t\t\t$('.overlay').fadeToggle();\n\t\t}\n\t}, {\n\t\tkey: 'updateTotal',\n\t\tvalue: function updateTotal() {\n\t\t\tvar total = 0;\n\t\t\tvar quantity = 0;\n\t\t\tfor (var sku in this.cart) {\n\t\t\t\tvar product = this.cart[sku];\n\t\t\t\tquantity += parseInt(product.quantity);\n\t\t\t\ttotal += product.quantity * product.price;\n\t\t\t}\n\t\t\tthis.total = total.toFixed(2);\n\t\t\tthis.quantityTotal = parseInt(quantity);\n\n\t\t\tif (this.quantityTotal > 0) {\n\n\t\t\t\t$('.cart-total').html('' + parseInt(this.quantityTotal));\n\t\t\t\t$('.cart-total').fadeIn();\n\t\t\t} else {\n\t\t\t\t$('.cart-total').hide();\n\t\t\t}\n\t\t\t// console.log(this.total);\n\t\t}\n\t}]);\n\n\treturn ShoppingCart;\n}();\n\nexports.default = ShoppingCart;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU2hvcHBpbmdDYXJ0LmpzPzc5MWEiXSwibmFtZXMiOlsiU2hvcHBpbmdDYXJ0IiwiY2FydCIsInF1YW50aXR5VG90YWwiLCJ0b3RhbCIsInRoZUFwcCIsImJ1aWxkQ2FydFZpZXciLCJidXR0b25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIiQiLCJvbiIsInNrdSIsImRhdGFzZXQiLCJjaGVja1NrdSIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJhZGRUb0NhcnQiLCJuYW1lIiwiaW1hZ2UiLCJyZWd1bGFyUHJpY2UiLCJjb29raWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZmFkZVRvZ2dsZSIsImNsZWFyQ2FydCIsImF0dHIiLCJxdWlja1ZpZXciLCJjaGlsZHJlbiIsImNzcyIsImh0bWwiLCJsb25nRGVzY3JpcHRpb24iLCJwcmljZSIsIml0ZW0iLCJxdWFudGl0eSIsInVwZGF0ZVRvdGFsIiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJlbXB0eSIsInNsaWRlVG9nZ2xlIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwiZmFkZUluIiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVxQkEsWTtBQUVwQix5QkFBYztBQUFBOztBQUNiOztBQUVBLE9BQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EsT0FBS0MsYUFBTDtBQUNBLE9BQUtDLEtBQUw7QUFFQTs7OzsyQkFJUUMsTSxFQUFRO0FBQ2hCQSxVQUFPQyxhQUFQO0FBQ0EsT0FBSUMsVUFBVUMsU0FBU0Msb0JBQVQsQ0FBOEIsUUFBOUIsQ0FBZDs7QUFFQUMsS0FBRSxrQkFBRixFQUFzQkMsRUFBdEIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUMzQyxRQUFJQyxNQUFNLEtBQUtDLE9BQUwsQ0FBYUQsR0FBdkI7O0FBRUEsUUFBSUUsV0FBVyxT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QUtuQyxhQUFMLEdBQXFCLENBQXpCLEVBQTRCOztBQUUzQk8sTUFBRSxhQUFGLEVBQWlCd0IsSUFBakIsTUFBeUJXLFNBQVMsS0FBSzFDLGFBQWQsQ0FBekI7QUFDQU8sTUFBRSxhQUFGLEVBQWlCcUMsTUFBakI7QUFDQSxJQUpELE1BSU87QUFDTnJDLE1BQUUsYUFBRixFQUFpQnNDLElBQWpCO0FBQ0E7QUFDRDtBQUNBOzs7Ozs7a0JBdk1tQi9DLFkiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wcGluZ0NhcnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8qIFdoZW4gYSBuZXcgaW5zdGFuY2Ugb2YgU2hvcHBpbmdDYXJ0IGlzIGNyZWF0ZWQsIGl0IHJlY2VpdmVzIG9uZVxuXHRcdCAgIHByb3BlcnR5LCBhbiBlbXB0eSBjYXJ0IG9iamVjdC4qL1xuXHRcdHRoaXMuY2FydCA9IHt9O1xuXHRcdHRoaXMucXVhbnRpdHlUb3RhbDtcblx0XHR0aGlzLnRvdGFsO1xuXG5cdH1cblxuXG5cblx0cGFzc0RhdGEodGhlQXBwKSB7XG5cdFx0dGhlQXBwLmJ1aWxkQ2FydFZpZXcoKTtcblx0XHRsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKTtcblxuXHRcdCQoJy5hZGRUb0NhcnRCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNrdSA9IHRoaXMuZGF0YXNldC5za3U7XG5cdFx0XHRcblx0XHRcdGxldCBjaGVja1NrdSA9IGZ1bmN0aW9uKHByb2R1Y3QpIHtcblx0XHRcdFx0cmV0dXJuIHByb2R1Y3Quc2t1ID09IHNrdTtcblx0XHRcdH07XG5cblx0XHRcdGxldCBwcm9kdWN0ID0gdGhlQXBwLnByb2R1Y3RzLmZpbHRlcihjaGVja1NrdSk7XG5cdFx0XHRcblx0XHRcdGNvbnNvbGUubG9nKHNrdSk7XG5cdFx0XHRpZiAoc2t1ICE9IHVuZGVmaW5lZCB8fCBza3UgIT0gbnVsbCl7XG5cdFx0XHRcdHRoZUFwcC5TaG9wcGluZ0NhcnQuYWRkVG9DYXJ0KHNrdSwgcHJvZHVjdFswXS5uYW1lLCBwcm9kdWN0WzBdLmltYWdlLCBwcm9kdWN0WzBdLnJlZ3VsYXJQcmljZSk7XG5cdFx0XHRcdGRvY3VtZW50LmNvb2tpZSA9IEpTT04uc3RyaW5naWZ5KHRoZUFwcC5TaG9wcGluZ0NhcnQuY2FydCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKCcucXVpY2tWaWV3LWFkZFRvQ2FydCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcblx0XHRcdCQoJy5vdmVybGF5JykuZmFkZVRvZ2dsZSgpO1xuXHRcdFx0JCgnLnF1aWNrVmlldycpLmZhZGVUb2dnbGUoKTtcblx0XHR9KTtcblxuXHRcdCQoJy5jbGVhckNhcnRCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdjbGVhcmluZycpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcyk7XG5cdFx0XHR0aGVBcHAuU2hvcHBpbmdDYXJ0LmNsZWFyQ2FydCgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gJCgnLnN0cmlwZS1idXR0b24tZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQvLyBcdCQoJyNjYXJ0LWNoYXJnZS10b3RhbCcpLmF0dHIoXCJ2YWx1ZVwiLCBgJHt0aGVBcHAuU2hvcHBpbmdDYXJ0LnRvdGFsfWApO1xuXHRcdC8vIH0pXG5cblx0XHQkKCcuY2hlY2tvdXRCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgXHQkKCcjY2FydC1ib3gnKS5mYWRlVG9nZ2xlKCdmYXN0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHRcdCQoJyNjYXJ0LWZvcm0nKS5mYWRlVG9nZ2xlKCk7XG4gICAgICAgIFx0XHQkKCcjY2FydC1jaGFyZ2UtdG90YWwnKS5hdHRyKFwidmFsdWVcIiwgYCR7dGhlQXBwLlNob3BwaW5nQ2FydC50b3RhbH1gKTtcbiAgICAgICAgXHR9KVxuICAgICAgICBcdCQoJy5jYXJ0LWJ1dHRvbnMnKS5mYWRlVG9nZ2xlKCk7XG4gICAgICAgIFx0JCgnLmNhcnQtZm9ybS1iYWNrLWJ1dHRvbicpLmZhZGVUb2dnbGUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkKCcuZm9ybUJhY2tCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCQoJy5jYXJ0LWZvcm0tYmFjay1idXR0b24nKS5mYWRlVG9nZ2xlKCdmYXN0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHRcdCQoJy5jYXJ0LWJ1dHRvbnMnKS5mYWRlVG9nZ2xlKCk7XG4gICAgICAgIFx0fSlcbiAgICAgICAgXHQkKCcjY2FydC1mb3JtJykuZmFkZVRvZ2dsZSgnZmFzdCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0XHQkKCcjY2FydC1ib3gnKS5mYWRlVG9nZ2xlKCk7XG4gICAgICAgIFx0fSlcblxuICAgICAgICB9KVxuXG5cdFx0JCgnLnF1aWNrVmlld0J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3F1aWNrVmlldyBjbGlja2VkJyk7XG5cdFx0XHRsZXQgc2t1ID0gdGhpcy5kYXRhc2V0LnNrdTtcblx0XHRcdGxldCBjaGVja1NrdSA9IGZ1bmN0aW9uKHByb2R1Y3QpIHtcblx0XHRcdFx0cmV0dXJuIHByb2R1Y3Quc2t1ID09IHNrdTtcblx0XHRcdH07XG5cblx0XHRcdGxldCBwcm9kdWN0ID0gdGhlQXBwLnByb2R1Y3RzLmZpbHRlcihjaGVja1NrdSk7XG5cblx0XHRcdGxldCBxdWlja1ZpZXcgPSAkKCcucXVpY2tWaWV3Jyk7XG5cblx0XHRcdHF1aWNrVmlldy5jaGlsZHJlbignLmZsZXgtcm93Jylcblx0XHRcdC5jaGlsZHJlbignLnByb2QtaW1hZ2UnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdFwiYmFja2dyb3VuZC1pbWFnZVwiOiBgdXJsKCcke3Byb2R1Y3RbMF0uaW1hZ2V9JylgLFxuXHRcdFx0XHRcImJhY2tncm91bmQtc2l6ZVwiOiBcImNvbnRhaW5cIixcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6IFwiY292ZXJcIixcblx0XHRcdFx0XCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxuXHRcdFx0XHRcImhlaWdodFwiOiBcIjEwMHB4XCJ9KTtcblxuXHRcdFx0JCgnLnByb2QtbmFtZScpLmh0bWwoYCR7cHJvZHVjdFswXS5uYW1lfWApO1xuXHRcdFx0JCgnLnByb2QtcHJpY2UnKS5odG1sKGAke3Byb2R1Y3RbMF0ucmVndWxhclByaWNlfWApXG5cdFx0XHQkKCcucXVpY2tWaWV3LWFkZFRvQ2FydCcpLmF0dHIoJ2RhdGEtc2t1JywgYCR7cHJvZHVjdFswXS5za3V9YCk7XG5cdFx0XHQkKCcucHJvZC1kZXNjJykuaHRtbChgJHtwcm9kdWN0WzBdLmxvbmdEZXNjcmlwdGlvbn1gKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCQoJy5xdWlja1ZpZXctYWRkVG9DYXJ0JykpO1xuXG5cdFx0XHRxdWlja1ZpZXcuY2hpbGRyZW4oJy5mbGV4LXJvdycpXG5cdFx0XHQuY2hpbGRyZW4oJ2ZsZXgtY29sJylcblx0XHRcdC5jaGlsZHJlbignLmZsZXgtcm93Jylcblx0XHRcdC5jaGlsZHJlbignLnByb2QtcHJpY2UnKVxuXHRcdFx0Lmh0bWwoYDxwPiR7cHJvZHVjdFswXS5wcmljZX08L3A+YCk7XG5cblx0XHRcdCQoJy5vdmVybGF5JykuZmFkZVRvZ2dsZSgpO1xuXHRcdFx0JCgnLnF1aWNrVmlldycpLmZhZGVUb2dnbGUoKTtcblxuXG5cdFx0fSk7XG5cblx0XHQkKCcuY2xvc2VCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5vdmVybGF5JykuZmFkZVRvZ2dsZSgpO1xuXHRcdFx0JCgnLnF1aWNrVmlldycpLmZhZGVUb2dnbGUoKTtcblx0XHR9KVx0XHRcdFx0XHRcblx0fVxuXG5cdGFkZFRvQ2FydChza3UsIG5hbWUsIGltYWdlLCBwcmljZSkge1xuXHRcdC8qIEZpcnN0LCBpbiBvcmRlciB0byB1c2UgYWRkVG9DYXJ0LCB3ZSdsbCBoYXZlIHRvIHBhc3MgaXQgNCBhcmd1bWVudHM6XG5cdFx0ICAgdGhlIHNrdSBudW1iZXIsIHRoZSBuYW1lLCB0aGUgaW1hZ2UgYW5kIHRoZSBwcmljZS4qL1xuXHRcdGlmICh0aGlzLmNhcnRbc2t1XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0LyogSXQgdGhlbiBjaGVja3MgdGhlIGNhcnQgdG8gc2VlIGlmIHRoZXJlJ3MgYWxyZWFkeSBhbiBpdGVtIHdpdGggdGhhdCBza3Vcblx0XHQgICBudW1iZXIuIElmIHRoZXJlJ3Mgbm8gaXRlbSB3aXRoIHRoZSBzYW1lIHNrdSwgaXQgY3JlYXRlcyBpdCwgYW5kIHN0YXJ0c1xuXHRcdCAgIHRoZSBxdWFudGl0eSBhdCAxOyAqL1xuXHRcdFx0bGV0IGl0ZW0gPSB7XCJza3VcIjogc2t1LFxuXHRcdFx0IFwibmFtZVwiOiBuYW1lLFxuXHRcdFx0IFwiaW1hZ2VcIjogaW1hZ2UsXG5cdFx0XHQgXCJwcmljZVwiOiBwcmljZSxcblx0XHRcdCBcInF1YW50aXR5XCI6IDFcblx0XHRcdH07XG5cdFx0LyogT25jZSB0aGUgaXRlbSBoYXMgYmVlbiBjcmVhdGVkLCBpdCBnZXRzIGFkZGVkIHRvIHRoZSBTaG9wcGluZ0NhcnQgKi9cblx0XHRcdHRoaXMuY2FydFtza3VdID0gaXRlbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0LyogSWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBpbiB0aGUgY2FydCwgaXQganVzdCBpbmNyZWFzZXMgdGhlIHF1YW50aXR5XG5cdFx0XHQgICBieSAxLiAqL1xuXHRcdFx0dGhpcy5jYXJ0W3NrdV0ucXVhbnRpdHkgKys7XG5cdFx0fTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmNhcnQpO1xuXHRcdHRoaXMudXBkYXRlVG90YWwoKTtcblxuXHR9XG5cblx0cmVtb3ZlSXRlbUZyb21DYXJ0KHNrdSkge1xuXHRcdC8qIFRoZSBtZXRob2QgdGFrZXMgb25lIGFyZ3VtZW50LCB0aGUgc2t1IG51bWJlci4gSXQgdXNlcyB0aGlzIHRvIGxvY2F0ZVxuXHRcdCAgIHRoZSBpdGVtIGluIHRoZSBTaG9wcGluZ0NhcnQsIGFuZCB0aGVuIGRlbGV0ZSB0aGF0IHByb3BlcnR5IGFsbCB0b2dldGhlclxuXHRcdCAgIGZyb20gdGhpcy5jYXJ0ICovXG5cdFx0ZGVsZXRlIHRoaXMuY2FydFtza3VdO1xuXHRcdHRoaXMudXBkYXRlVG90YWwoKTtcblx0fVxuXG5cdHVwZGF0ZVF1YW50aXR5KHNrdSwgcXVhbnRpdHkpIHtcblx0XHQvKiBUaGlzIGZ1bmN0aW9uIGdldHMgcGFzc2VkIHRoZSBza3UgbnVtYmVyLCBhbmQgYSBxdWFudGl0eS4gSSB3YW50IHRoaXMgZnVuY3Rpb25cblx0XHQgICB0byBkbyAyIHRoaW5ncyBmb3IgbWU6IElmIEkgaW5jcmVhc2Ugb3IgZGVjcmVhc2UgdGhlIHF1YW50aXR5IGluIHRoZSBzaG9wcGluZyBcblx0XHQgICBjYXIsIGl0IHNob3VsZCBzZXQgdGhlIHF1YW50aXR5IGluIHRoaXMuY2FydCB0byB0aGF0IGFtb3VudC4gSWYgSSB0cnkgdG8gc2V0IFxuXHRcdCAgIHRoZSBxdWFudGl0eSB0byAwLCBJIHdhbnQgaXQgdG8gcmVtb3ZlIHRoYXQgaXRlbSBmcm9tIHRoZSBjYXJ0IGNvbXBsZXRlbHkgKi9cblx0XHQgICBpZiAocXVhbnRpdHkgPiAwKSB7XG5cdFx0ICAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFRoaXMgYmxvY2sgb25seSBydW5zIGlmIEknbSB0cnlpbmcgXG5cdFx0ICAgXHR0aGlzLmNhcnRbc2t1XVtcInF1YW50aXR5XCJdID0gcXVhbnRpdHk7ICAvLyB0byBjaGFuZ2UgdGhlIHF1YW50aXR5IHRvIGEgbnVtYmVyIFxuXHRcdCAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgIC8vIGdyZWF0ZXIgdGhhbiAwXG5cdFx0XG5cdFx0ICAgXHRcblx0XHQgICB9IGVsc2Uge1xuXHRcdCAgIFx0LyogSWYgSSB0cnkgdG8gY2hhbmdlIHRoZSBxdWFudGl0eSB0byAwLCB0aGVuIGl0IGF1dG9tYXRpY2FsbHkgY2FsbHNcblx0XHQgICBcdCAgIHRoZSByZW1vdmVGcm9tQ2FydCBtZXRob2QgYW5kIGRlbGV0ZXMgdGhhdCBpdGVtIGZyb20gdGhlIGNhcnQuICovIFxuXHRcdCAgIFx0dGhpcy5yZW1vdmVJdGVtRnJvbUNhcnQoc2t1KTtcblxuXHRcdCAgIH1cblx0XHQgICB0aGlzLnVwZGF0ZVRvdGFsKCk7XG5cdH1cblxuXHRjbGVhckNhcnQoKSB7XG5cdFx0LyogVGhpcyBtZXRob2QgaXMgc3RyYWlnaHQgZm9yd2FyZCBlbm91Z2guIElmIHdlIHdhbnQgdG8gZW1wdHkgdGhlIGNhcnQsIGFsbFxuXHRcdCAgIHdlIGhhdmUgdG8gZG8gaXMgcmVzZXQgdGhlIGNhcnQgcHJvcGVydHkgb2YgdGhlIFNob3BwaW5nQ2FydCB3aXRoIGFuIGVtcHR5XG5cdFx0ICAgb2JqZWN0ICovXG5cdFx0Y29uc29sZS5sb2coJ2NsZWFyaW5nLi4uJyk7XG5cdFx0dGhpcy5jYXJ0ID0ge307XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWJveFwiKS5pbm5lckhUTUwgPSAnJztcblx0XHR0aGlzLnVwZGF0ZVRvdGFsKCk7XG5cdFx0ZG9jdW1lbnQuY29va2llID0gJyc7XG5cdFx0Ly8gY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llKTtcblx0XHQkKCcudG90YWwnKS5lbXB0eSgpO1xuXHRcdCQoJyNjYXJ0LW1haW4nKS5zbGlkZVRvZ2dsZSgpO1xuXHRcdCQoJy5vdmVybGF5JykuZmFkZVRvZ2dsZSgpO1xuXHR9XG5cblx0dXBkYXRlVG90YWwoKSB7XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgcXVhbnRpdHkgPSAwO1xuXHRcdGZvciAobGV0IHNrdSBpbiB0aGlzLmNhcnQpIHtcblx0XHRcdGxldCBwcm9kdWN0ID0gdGhpcy5jYXJ0W3NrdV07XG5cdFx0XHRxdWFudGl0eSArPSBwYXJzZUludChwcm9kdWN0LnF1YW50aXR5KTtcblx0XHRcdHRvdGFsICs9IHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LnByaWNlO1xuXHRcdH1cblx0XHR0aGlzLnRvdGFsID0gdG90YWwudG9GaXhlZCgyKTtcblx0XHR0aGlzLnF1YW50aXR5VG90YWwgPSBwYXJzZUludChxdWFudGl0eSk7XG5cdFx0XG5cdFx0aWYgKHRoaXMucXVhbnRpdHlUb3RhbCA+IDApIHtcblxuXHRcdFx0JCgnLmNhcnQtdG90YWwnKS5odG1sKGAke3BhcnNlSW50KHRoaXMucXVhbnRpdHlUb3RhbCl9YCk7XG5cdFx0XHQkKCcuY2FydC10b3RhbCcpLmZhZGVJbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCcuY2FydC10b3RhbCcpLmhpZGUoKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy50b3RhbCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaG9wcGluZ0NhcnQuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})