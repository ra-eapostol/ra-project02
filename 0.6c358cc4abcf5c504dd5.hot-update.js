webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _BestBuyWebService = __webpack_require__(1);\n\nvar _BestBuyWebService2 = _interopRequireDefault(_BestBuyWebService);\n\nvar _ShoppingCart = __webpack_require__(2);\n\nvar _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);\n\nvar _CatalogView = __webpack_require__(4);\n\nvar _CatalogView2 = _interopRequireDefault(_CatalogView);\n\nvar _ShoppingCartView = __webpack_require__(5);\n\nvar _ShoppingCartView2 = _interopRequireDefault(_ShoppingCartView);\n\nvar _StripePayment = __webpack_require__(6);\n\nvar _StripePayment2 = _interopRequireDefault(_StripePayment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar App = function () {\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\t// console.log(document.cookie);\n\n\t\tthis.products = null;\n\t\tthis.jsonData = null;\n\t\tthis.ShoppingCart = new _ShoppingCart2.default();\n\t\tthis.catalogView = new _CatalogView2.default();\n\t\tthis.initBestBuyWebService();\n\t\tthis.stripe = new _StripePayment2.default();\n\t\tthis.stripe.stripeCreateToken(this);\n\n\t\t// if (document.cookie != '') {\n\t\tif (sessionStorage.getItem('cart') != undefined && sessionStorage.getItem('cart')) {\n\t\t\tconsole.log(\"found something\");\n\t\t\tthis.ShoppingCart.cart = JSON.parse(sessionStorage.getItem('cart'));\n\t\t}\n\t\tthis.ShoppingCart.updateTotal();\n\n\t\tif (this.ShoppingCart.quantityTotal > 0) {\n\t\t\t$('.cart-total').html('' + this.ShoppingCart.quantityTotal);\n\t\t\t$('.cart-total').fadeIn();\n\t\t} else {\n\t\t\t$('.cart-total').hide();\n\t\t}\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'initBestBuyWebService',\n\t\tvalue: function initBestBuyWebService() {\n\t\t\tthis.bbws = new _BestBuyWebService2.default();\n\t\t\tthis.bbws.getData(this);\n\t\t}\n\t}, {\n\t\tkey: 'passProductData',\n\t\tvalue: function passProductData() {\n\t\t\tthis.ShoppingCart.passData(this);\n\t\t}\n\t}, {\n\t\tkey: 'buildCartView',\n\t\tvalue: function buildCartView() {\n\t\t\tthis.CartView = new _ShoppingCartView2.default();\n\t\t\tconsole.log('Built Cart');\n\t\t\tthis.CartView.viewCart(this);\n\t\t}\n\t}, {\n\t\tkey: 'prepCart',\n\t\tvalue: function prepCart() {\n\t\t\tif (this.jsonData != null) {\n\n\t\t\t\tthis.products = this.bbws.getProducts();\n\t\t\t\tthis.catalogView.addProductsToCarousel(this.products);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn App;\n}();\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzP2E2NzMiXSwibmFtZXMiOlsiQXBwIiwicHJvZHVjdHMiLCJqc29uRGF0YSIsIlNob3BwaW5nQ2FydCIsImNhdGFsb2dWaWV3IiwiaW5pdEJlc3RCdXlXZWJTZXJ2aWNlIiwic3RyaXBlIiwic3RyaXBlQ3JlYXRlVG9rZW4iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsInVwZGF0ZVRvdGFsIiwicXVhbnRpdHlUb3RhbCIsIiQiLCJodG1sIiwiZmFkZUluIiwiaGlkZSIsImJid3MiLCJnZXREYXRhIiwicGFzc0RhdGEiLCJDYXJ0VmlldyIsInZpZXdDYXJ0IiwiZ2V0UHJvZHVjdHMiLCJhZGRQcm9kdWN0c1RvQ2Fyb3VzZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLEc7QUFFcEIsZ0JBQWM7QUFBQTs7QUFDYjs7QUFFQSxPQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsNEJBQXBCO0FBQ0EsT0FBS0MsV0FBTCxHQUFtQiwyQkFBbkI7QUFDQSxPQUFLQyxxQkFBTDtBQUNBLE9BQUtDLE1BQUwsR0FBYyw2QkFBZDtBQUNBLE9BQUtBLE1BQUwsQ0FBWUMsaUJBQVosQ0FBOEIsSUFBOUI7O0FBRUE7QUFDQSxNQUFJQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLEtBQWtDQyxTQUFsQyxJQUErQ0YsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFuRCxFQUFtRjtBQUNsRkUsV0FBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsUUFBS1QsWUFBTCxDQUFrQlUsSUFBbEIsR0FBeUJDLEtBQUtDLEtBQUwsQ0FBV1AsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUFYLENBQXpCO0FBQ0E7QUFDRCxPQUFLTixZQUFMLENBQWtCYSxXQUFsQjs7QUFFQSxNQUFJLEtBQUtiLFlBQUwsQ0FBa0JjLGFBQWxCLEdBQWtDLENBQXRDLEVBQXlDO0FBQ3hDQyxLQUFFLGFBQUYsRUFBaUJDLElBQWpCLE1BQXlCLEtBQUtoQixZQUFMLENBQWtCYyxhQUEzQztBQUNBQyxLQUFFLGFBQUYsRUFBaUJFLE1BQWpCO0FBQ0EsR0FIRCxNQUdPO0FBQ05GLEtBQUUsYUFBRixFQUFpQkcsSUFBakI7QUFDQTtBQUVEOzs7OzBDQUV1QjtBQUN2QixRQUFLQyxJQUFMLEdBQVksaUNBQVo7QUFDQSxRQUFLQSxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsSUFBbEI7QUFDQTs7O29DQUVpQjtBQUNqQixRQUFLcEIsWUFBTCxDQUFrQnFCLFFBQWxCLENBQTJCLElBQTNCO0FBQ0E7OztrQ0FFZTtBQUNmLFFBQUtDLFFBQUwsR0FBZ0IsZ0NBQWhCO0FBQ0FkLFdBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsUUFBS2EsUUFBTCxDQUFjQyxRQUFkLENBQXVCLElBQXZCO0FBQ0E7Ozs2QkFJVTtBQUNWLE9BQUcsS0FBS3hCLFFBQUwsSUFBaUIsSUFBcEIsRUFBMEI7O0FBRXpCLFNBQUtELFFBQUwsR0FBZ0IsS0FBS3FCLElBQUwsQ0FBVUssV0FBVixFQUFoQjtBQUNBLFNBQUt2QixXQUFMLENBQWlCd0IscUJBQWpCLENBQXVDLEtBQUszQixRQUE1QztBQUVBO0FBQ0Q7Ozs7OztrQkFyRG1CRCxHIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmVzdEJ1eVdlYlNlcnZpY2UgZnJvbSAnLi9CZXN0QnV5V2ViU2VydmljZSc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0IGZyb20gJy4vU2hvcHBpbmdDYXJ0JztcbmltcG9ydCBDYXRhbG9nVmlldyBmcm9tICcuL0NhdGFsb2dWaWV3JztcbmltcG9ydCBTaG9wcGluZ0NhcnRWaWV3IGZyb20gJy4vU2hvcHBpbmdDYXJ0Vmlldyc7XG5pbXBvcnQgU3RyaXBlUGF5bWVudCBmcm9tICcuL1N0cmlwZVBheW1lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmNvb2tpZSk7XG5cdFx0XG5cdFx0dGhpcy5wcm9kdWN0cyA9IG51bGw7XG5cdFx0dGhpcy5qc29uRGF0YSA9IG51bGw7XG5cdFx0dGhpcy5TaG9wcGluZ0NhcnQgPSBuZXcgU2hvcHBpbmdDYXJ0KCk7XG5cdFx0dGhpcy5jYXRhbG9nVmlldyA9IG5ldyBDYXRhbG9nVmlldygpO1xuXHRcdHRoaXMuaW5pdEJlc3RCdXlXZWJTZXJ2aWNlKCk7XG5cdFx0dGhpcy5zdHJpcGUgPSBuZXcgU3RyaXBlUGF5bWVudCgpO1xuXHRcdHRoaXMuc3RyaXBlLnN0cmlwZUNyZWF0ZVRva2VuKHRoaXMpO1xuXG5cdFx0Ly8gaWYgKGRvY3VtZW50LmNvb2tpZSAhPSAnJykge1xuXHRcdGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgIT0gdW5kZWZpbmVkICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJmb3VuZCBzb21ldGhpbmdcIik7XG5cdFx0XHR0aGlzLlNob3BwaW5nQ2FydC5jYXJ0ID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpO1xuXHRcdH1cblx0XHR0aGlzLlNob3BwaW5nQ2FydC51cGRhdGVUb3RhbCgpO1xuXG5cdFx0aWYgKHRoaXMuU2hvcHBpbmdDYXJ0LnF1YW50aXR5VG90YWwgPiAwKSB7XG5cdFx0XHQkKCcuY2FydC10b3RhbCcpLmh0bWwoYCR7dGhpcy5TaG9wcGluZ0NhcnQucXVhbnRpdHlUb3RhbH1gKVxuXHRcdFx0JCgnLmNhcnQtdG90YWwnKS5mYWRlSW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLmNhcnQtdG90YWwnKS5oaWRlKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRpbml0QmVzdEJ1eVdlYlNlcnZpY2UoKSB7XG5cdFx0dGhpcy5iYndzID0gbmV3IEJlc3RCdXlXZWJTZXJ2aWNlKCk7XG5cdFx0dGhpcy5iYndzLmdldERhdGEodGhpcyk7XG5cdH1cblxuXHRwYXNzUHJvZHVjdERhdGEoKSB7XG5cdFx0dGhpcy5TaG9wcGluZ0NhcnQucGFzc0RhdGEodGhpcyk7XG5cdH1cblxuXHRidWlsZENhcnRWaWV3KCkge1xuXHRcdHRoaXMuQ2FydFZpZXcgPSBuZXcgU2hvcHBpbmdDYXJ0VmlldygpO1xuXHRcdGNvbnNvbGUubG9nKCdCdWlsdCBDYXJ0Jyk7XG5cdFx0dGhpcy5DYXJ0Vmlldy52aWV3Q2FydCh0aGlzKTtcblx0fVxuXG5cblxuXHRwcmVwQ2FydCgpIHtcblx0XHRpZih0aGlzLmpzb25EYXRhICE9IG51bGwpIHtcblxuXHRcdFx0dGhpcy5wcm9kdWN0cyA9IHRoaXMuYmJ3cy5nZXRQcm9kdWN0cygpO1xuXHRcdFx0dGhpcy5jYXRhbG9nVmlldy5hZGRQcm9kdWN0c1RvQ2Fyb3VzZWwodGhpcy5wcm9kdWN0cyk7XG5cdFx0XG5cdFx0fVxuXHR9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 6:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StripePayment = function () {\n\tfunction StripePayment() {\n\t\t_classCallCheck(this, StripePayment);\n\n\t\tthis.token = {};\n\t\t// this.stripeCreateToken(theApp);\n\t}\n\n\t_createClass(StripePayment, [{\n\t\tkey: 'stripeCreateToken',\n\t\tvalue: function stripeCreateToken(theApp) {\n\t\t\tvar $form = $('#payment-form');\n\t\t\tvar thisStripePayment = this;\n\t\t\t$form.submit(function (event) {\n\t\t\t\tevent.preventDefault();\n\t\t\t\t// Disable the submit button to prevent repeated clicks:\n\t\t\t\t$form.find('.submit').prop('disabled', true);\n\n\t\t\t\t// Request a token from Stripe:\n\t\t\t\t// let token =  Stripe.card.createToken($form, thisStripePayment.stripeResponseHandler);\n\n\t\t\t\t// console.log(token);\n\t\t\t\tvar error = false;\n\t\t\t\tvar ccNum = $('.card-number').val();\n\t\t\t\tvar cvcNum = $('.card-cvc').val();\n\t\t\t\tvar expMonth = $('.card-expiry-month').val();\n\t\t\t\tvar expYear = $('.card-expiry-year').val();\n\t\t\t\tvar total = $('#form-total').val();\n\n\t\t\t\tif (!Stripe.card.validateCardNumber(ccNum)) {\n\t\t\t\t\terror = true;\n\t\t\t\t\tthisStripePayment.reportError('The credit card number is invalid');\n\t\t\t\t}\n\n\t\t\t\tif (!Stripe.card.validateCVC(cvcNum)) {\n\t\t\t\t\terror = true;\n\t\t\t\t\tthisStripePayment.reportError('The CVC number is invalid');\n\t\t\t\t}\n\t\t\t\tif (!Stripe.card.validateExpiry(expMonth, expYear)) {\n\t\t\t\t\terror = true;\n\t\t\t\t\tthisStripePayment.reportError('The expiration date is invalid');\n\t\t\t\t}\n\n\t\t\t\tif (!error) {\n\t\t\t\t\tvar token = Stripe.card.createToken({\n\t\t\t\t\t\tnumber: ccNum,\n\t\t\t\t\t\tcvc: cvcNum,\n\t\t\t\t\t\texp_month: expMonth,\n\t\t\t\t\t\texp_year: expYear,\n\t\t\t\t\t\ttotal: total\n\t\t\t\t\t}, thisStripePayment.stripeResponseHandler);\n\t\t\t\t\tthisStripePayment.success();\n\t\t\t\t\t$('.form-close').on('click', function () {\n\t\t\t\t\t\ttheApp.ShoppingCart.clearCart();\n\t\t\t\t\t\t// $('.payment-success').hide();\n\t\t\t\t\t\t// $('.cart-box').show();\n\t\t\t\t\t\t// $('.cart-footer').show()\n\t\t\t\t\t});\n\t\t\t\t\tsessionStorage.clear();\n\n\t\t\t\t\t// console.log(token);\n\t\t\t\t\t// thisStripePayment.token = token;\n\t\t\t\t\t// console.log(thisStripePayment.token);\n\t\t\t\t\tconsole.log('token created');\n\t\t\t\t}\n\n\t\t\t\t// Prevent the form from being submitted:\n\n\t\t\t\tconsole.log('submitting...');\n\t\t\t\treturn false;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'stripeResponseHandler',\n\t\tvalue: function stripeResponseHandler(status, response) {\n\t\t\t// Grab the form:\n\t\t\tvar $form = $('#payment-form');\n\t\t\tconsole.log('handling...');\n\t\t\tvar total = Math.round(parseFloat($('.total').html()) * 100);\n\t\t\tconsole.log(total);\n\n\t\t\tif (response.error) {\n\t\t\t\t// Problem!\n\t\t\t\tconsole.log(response.error);\n\t\t\t\t// console.log(thisStripePayment);\n\t\t\t\tthisStripePayment.reportError(response.error.message);\n\t\t\t\t// Show the errors on the form:\n\t\t\t\t$form.find('.payment-errors').text(response.error.message);\n\t\t\t\t$form.find('.submit').prop('disabled', false); // Re-enable submission\n\t\t\t} else {\n\t\t\t\t// Token was created!\n\n\t\t\t\t// Get the token ID:\n\t\t\t\tconsole.log('new token');\n\t\t\t\tconsole.log($('.total').val());\n\t\t\t\tvar token = response.id;\n\t\t\t\t// console.log(this.token);\n\n\t\t\t\t// Insert the token ID into the form so it gets submitted to the server:\n\t\t\t\t$form.append($('<input type=\"hidden\" name=\"stripeToken\">').val(token));\n\t\t\t\t// $form.append($('<input type=\"hidden\" name=\"chargeAmount\">').val(parseInt(parseFloat($('.total').html())*100)));\n\t\t\t\t$form.append($('<input type=\"hidden\" name=\"chargeAmount\" id=\"secretCharge\">').val(total));\n\t\t\t\tconsole.log($('#secretCharge'));\n\n\t\t\t\t// Submit the form:\n\t\t\t\t$('.form-close').on('click', function () {\n\t\t\t\t\t$form.get(0).submit();\n\t\t\t\t\tsessionStorage.clear();\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'reportError',\n\t\tvalue: function reportError(msg) {\n\t\t\t$('.payment-errors').fadeToggle();\n\t\t\t$('.payment-errors').text(msg).addClass('error');\n\t\t\t$('.submit').prop('disabled', false);\n\n\t\t\treturn false;\n\t\t}\n\t}, {\n\t\tkey: 'success',\n\t\tvalue: function success() {\n\t\t\t$('.cart-form').hide();\n\t\t\t$('.payment-errors').hide();\n\t\t\t$('.cart-footer').hide();\n\t\t\t$('.payment-success').fadeToggle();\n\t\t}\n\t}]);\n\n\treturn StripePayment;\n}();\n\nexports.default = StripePayment;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RyaXBlUGF5bWVudC5qcz9kM2MzIl0sIm5hbWVzIjpbIlN0cmlwZVBheW1lbnQiLCJ0b2tlbiIsInRoZUFwcCIsIiRmb3JtIiwiJCIsInRoaXNTdHJpcGVQYXltZW50Iiwic3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZpbmQiLCJwcm9wIiwiZXJyb3IiLCJjY051bSIsInZhbCIsImN2Y051bSIsImV4cE1vbnRoIiwiZXhwWWVhciIsInRvdGFsIiwiU3RyaXBlIiwiY2FyZCIsInZhbGlkYXRlQ2FyZE51bWJlciIsInJlcG9ydEVycm9yIiwidmFsaWRhdGVDVkMiLCJ2YWxpZGF0ZUV4cGlyeSIsImNyZWF0ZVRva2VuIiwibnVtYmVyIiwiY3ZjIiwiZXhwX21vbnRoIiwiZXhwX3llYXIiLCJzdHJpcGVSZXNwb25zZUhhbmRsZXIiLCJzdWNjZXNzIiwib24iLCJTaG9wcGluZ0NhcnQiLCJjbGVhckNhcnQiLCJzZXNzaW9uU3RvcmFnZSIsImNsZWFyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInJlc3BvbnNlIiwiTWF0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImh0bWwiLCJtZXNzYWdlIiwidGV4dCIsImlkIiwiYXBwZW5kIiwiZ2V0IiwibXNnIiwiZmFkZVRvZ2dsZSIsImFkZENsYXNzIiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsYTtBQUNwQiwwQkFBYztBQUFBOztBQUNiLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0E7QUFFQTs7OztvQ0FFaUJDLE0sRUFBUTtBQUN4QixPQUFJQyxRQUFRQyxFQUFFLGVBQUYsQ0FBWjtBQUNBLE9BQUlDLG9CQUFvQixJQUF4QjtBQUNBRixTQUFNRyxNQUFOLENBQWEsVUFBU0MsS0FBVCxFQUFnQjtBQUM1QkEsVUFBTUMsY0FBTjtBQUNDO0FBQ0FMLFVBQU1NLElBQU4sQ0FBVyxTQUFYLEVBQXNCQyxJQUF0QixDQUEyQixVQUEzQixFQUF1QyxJ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Q0FBa0RaLEtBQWxELENBQWI7QUFDQTtBQUNBRSxVQUFNNEMsTUFBTixDQUFhM0MsRUFBRSw2REFBRixFQUFpRVMsR0FBakUsQ0FBcUVJLEtBQXJFLENBQWI7QUFDQW1CLFlBQVFDLEdBQVIsQ0FBWWpDLEVBQUUsZUFBRixDQUFaOztBQUVBO0FBQ0FBLE1BQUUsYUFBRixFQUFpQjJCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVc7QUFDdkM1QixXQUFNNkMsR0FBTixDQUFVLENBQVYsRUFBYTFDLE1BQWI7QUFDQTRCLG9CQUFlQyxLQUFmO0FBQ0EsS0FIRDtBQUtEO0FBR0Y7Ozs4QkFFV2MsRyxFQUFLO0FBQ2hCN0MsS0FBRSxpQkFBRixFQUFxQjhDLFVBQXJCO0FBQ0E5QyxLQUFFLGlCQUFGLEVBQXFCeUMsSUFBckIsQ0FBMEJJLEdBQTFCLEVBQStCRSxRQUEvQixDQUF3QyxPQUF4QztBQUNBL0MsS0FBRSxTQUFGLEVBQWFNLElBQWIsQ0FBa0IsVUFBbEIsRUFBOEIsS0FBOUI7O0FBRUEsVUFBTyxLQUFQO0FBQ0E7Ozs0QkFFUztBQUNUTixLQUFFLFlBQUYsRUFBZ0JnRCxJQUFoQjtBQUNBaEQsS0FBRSxpQkFBRixFQUFxQmdELElBQXJCO0FBQ0FoRCxLQUFFLGNBQUYsRUFBa0JnRCxJQUFsQjtBQUNBaEQsS0FBRSxrQkFBRixFQUFzQjhDLFVBQXRCO0FBQ0E7Ozs7OztrQkFoSW1CbEQsYSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaXBlUGF5bWVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudG9rZW4gPSB7fTtcblx0XHQvLyB0aGlzLnN0cmlwZUNyZWF0ZVRva2VuKHRoZUFwcCk7XG5cblx0fVxuXG5cdHN0cmlwZUNyZWF0ZVRva2VuKHRoZUFwcCkge1xuXHQgIGxldCAkZm9ybSA9ICQoJyNwYXltZW50LWZvcm0nKTtcblx0ICBsZXQgdGhpc1N0cmlwZVBheW1lbnQgPSB0aGlzO1xuXHQgICRmb3JtLnN1Ym1pdChmdW5jdGlvbihldmVudCkge1xuXHQgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgIC8vIERpc2FibGUgdGhlIHN1Ym1pdCBidXR0b24gdG8gcHJldmVudCByZXBlYXRlZCBjbGlja3M6XG5cdCAgICAkZm9ybS5maW5kKCcuc3VibWl0JykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuXHQgICAgLy8gUmVxdWVzdCBhIHRva2VuIGZyb20gU3RyaXBlOlxuXHQgICAvLyBsZXQgdG9rZW4gPSAgU3RyaXBlLmNhcmQuY3JlYXRlVG9rZW4oJGZvcm0sIHRoaXNTdHJpcGVQYXltZW50LnN0cmlwZVJlc3BvbnNlSGFuZGxlcik7XG5cblx0ICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xuXHQgIFx0bGV0IGVycm9yID0gZmFsc2U7XG5cdCAgXHRsZXQgY2NOdW0gPSAkKCcuY2FyZC1udW1iZXInKS52YWwoKTtcblx0ICBcdGxldCBjdmNOdW0gPSAkKCcuY2FyZC1jdmMnKS52YWwoKTtcblx0ICBcdGxldCBleHBNb250aCA9ICQoJy5jYXJkLWV4cGlyeS1tb250aCcpLnZhbCgpO1xuXHQgIFx0bGV0IGV4cFllYXIgPSAkKCcuY2FyZC1leHBpcnkteWVhcicpLnZhbCgpO1xuXHQgIFx0bGV0IHRvdGFsID0gJCgnI2Zvcm0tdG90YWwnKS52YWwoKTtcblxuXHQgIFx0aWYgKCFTdHJpcGUuY2FyZC52YWxpZGF0ZUNhcmROdW1iZXIoY2NOdW0pKSB7XG5cdCAgXHRcdGVycm9yID0gdHJ1ZTtcblx0ICBcdFx0dGhpc1N0cmlwZVBheW1lbnQucmVwb3J0RXJyb3IoJ1RoZSBjcmVkaXQgY2FyZCBudW1iZXIgaXMgaW52YWxpZCcpO1xuXHQgIFx0fVxuXG5cdCAgXHRpZiAoIVN0cmlwZS5jYXJkLnZhbGlkYXRlQ1ZDKGN2Y051bSkpIHtcblx0ICBcdFx0ZXJyb3IgPSB0cnVlO1xuXHQgIFx0XHR0aGlzU3RyaXBlUGF5bWVudC5yZXBvcnRFcnJvcignVGhlIENWQyBudW1iZXIgaXMgaW52YWxpZCcpO1xuXHQgIFx0fVxuXHQgIFx0aWYgKCFTdHJpcGUuY2FyZC52YWxpZGF0ZUV4cGlyeShleHBNb250aCwgZXhwWWVhcikpIHtcblx0ICBcdFx0ZXJyb3IgPSB0cnVlO1xuXHQgIFx0XHR0aGlzU3RyaXBlUGF5bWVudC5yZXBvcnRFcnJvcignVGhlIGV4cGlyYXRpb24gZGF0ZSBpcyBpbnZhbGlkJyk7XG5cdCAgXHR9XG5cblx0ICBcdGlmICghZXJyb3IpIHtcblx0ICBcdFx0bGV0IHRva2VuID0gU3RyaXBlLmNhcmQuY3JlYXRlVG9rZW4oe1xuXHQgIFx0XHRcdG51bWJlcjogY2NOdW0sXG5cdCAgXHRcdFx0Y3ZjOiBjdmNOdW0sXG5cdCAgXHRcdFx0ZXhwX21vbnRoOiBleHBNb250aCxcblx0ICBcdFx0XHRleHBfeWVhcjogZXhwWWVhcixcblx0ICBcdFx0XHR0b3RhbDogdG90YWxcblx0ICBcdFx0fSwgdGhpc1N0cmlwZVBheW1lbnQuc3RyaXBlUmVzcG9uc2VIYW5kbGVyKTtcblx0ICBcdFx0dGhpc1N0cmlwZVBheW1lbnQuc3VjY2VzcygpO1xuXHQgIFx0XHQkKCcuZm9ybS1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQgIFx0XHRcdHRoZUFwcC5TaG9wcGluZ0NhcnQuY2xlYXJDYXJ0KCk7XG5cdCAgXHRcdFx0Ly8gJCgnLnBheW1lbnQtc3VjY2VzcycpLmhpZGUoKTtcblx0ICBcdFx0XHQvLyAkKCcuY2FydC1ib3gnKS5zaG93KCk7XG5cdCAgXHRcdFx0Ly8gJCgnLmNhcnQtZm9vdGVyJykuc2hvdygpXG5cdCAgXHRcdH0pXG5cdCAgXHRcdHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG5cblx0ICBcdFx0Ly8gY29uc29sZS5sb2codG9rZW4pO1xuXHQgIFx0XHQvLyB0aGlzU3RyaXBlUGF5bWVudC50b2tlbiA9IHRva2VuO1xuXHQgIFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzU3RyaXBlUGF5bWVudC50b2tlbik7XG5cdCAgXHRcdGNvbnNvbGUubG9nKCd0b2tlbiBjcmVhdGVkJyk7XG5cdCAgXHR9XG5cblxuXHQgICAgLy8gUHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZDpcblx0ICAgIFxuXHQgICAgY29uc29sZS5sb2coJ3N1Ym1pdHRpbmcuLi4nKTtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9KTtcblxuXG5cblx0ICBcblx0fVxuXG5cdHN0cmlwZVJlc3BvbnNlSGFuZGxlcihzdGF0dXMsIHJlc3BvbnNlKSB7XG5cdCAgLy8gR3JhYiB0aGUgZm9ybTpcblx0ICB2YXIgJGZvcm0gPSAkKCcjcGF5bWVudC1mb3JtJyk7XG5cdCAgY29uc29sZS5sb2coJ2hhbmRsaW5nLi4uJylcblx0ICBsZXQgdG90YWwgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoJCgnLnRvdGFsJykuaHRtbCgpKSoxMDApO1xuXHQgIGNvbnNvbGUubG9nKHRvdGFsKTtcblxuXHQgIGlmIChyZXNwb25zZS5lcnJvcikgeyAvLyBQcm9ibGVtIVxuXHQgIFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZXJyb3IpO1xuXHQgIFx0Ly8gY29uc29sZS5sb2codGhpc1N0cmlwZVBheW1lbnQpO1xuXHQgIFx0dGhpc1N0cmlwZVBheW1lbnQucmVwb3J0RXJyb3IocmVzcG9uc2UuZXJyb3IubWVzc2FnZSk7XG5cdCAgICAvLyBTaG93IHRoZSBlcnJvcnMgb24gdGhlIGZvcm06XG5cdCAgICAkZm9ybS5maW5kKCcucGF5bWVudC1lcnJvcnMnKS50ZXh0KHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpO1xuXHQgICAgJGZvcm0uZmluZCgnLnN1Ym1pdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpOyAvLyBSZS1lbmFibGUgc3VibWlzc2lvblxuXG5cdCAgfSBlbHNlIHsgLy8gVG9rZW4gd2FzIGNyZWF0ZWQhXG5cblx0ICAgIC8vIEdldCB0aGUgdG9rZW4gSUQ6XG5cdCAgICBjb25zb2xlLmxvZygnbmV3IHRva2VuJyk7XG5cdCAgICBjb25zb2xlLmxvZygkKCcudG90YWwnKS52YWwoKSk7XG5cdCAgICBsZXQgdG9rZW4gPSByZXNwb25zZS5pZDtcblx0ICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG9rZW4pO1xuXG5cdCAgICAvLyBJbnNlcnQgdGhlIHRva2VuIElEIGludG8gdGhlIGZvcm0gc28gaXQgZ2V0cyBzdWJtaXR0ZWQgdG8gdGhlIHNlcnZlcjpcblx0ICAgICRmb3JtLmFwcGVuZCgkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzdHJpcGVUb2tlblwiPicpLnZhbCh0b2tlbikpO1xuXHQgICAgLy8gJGZvcm0uYXBwZW5kKCQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYXJnZUFtb3VudFwiPicpLnZhbChwYXJzZUludChwYXJzZUZsb2F0KCQoJy50b3RhbCcpLmh0bWwoKSkqMTAwKSkpO1xuXHQgICAgJGZvcm0uYXBwZW5kKCQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNoYXJnZUFtb3VudFwiIGlkPVwic2VjcmV0Q2hhcmdlXCI+JykudmFsKHRvdGFsKSk7XG5cdCAgICBjb25zb2xlLmxvZygkKCcjc2VjcmV0Q2hhcmdlJykpO1xuXG5cdCAgICAvLyBTdWJtaXQgdGhlIGZvcm06XG5cdCAgICAkKCcuZm9ybS1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQgICAgXHQkZm9ybS5nZXQoMCkuc3VibWl0KCk7XG5cdCAgICBcdHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG5cdCAgICB9KTtcblxuXHQgIH1cblxuXG5cdH1cblxuXHRyZXBvcnRFcnJvcihtc2cpIHtcblx0XHQkKCcucGF5bWVudC1lcnJvcnMnKS5mYWRlVG9nZ2xlKCk7XG5cdFx0JCgnLnBheW1lbnQtZXJyb3JzJykudGV4dChtc2cpLmFkZENsYXNzKCdlcnJvcicpO1xuXHRcdCQoJy5zdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHN1Y2Nlc3MoKSB7XG5cdFx0JCgnLmNhcnQtZm9ybScpLmhpZGUoKTtcblx0XHQkKCcucGF5bWVudC1lcnJvcnMnKS5oaWRlKCk7XG5cdFx0JCgnLmNhcnQtZm9vdGVyJykuaGlkZSgpO1xuXHRcdCQoJy5wYXltZW50LXN1Y2Nlc3MnKS5mYWRlVG9nZ2xlKCk7XG5cdH1cblxuXG5cblxuXG5cblxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RyaXBlUGF5bWVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})