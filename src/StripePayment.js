export default class StripePayment {
	constructor() {
		this.token = {};
		this.stripeCreateToken();

	}

	stripeCreateToken() {
	  let $form = $('#payment-form');
	  let thisStripePayment = this;
	  $form.submit(function(event) {
	  	event.preventDefault();
	    // Disable the submit button to prevent repeated clicks:
	    $form.find('.submit').prop('disabled', true);

	    // Request a token from Stripe:
	   let token =  Stripe.card.createToken($form, thisStripePayment.stripeResponseHandler);

	   // console.log(token);
	  	// let error = false;
	  	// let ccNum = $('.card-number').val();
	  	// let cvcNum = $('.card-cvc').val();
	  	// let expMonth = $('.card-expiry-month').val();
	  	// let expYear = $('.card-expiry-year').val();
	  	// let total = $('#form-total').val();

	  	// if (!Stripe.card.validateCardNumber(ccNum)) {
	  	// 	error = true;
	  	// 	thisStripePayment.reportError('The credit card number is invalid');
	  	// }

	  	// if (!Stripe.card.validateCVC(cvcNum)) {
	  	// 	error = true;
	  	// 	thisStripePayment.reportError('The CVC number is invalid');
	  	// }
	  	// if (!Stripe.card.validateExpiry(expMonth, expYear)) {
	  	// 	error = true;
	  	// 	thisStripePayment.reportError('The expiration date is invalid');
	  	// }

	  	// if (!error) {
	  	// 	let token = Stripe.card.createToken({
	  	// 		number: ccNum,
	  	// 		cvc: cvcNum,
	  	// 		exp_month: expMonth,
	  	// 		exp_year: expYear,
	  	// 		total: total
	  	// 	}, thisStripePayment.stripeResponseHandler);
	  		
	  	// 	// console.log(token);
	  	// 	// thisStripePayment.token = token;
	  	// 	// console.log(thisStripePayment.token);
	  	// 	console.log('token created');
	  	// }


	    // Prevent the form from being submitted:
	    
	    console.log('submitting...');
	    return false;
	  });



	  
	}

	stripeResponseHandler(status, response) {
	  // Grab the form:
	  var $form = $('#payment-form');
	  console.log('handling...')
	  let total = Math.round(parseFloat($('.total').html())*100);
	  console.log(total);

	  if (response.error) { // Problem!
	  	this.reportError(response.error.message);
	    // Show the errors on the form:
	    $form.find('.payment-errors').text(response.error.message);
	    $form.find('.submit').prop('disabled', false); // Re-enable submission

	  } else { // Token was created!

	    // Get the token ID:
	    console.log('new token');
	    console.log($('.total').val());
	    let token = response.id;
	    // console.log(this.token);

	    // Insert the token ID into the form so it gets submitted to the server:
	    $form.append($('<input type="hidden" name="stripeToken">').val(token));
	    // $form.append($('<input type="hidden" name="chargeAmount">').val(parseInt(parseFloat($('.total').html())*100)));
	    $form.append($('<input type="hidden" name="chargeAmount" id="secretCharge">').val(total));
	    console.log($('#secretCharge'));

	    // Submit the form:
	    $form.get(0).submit();

	  }


	}

	reportError(msg) {
		$('.payment-errors').text(msg).addClass('error');
		$('.submit').prop('disabled', false);

		return false;
	}










}