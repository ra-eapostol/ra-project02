// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys


class StripeHandling {
	constructor() {
		const express 	 = require("express");
		const stripe 	 = require("stripe")("sk_test_l8ZYZaFjKkv6MuOL9rvV8HqB");
		const bodyParser = require("body-parser");	
			
		console.log("hey i'm in Stripe Handling now");
		this.app = express();
		this.init()
	}

	init() {

		let urlencodedParser = bodyParser.urlencoded({extended: false});
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: false}));
		// this.stripeHandlingServerInitialize();

		console.log('initializing');
		console.log(__dirname);

		this.app.use(express.static('public'));
		
		this.app.get('/index.html', function(req,res) {
			console.log('rendering index');
			res.sendFile(__dirname + "/" + "index.html" );

			});
			
		
// 

		// this.app.get('/', function(req, res) {
		// 	res.send(index.html)
		// 	console.log(req);
		// 	console.log(res);
		// })

		this.app.post('/charge', urlencodedParser, function (req,res) {
			console.log("Got a POST request from the form");
			// Token is created using Stripe.js or Checkout!
			// Get the payment token submitted by the form:
			var token = req.body.stripeToken; // Using Express
			console.log(token);
			res.end(JSON.stringify(response));
		})

		// this.app.listen(3000, function() {
			// console.log('Stripe is running');
		// })

		var server = this.app.listen(8081, function () {
			var host = server.address().address;
			var port = server.address().port;
			console.log('running stripe');
		})

		// 	// Charge the user's card:
		// 	var charge = stripe.charges.create({
		// 	  amount: 1000,
		// 	  currency: "cad",
		// 	  description: "Example charge",
		// 	  source: token,
		// 	}, function(err, charge) {
		// 		console.log(err);
		// 		console.log(charge);
		// 	  // asynchronously called
		// 	});
				
		// })
	}

	// stripeHandlingServerInitialize() {
	// 	var server = this.app.listen(8081, function() {
	// 		var host = this.address().address;
	// 		console.log(host);
	// 		var port = this.address().port;
	// 		console.log("listening at http://%s:%s", host, port);
	// 	})
	// }

}

let stripeHandling = new StripeHandling();

