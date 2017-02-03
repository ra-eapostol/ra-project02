export default class StripePayment {
	constructor() {
		this.stripeCreateToken();

	}

	stripeCreateToken() {
	  var $form = $('#payment-form');
	  $form.submit(function(event) {
	  	// event.preventDefault();
	    // Disable the submit button to prevent repeated clicks:
	    $form.find('.submit').prop('disabled', true);

	    // Request a token from Stripe:
	   // let token =  Stripe.card.createToken($form, this.stripeResponseHandler);
	   // console.log(token);
	  let error = false;
	  let ccNum = $('.card-number').val();
	  let cvcNum = $('.card-cvc').val();
	  let expMonth = $('.card-expiry-month').val();
	  let expYear = $('.card-expiry-year').val();

	  if (!Stripe.card.validateCardNumber(ccNum)) {
	  	error = true;
	  	reportError('The credit card number is invalid');
	  }

	  if (!Stripe.card.validateCVC(cvcNum)) {
	  	error = true;
	  	reportError('The CVC number is invalid');
	  }
	  if (!Stripe.card.validateExpiry(expMonth, expYear)) {
	  	error = true;
	  	reportError('The expiration date is invalid');
	  }

	  if (!error) {
	  	Stripe.card.createToken({
	  		number: ccNum,
	  		cvc: cvcNum,
	  		exp_month: expMonth,
	  		exp_year: expYear
	  	}, this.stripeResponseHandler);
	  }


	    // Prevent the form from being submitted:
	    // console.log('token created');
	    return false;
	  });



	  
	}

	stripeResponseHandler(status, response) {
	  // Grab the form:
	  var $form = $('#payment-form');

	  if (response.error) { // Problem!
	  	this.reportError(response.error.message);
	    // Show the errors on the form:
	    // $form.find('.payment-errors').text(response.error.message);
	    // $form.find('.submit').prop('disabled', false); // Re-enable submission

	  } else { // Token was created!

	    // Get the token ID:
	    var token = response.id;

	    // Insert the token ID into the form so it gets submitted to the server:
	    $form.append($('<input type="hidden" name="stripeToken">').val(token));

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