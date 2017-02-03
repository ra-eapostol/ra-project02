// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
let stripe = require("stripe")("pk_test_ZxgockgZnhf735YmbUAszMqe");

console.log("hey i'm in Stripe Handling now");
console.log('stripe is ');
console.log(stripe);

// Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
let token = request.body.stripeToken; // Using Express

console.log('token is ');
console.log(token);

// Charge the user's card:
let charge = stripe.charges.create({
  amount: 1000,
  currency: "cad",
  description: "Example charge",
  source: token,
}, function(err, charge) {
	console.log(err)
	console.log(charge);
  // asynchronously called
});