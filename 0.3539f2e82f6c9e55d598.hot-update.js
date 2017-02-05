webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StripePayment = function () {\n\tfunction StripePayment() {\n\t\t_classCallCheck(this, StripePayment);\n\n\t\tthis.token = {};\n\t\tthis.stripeCreateToken();\n\t}\n\n\t_createClass(StripePayment, [{\n\t\tkey: 'stripeCreateToken',\n\t\tvalue: function stripeCreateToken() {\n\t\t\tvar $form = $('#payment-form');\n\t\t\tvar thisStripePayment = this;\n\t\t\t$form.submit(function (event) {\n\t\t\t\tevent.preventDefault();\n\t\t\t\t// Disable the submit button to prevent repeated clicks:\n\t\t\t\t$form.find('.submit').prop('disabled', true);\n\n\t\t\t\t// Request a token from Stripe:\n\t\t\t\t// let token =  Stripe.card.createToken($form, thisStripePayment.stripeResponseHandler);\n\n\t\t\t\t// console.log(token);\n\t\t\t\tvar error = false;\n\t\t\t\tvar ccNum = $('.card-number').val();\n\t\t\t\tvar cvcNum = $('.card-cvc').val();\n\t\t\t\tvar expMonth = $('.card-expiry-month').val();\n\t\t\t\tvar expYear = $('.card-expiry-year').val();\n\t\t\t\tvar total = $('#formTotal').val();\n\n\t\t\t\tif (!Stripe.card.validateCardNumber(ccNum)) {\n\t\t\t\t\terror = true;\n\t\t\t\t\tthisStripePayment.reportError('The credit card number is invalid');\n\t\t\t\t}\n\n\t\t\t\tif (!Stripe.card.validateCVC(cvcNum)) {\n\t\t\t\t\terror = true;\n\t\t\t\t\tthisStripePayment.reportError('The CVC number is invalid');\n\t\t\t\t}\n\t\t\t\tif (!Stripe.card.validateExpiry(expMonth, expYear)) {\n\t\t\t\t\terror = true;\n\t\t\t\t\tthisStripePayment.reportError('The expiration date is invalid');\n\t\t\t\t}\n\n\t\t\t\tif (!error) {\n\t\t\t\t\tvar token = Stripe.card.createToken({\n\t\t\t\t\t\tnumber: ccNum,\n\t\t\t\t\t\tcvc: cvcNum,\n\t\t\t\t\t\texp_month: expMonth,\n\t\t\t\t\t\texp_year: expYear\n\t\t\t\t\t}, thisStripePayment.stripeResponseHandler);\n\n\t\t\t\t\t// console.log(token);\n\t\t\t\t\t// thisStripePayment.token = token;\n\t\t\t\t\t// console.log(thisStripePayment.token);\n\t\t\t\t\tconsole.log('token created');\n\t\t\t\t}\n\n\t\t\t\t// Prevent the form from being submitted:\n\n\t\t\t\tconsole.log('submitting...');\n\t\t\t\treturn false;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'stripeResponseHandler',\n\t\tvalue: function stripeResponseHandler(status, response) {\n\t\t\t// Grab the form:\n\t\t\tvar $form = $('#payment-form');\n\t\t\tconsole.log('handling...');\n\n\t\t\tif (response.error) {\n\t\t\t\t// Problem!\n\t\t\t\tthis.reportError(response.error.message);\n\t\t\t\t// Show the errors on the form:\n\t\t\t\t$form.find('.payment-errors').text(response.error.message);\n\t\t\t\t$form.find('.submit').prop('disabled', false); // Re-enable submission\n\t\t\t} else {\n\t\t\t\t// Token was created!\n\n\t\t\t\t// Get the token ID:\n\t\t\t\tconsole.log('new token');\n\t\t\t\tconsole.log($('.total').val());\n\t\t\t\tvar token = response.id;\n\t\t\t\t// console.log(this.token);\n\n\t\t\t\t// Insert the token ID into the form so it gets submitted to the server:\n\t\t\t\t$form.append($('<input type=\"hidden\" name=\"stripeToken\">').val(token));\n\t\t\t\t// $form.append($('<input type=\"hidden\" name=\"chargeAmount\">').val($('.total').html()));\n\n\t\t\t\t// Submit the form:\n\t\t\t\t$form.get(0).submit();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'reportError',\n\t\tvalue: function reportError(msg) {\n\t\t\t$('.payment-errors').text(msg).addClass('error');\n\t\t\t$('.submit').prop('disabled', false);\n\n\t\t\treturn false;\n\t\t}\n\t}]);\n\n\treturn StripePayment;\n}();\n\nexports.default = StripePayment;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU3RyaXBlUGF5bWVudC5qcz9kM2MzIl0sIm5hbWVzIjpbIlN0cmlwZVBheW1lbnQiLCJ0b2tlbiIsInN0cmlwZUNyZWF0ZVRva2VuIiwiJGZvcm0iLCIkIiwidGhpc1N0cmlwZVBheW1lbnQiLCJzdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmluZCIsInByb3AiLCJlcnJvciIsImNjTnVtIiwidmFsIiwiY3ZjTnVtIiwiZXhwTW9udGgiLCJleHBZZWFyIiwidG90YWwiLCJTdHJpcGUiLCJjYXJkIiwidmFsaWRhdGVDYXJkTnVtYmVyIiwicmVwb3J0RXJyb3IiLCJ2YWxpZGF0ZUNWQyIsInZhbGlkYXRlRXhwaXJ5IiwiY3JlYXRlVG9rZW4iLCJudW1iZXIiLCJjdmMiLCJleHBfbW9udGgiLCJleHBfeWVhciIsInN0cmlwZVJlc3BvbnNlSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0ZXh0IiwiaWQiLCJhcHBlbmQiLCJnZXQiLCJtc2ciLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsYTtBQUNwQiwwQkFBYztBQUFBOztBQUNiLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0MsaUJBQUw7QUFFQTs7OztzQ0FFbUI7QUFDbEIsT0FBSUMsUUFBUUMsRUFBRSxlQUFGLENBQVo7QUFDQSxPQUFJQyxvQkFBb0IsSUFBeEI7QUFDQUYsU0FBTUcsTUFBTixDQUFhLFVBQVNDLEtBQVQsRUFBZ0I7QUFDNUJBLFVBQU1DLGNBQU47QUFDQztBQUNBTCxVQUFNTSxJQUFOLENBQVcsU0FBWCxFQUFzQkMsSUFBdEIsQ0FBMkIsVUFBM0IsRUFBdUMsSUFBdkM7O0FBRUE7QUFDRDs7QUFFQTtBQUNBLFFBQUlDLFFBQVEsS0FBWjtBQUNBLFFBQUlDLFFBQVFSLEVBQUUsY0FBRixFQUFrQlMsR0FBbEIsRUFBWjtBQUNBLFFBQUlDLFNBQVNWLEVBQUUsV0FBRixFQUFlUyxHQUFmLEVBQWI7QUFDQSxRQUFJRSxXQUFXWCxFQUFFLG9CQUFGLEVBQXdCUyxHQUF4QixFQUFmO0FBQ0EsUUFBSUcsVUFBVVosRUFBRSxtQkFBRixFQUF1QlMsR0FBdkIsRUFBZDtBQUNBLFFBQUlJLFFBQVFiLEVBQUUsWUFBRixFQUFnQlMsR0FBaEIsRUFBWjs7QUFFQSxRQUFJLENBQUNLLE9BQU9DLElBQVAsQ0FBWUMsa0JBQVosQ0FBK0JSLEtBQS9CLENBQUwsRUFBNEM7QUFDM0NELGFBQVEsSUFBUjtBQUNBTix1QkFBa0JnQixXQUFsQixDQUE4QixtQ0FBOUI7QUFDQTs7QUFFRCxRQUFJLENBQUNILE9BQU9DLElBQVAsQ0FBWUcsV0FBWixDQUF3QlIsTUFBeEIsQ0FBTCxFQUFzQztBQUNyQ0gsYUFBUSxJQUFSO0FBQ0FOLHVCQUFrQmdCLFdBQWxCLENBQThCLDJCQUE5QjtBQUNBO0FBQ0QsUUFBSSxDQUFDSCxPQUFPQyxJQUFQLENBQVlJLGNBQVosQ0FBMkJSLFFBQTNCLEVBQXFDQyxPQUFyQyxDQUFMLEVBQW9EO0FBQ25ETCxhQUFRLElBQVI7QUFDQU4sdUJBQWtCZ0IsV0FBbEIsQ0FBOEIsZ0NBQTlCO0FBQ0E7O0FBRUQsUUFBSSxDQUFDVixLQUFMLEVBQVk7QUFDWCxTQUFJVixRQUFRaUIsT0FBT0MsSUFBUCxDQUFZSyxXQUFaLENBQXdCO0FBQ25DQyxjQUFRYixLQUQyQjtBQUVuQ2MsV0FBS1osTUFGOEI7QUFHbkNhLGlCQUFXWixRQUh3QjtBQUluQ2EsZ0JBQVVaO0FBSnlCLE1BQXhCLEVBS1RYLGtCQUFrQndCLHFCQUxULENBQVo7O0FBT0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7O0FBR0E7O0FBRUFELFlBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsSUFqREQ7QUFzREQ7Ozt3Q0FFcUJDLE0sRUFBUUMsUSxFQUFVO0FBQ3RDO0FBQ0EsT0FBSTlCLFFBQVFDLEVBQUUsZUFBRixDQUFaO0FBQ0EwQixXQUFRQyxHQUFSLENBQVksYUFBWjs7QUFFQSxPQUFJRSxTQUFTdEIsS0FBYixFQUFvQjtBQUFFO0FBQ3JCLFNBQUtVLFdBQUwsQ0FBaUJZLFNBQVN0QixLQUFULENBQWV1QixPQUFoQztBQUNDO0FBQ0EvQixVQUFNTSxJQUFOLENBQVcsaUJBQVgsRUFBOEIwQixJQUE5QixDQUFtQ0YsU0FBU3RCLEtBQVQsQ0FBZXVCLE9BQWxEO0FBQ0EvQixVQUFNTSxJQUFOLENBQVcsU0FBWCxFQUFzQkMsSUFBdEIsQ0FBMkIsVUFBM0IsRUFBdUMsS0FBdkMsRUFKa0IsQ0FJNkI7QUFFaEQsSUFORCxNQU1PO0FBQUU7O0FBRVA7QUFDQW9CLFlBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELFlBQVFDLEdBQVIsQ0FBWTNCLEVBQUUsUUFBRixFQUFZUyxHQUFaLEVBQVo7QUFDQSxRQUFJWixRQUFRZ0MsU0FBU0csRUFBckI7QUFDQTs7QUFFQTtBQUNBakMsVUFBTWtDLE1BQU4sQ0FBYWpDLEVBQUUsMENBQUYsRUFBOENTLEdBQTlDLENBQWtEWixLQUFsRCxDQUFiO0FBQ0E7O0FBRUE7QUFDQUUsVUFBTW1DLEdBQU4sQ0FBVSxDQUFWLEVBQWFoQyxNQUFiO0FBRUQ7QUFHRjs7OzhCQUVXaUMsRyxFQUFLO0FBQ2hCbkMsS0FBRSxpQkFBRixFQUFxQitCLElBQXJCLENBQTBCSSxHQUExQixFQUErQkMsUUFBL0IsQ0FBd0MsT0FBeEM7QUFDQXBDLEtBQUUsU0FBRixFQUFhTSxJQUFiLENBQWtCLFVBQWxCLEVBQThCLEtBQTlCOztBQUVBLFVBQU8sS0FBUDtBQUNBOzs7Ozs7a0JBdEdtQlYsYSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaXBlUGF5bWVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudG9rZW4gPSB7fTtcblx0XHR0aGlzLnN0cmlwZUNyZWF0ZVRva2VuKCk7XG5cblx0fVxuXG5cdHN0cmlwZUNyZWF0ZVRva2VuKCkge1xuXHQgIGxldCAkZm9ybSA9ICQoJyNwYXltZW50LWZvcm0nKTtcblx0ICBsZXQgdGhpc1N0cmlwZVBheW1lbnQgPSB0aGlzO1xuXHQgICRmb3JtLnN1Ym1pdChmdW5jdGlvbihldmVudCkge1xuXHQgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgIC8vIERpc2FibGUgdGhlIHN1Ym1pdCBidXR0b24gdG8gcHJldmVudCByZXBlYXRlZCBjbGlja3M6XG5cdCAgICAkZm9ybS5maW5kKCcuc3VibWl0JykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuXHQgICAgLy8gUmVxdWVzdCBhIHRva2VuIGZyb20gU3RyaXBlOlxuXHQgICAvLyBsZXQgdG9rZW4gPSAgU3RyaXBlLmNhcmQuY3JlYXRlVG9rZW4oJGZvcm0sIHRoaXNTdHJpcGVQYXltZW50LnN0cmlwZVJlc3BvbnNlSGFuZGxlcik7XG5cblx0ICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xuXHQgIFx0bGV0IGVycm9yID0gZmFsc2U7XG5cdCAgXHRsZXQgY2NOdW0gPSAkKCcuY2FyZC1udW1iZXInKS52YWwoKTtcblx0ICBcdGxldCBjdmNOdW0gPSAkKCcuY2FyZC1jdmMnKS52YWwoKTtcblx0ICBcdGxldCBleHBNb250aCA9ICQoJy5jYXJkLWV4cGlyeS1tb250aCcpLnZhbCgpO1xuXHQgIFx0bGV0IGV4cFllYXIgPSAkKCcuY2FyZC1leHBpcnkteWVhcicpLnZhbCgpO1xuXHQgIFx0bGV0IHRvdGFsID0gJCgnI2Zvcm1Ub3RhbCcpLnZhbCgpO1xuXG5cdCAgXHRpZiAoIVN0cmlwZS5jYXJkLnZhbGlkYXRlQ2FyZE51bWJlcihjY051bSkpIHtcblx0ICBcdFx0ZXJyb3IgPSB0cnVlO1xuXHQgIFx0XHR0aGlzU3RyaXBlUGF5bWVudC5yZXBvcnRFcnJvcignVGhlIGNyZWRpdCBjYXJkIG51bWJlciBpcyBpbnZhbGlkJyk7XG5cdCAgXHR9XG5cblx0ICBcdGlmICghU3RyaXBlLmNhcmQudmFsaWRhdGVDVkMoY3ZjTnVtKSkge1xuXHQgIFx0XHRlcnJvciA9IHRydWU7XG5cdCAgXHRcdHRoaXNTdHJpcGVQYXltZW50LnJlcG9ydEVycm9yKCdUaGUgQ1ZDIG51bWJlciBpcyBpbnZhbGlkJyk7XG5cdCAgXHR9XG5cdCAgXHRpZiAoIVN0cmlwZS5jYXJkLnZhbGlkYXRlRXhwaXJ5KGV4cE1vbnRoLCBleHBZZWFyKSkge1xuXHQgIFx0XHRlcnJvciA9IHRydWU7XG5cdCAgXHRcdHRoaXNTdHJpcGVQYXltZW50LnJlcG9ydEVycm9yKCdUaGUgZXhwaXJhdGlvbiBkYXRlIGlzIGludmFsaWQnKTtcblx0ICBcdH1cblxuXHQgIFx0aWYgKCFlcnJvcikge1xuXHQgIFx0XHRsZXQgdG9rZW4gPSBTdHJpcGUuY2FyZC5jcmVhdGVUb2tlbih7XG5cdCAgXHRcdFx0bnVtYmVyOiBjY051bSxcblx0ICBcdFx0XHRjdmM6IGN2Y051bSxcblx0ICBcdFx0XHRleHBfbW9udGg6IGV4cE1vbnRoLFxuXHQgIFx0XHRcdGV4cF95ZWFyOiBleHBZZWFyXG5cdCAgXHRcdH0sIHRoaXNTdHJpcGVQYXltZW50LnN0cmlwZVJlc3BvbnNlSGFuZGxlcik7XG5cdCAgXHRcdFxuXHQgIFx0XHQvLyBjb25zb2xlLmxvZyh0b2tlbik7XG5cdCAgXHRcdC8vIHRoaXNTdHJpcGVQYXltZW50LnRva2VuID0gdG9rZW47XG5cdCAgXHRcdC8vIGNvbnNvbGUubG9nKHRoaXNTdHJpcGVQYXltZW50LnRva2VuKTtcblx0ICBcdFx0Y29uc29sZS5sb2coJ3Rva2VuIGNyZWF0ZWQnKTtcblx0ICBcdH1cblxuXG5cdCAgICAvLyBQcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkOlxuXHQgICAgXG5cdCAgICBjb25zb2xlLmxvZygnc3VibWl0dGluZy4uLicpO1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH0pO1xuXG5cblxuXHQgIFxuXHR9XG5cblx0c3RyaXBlUmVzcG9uc2VIYW5kbGVyKHN0YXR1cywgcmVzcG9uc2UpIHtcblx0ICAvLyBHcmFiIHRoZSBmb3JtOlxuXHQgIHZhciAkZm9ybSA9ICQoJyNwYXltZW50LWZvcm0nKTtcblx0ICBjb25zb2xlLmxvZygnaGFuZGxpbmcuLi4nKVxuXG5cdCAgaWYgKHJlc3BvbnNlLmVycm9yKSB7IC8vIFByb2JsZW0hXG5cdCAgXHR0aGlzLnJlcG9ydEVycm9yKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpO1xuXHQgICAgLy8gU2hvdyB0aGUgZXJyb3JzIG9uIHRoZSBmb3JtOlxuXHQgICAgJGZvcm0uZmluZCgnLnBheW1lbnQtZXJyb3JzJykudGV4dChyZXNwb25zZS5lcnJvci5tZXNzYWdlKTtcblx0ICAgICRmb3JtLmZpbmQoJy5zdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTsgLy8gUmUtZW5hYmxlIHN1Ym1pc3Npb25cblxuXHQgIH0gZWxzZSB7IC8vIFRva2VuIHdhcyBjcmVhdGVkIVxuXG5cdCAgICAvLyBHZXQgdGhlIHRva2VuIElEOlxuXHQgICAgY29uc29sZS5sb2coJ25ldyB0b2tlbicpO1xuXHQgICAgY29uc29sZS5sb2coJCgnLnRvdGFsJykudmFsKCkpO1xuXHQgICAgbGV0IHRva2VuID0gcmVzcG9uc2UuaWQ7XG5cdCAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcblxuXHQgICAgLy8gSW5zZXJ0IHRoZSB0b2tlbiBJRCBpbnRvIHRoZSBmb3JtIHNvIGl0IGdldHMgc3VibWl0dGVkIHRvIHRoZSBzZXJ2ZXI6XG5cdCAgICAkZm9ybS5hcHBlbmQoJCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic3RyaXBlVG9rZW5cIj4nKS52YWwodG9rZW4pKTtcblx0ICAgIC8vICRmb3JtLmFwcGVuZCgkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjaGFyZ2VBbW91bnRcIj4nKS52YWwoJCgnLnRvdGFsJykuaHRtbCgpKSk7XG5cblx0ICAgIC8vIFN1Ym1pdCB0aGUgZm9ybTpcblx0ICAgICRmb3JtLmdldCgwKS5zdWJtaXQoKTtcblxuXHQgIH1cblxuXG5cdH1cblxuXHRyZXBvcnRFcnJvcihtc2cpIHtcblx0XHQkKCcucGF5bWVudC1lcnJvcnMnKS50ZXh0KG1zZykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cdFx0JCgnLnN1Ym1pdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblxuXG5cblxuXG5cblxuXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RyaXBlUGF5bWVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})