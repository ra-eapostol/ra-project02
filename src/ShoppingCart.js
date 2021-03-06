

export default class ShoppingCart {

	constructor() {
		/* When a new instance of ShoppingCart is created, it receives one
		   property, an empty cart object.*/
		this.cart = {};
		this.quantityTotal;
		this.total;

	}



	passData(theApp) {
		theApp.buildCartView();
		let buttons = document.getElementsByTagName('button');

		// $('.addToCartButton').on('click', function(){
		$('body').on('click', '.addToCartButton', function(){
			let sku = this.dataset.sku;
			
			let checkSku = function(product) {
				return product.sku == sku;
			};

			let product = theApp.products.filter(checkSku);
			
			console.log(sku);
			if (sku != undefined || sku != null){
				theApp.ShoppingCart.addToCart(sku, product[0].name, product[0].image, product[0].regularPrice);
				// document.cookie = JSON.stringify(theApp.ShoppingCart.cart);
				sessionStorage.setItem('cart', JSON.stringify(theApp.ShoppingCart.cart));
			}
		});

		$('.quickView-addToCart').on('click', function() {
			// console.log('clicked');
			$('.overlay').fadeToggle();
			$('.quickView').fadeToggle();
		});

		$('.clearCartButton').on('click', function() {
			console.log('clearing');
			// console.log(this);
			theApp.ShoppingCart.clearCart();
		});

		// $('.stripe-button-el').on('click', function() {
		// 	$('#cart-charge-total').attr("value", `${theApp.ShoppingCart.total}`);
		// })

		$('.checkoutButton').on('click', function() {
        	$('#cart-box').fadeToggle('fast', function(){
        		$('#cart-form').fadeToggle();
        		// $('#cart-charge-total').attr("value", `${(theApp.ShoppingCart.total)*100}`);
        	})
        	$('.cart-buttons').fadeToggle();
        	$('.cart-form-back-button').fadeToggle();
        })

        $('.formBackButton').on('click', function(){
        	$('.cart-form-back-button').fadeToggle('fast', function(){
        		$('.cart-buttons').fadeToggle();
        	})
        	$('#cart-form').fadeToggle('fast', function(){
        		$('#cart-box').fadeToggle();
        	})

        })



	        $('body').on('click', '.quickViewButton', function(){
	        	console.log('quickView clicked');
			let sku = this.dataset.sku;
			let checkSku = function(product) {
				return product.sku == sku;
			};

			let product = theApp.products.filter(checkSku);

			let quickView = $('.quickView');

			quickView.children('.flex-row')
			.children('.prod-image')
			.css({
				"background-image": `url('${product[0].image}')`,
				"background-size": "contain",
				"background-position": "cover",
				"background-repeat": "no-repeat",
				"height": "100px"});

			$('.prod-name').html(`${product[0].name}`);
			$('.prod-price').html(`${product[0].regularPrice}`)
			$('.quickView-addToCart').attr('data-sku', `${product[0].sku}`);
			$('.prod-desc').html(`${product[0].longDescription}`);
			// console.log($('.quickView-addToCart'));

			quickView.children('.flex-row')
			.children('flex-col')
			.children('.flex-row')
			.children('.prod-price')
			.html(`<p>${product[0].price}</p>`);

			$('.overlay').fadeToggle();
			$('.quickView').fadeToggle();

	        })


		$('.closeButton').on('click', function() {
			$('.overlay').fadeToggle();
			$('.quickView').fadeToggle();
		})					
	}

	addToCart(sku, name, image, price) {
		/* First, in order to use addToCart, we'll have to pass it 4 arguments:
		   the sku number, the name, the image and the price.*/
		if (this.cart[sku] === undefined) {
		/* It then checks the cart to see if there's already an item with that sku
		   number. If there's no item with the same sku, it creates it, and starts
		   the quantity at 1; */
			let item = {"sku": sku,
			 "name": name,
			 "image": image,
			 "price": price,
			 "quantity": 1
			};
		/* Once the item has been created, it gets added to the ShoppingCart */
			this.cart[sku] = item;
		} else {
			/* If the item is already in the cart, it just increases the quantity
			   by 1. */
			this.cart[sku].quantity ++;
		};
		// console.log(this.cart);
		this.updateTotal();

	}

	removeItemFromCart(sku) {
		/* The method takes one argument, the sku number. It uses this to locate
		   the item in the ShoppingCart, and then delete that property all together
		   from this.cart */
		delete this.cart[sku];
		this.updateTotal();
	}

	updateQuantity(sku, quantity) {
		/* This function gets passed the sku number, and a quantity. I want this function
		   to do 2 things for me: If I increase or decrease the quantity in the shopping 
		   car, it should set the quantity in this.cart to that amount. If I try to set 
		   the quantity to 0, I want it to remove that item from the cart completely */
		   if (quantity > 0) {
		   											// This block only runs if I'm trying 
		   	this.cart[sku]["quantity"] = quantity;  // to change the quantity to a number 
		   										    // greater than 0
		
		   	
		   } else {
		   	/* If I try to change the quantity to 0, then it automatically calls
		   	   the removeFromCart method and deletes that item from the cart. */ 
		   	this.removeItemFromCart(sku);

		   }
		   this.updateTotal();
	}

	clearCart() {
		/* This method is straight forward enough. If we want to empty the cart, all
		   we have to do is reset the cart property of the ShoppingCart with an empty
		   object */
		console.log('clearing...');
		this.cart = {};
		document.getElementById("cart-box").innerHTML = '';
		this.updateTotal();
		// document.cookie = '';
		sessionStorage.clear();
		// console.log(document.cookie);
		$('.total').empty();
		$('#cart-main').slideToggle();
		$('.overlay').fadeToggle();
			  	$('.payment-success').hide();
	  			$('.cart-box').show();
	  			$('.cart-footer').show()
	  			$('.cart-buttons').show();
	  			$('.cart-form-back-button').hide();
	}

	updateTotal() {
		let total = 0;
		let quantity = 0;
		for (let sku in this.cart) {
			let product = this.cart[sku];
			quantity += parseInt(product.quantity);
			total += product.quantity * product.price;
		}
		this.total = total.toFixed(2);
		this.quantityTotal = parseInt(quantity);
		
		if (this.quantityTotal > 0) {

			$('.cart-total').html(`${parseInt(this.quantityTotal)}`);
			$('.cart-total').fadeIn();
		} else {
			$('.cart-total').hide();
		}
		
		// console.log(this.total);
	}

}