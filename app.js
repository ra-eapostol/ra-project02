// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

const express 	 = require("express");
const stripe 	 = require("stripe")("sk_test_l8ZYZaFjKkv6MuOL9rvV8HqB");
const html 		 = require("html");
const bodyParser = require("body-parser");	
// const ejs 		 = require("ejs");
			
// console.log("hey i'm in Stripe Handling now");
let app = express();

app.use(express.static(__dirname));

// app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index', {
	});
})

app.get('/paysuccess', function(req, res) {
	res.render('paysuccess', {

	})
	// res.send('Payment successful!')
});

app.post('/', function(req,res) {
	let token = req.body.stripeToken;
	console.log(token);
	let chargeAmount = req.body.chargeAmount;
	console.log(chargeAmount);
	let charge = stripe.charges.create({
		amount: chargeAmount,
		currency: "cad",
		source: token
	}, function(err, charge) {
		if (err && err.type === "StripeCardError") {
			console.log("Your card was declined");
		}
	});
	console.log(charge);
	console.log("Your payment was successful");
	// res.redirect('/');

});

app.listen(3000, function() {
	console.log('Stripe is running.')
});



