

export default class ShoppingCart {

	constructor() {
		/* When a new instance of ShoppingCart is created, it receives one
		   property, an empty cart object.*/
		this.cart = {};
		this.total = 0;

	}



	passData(theApp) {
		theApp.buildCartView();
		let buttons = document.getElementsByTagName('button');

		
		/*for (let i=0; i<buttons.length; i++) {
			let button = buttons[i];
			button.addEventListener('click', this.productProcessor(theApp),false);
		}*/
		$('.addToCartButton').on('click', function(){
			let sku = this.dataset.sku;
			
			let checkSku = function(product) {
				return product.sku == sku;
			};

			let product = theApp.products.filter(checkSku);
			
			console.log(sku);
			if (sku != undefined || sku != null){
				theApp.ShoppingCart.addToCart(sku, product[0].name, product[0].image, product[0].regularPrice);
			// let name = document.querySelector(`.product-name[data-sku='${sku}']`).getAttribute('data-name');
			// let image = document.querySelector(`.product-image[data-sku='${sku}']`).getAttribute('data-image');
			// let price = parseFloat(document.querySelector(`.product-price[data-sku='${sku}']`).getAttribute('data-price'));			
			// theApp.ShoppingCart.addToCart(sku,name,image,price);
				document.cookie = JSON.stringify(theApp.ShoppingCart.cart);
			}
		});

		$('.clearCartButton').on('click', function() {
			console.log('clearing');
			console.log(this);
			theApp.ShoppingCart.clearCart();
		});

		$('.quickViewButton').on('click', function() {
			let sku = this.dataset.sku;
			let checkSku = function(product) {
				return product.sku == sku;
			};

			let product = theApp.products.filter(checkSku);
			console.log(product);

			console.log('viewing');
			// let product = theApp.products.filter(checkSku);
			console.log(product[0].image);
			console.log(product[0].name);
			console.log(product[0]);
			let quickView = $('.quickView');

			quickView.children('.flex-row')
			.children('.prod-image')
			.css({
				"background-image": `url('${product[0].image}')`,
				"background-size": "contain",
				"background-position": "cover",
				"background-repeat": "no-repeat",
				// "width": "100px",
				"height": "100px"});

			$('.prod-name').html(`${product[0].name}`);
			$('.prod-price').html(`${product[0].regularPrice}`)
			$('.quickView-addToCart').attr('data-sku', `${product[0].sku}`);
			console.log($('.quickView-addToCart'));

			quickView.children('.flex-row')
			.children('flex-col')
			.children('.flex-row')
			.children('.prod-price')
			.html(`<p>${product[0].price}</p>`);

			$('.overlay').fadeToggle();
			$('.quickView').fadeToggle();


		});

		$('.closeButton').on('click', function() {
			$('.overlay').fadeToggle();
			$('.quickView').fadeToggle();
		})					
	}

	// productProcessor(theApp) {
	// 	let that = this;
	// 	let eventHandler = function(e) {
	// 		that.results(e,theApp);
	// 	};
	// 	return eventHandler;
	// }

	results(e,theApp) {
		let className = e.path[0].className;
		// console.log(sku);
		// console.log(e.path);
		// if (className == 'addToCartButton') {
		// $('.addToCartButton').on('click', function(){
		// 	let sku = e.path[0].attributes[1].nodeValue;
		// 	let name = document.querySelector(`.product-name[data-sku='${sku}']`).getAttribute('data-name');
		// 	let image = document.querySelector(`.product-image[data-sku='${sku}']`).getAttribute('data-image');
		// 	let price = parseFloat(document.querySelector(`.product-price[data-sku='${sku}']`).getAttribute('data-price'));			
		// 	theApp.ShoppingCart.addToCart(sku,name,image,price);
		// 	document.cookie = JSON.stringify(theApp.ShoppingCart.cart);
		// });
		// } 
		// else if (className == 'clearCartButton') {
		// $('.clearCartButton').on('click', function() {
		// 	console.log('clearing');
		// 	console.log(this);
		// 	this.clearCart();
		// });
		// }

		// else if (className == 'quickViewButton'){
		// $('.quickViewButton').on('click', function() {
		// 	console.log('viewing');
		// 	console.log(this.dataset.sku);
		// });


		// }
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
		console.log(this.cart);
	}

	removeItemFromCart(sku) {
		/* The method takes one argument, the sku number. It uses this to locate
		   the item in the ShoppingCart, and then delete that property all together
		   from this.cart */
		delete this.cart[sku];
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
	}

	clearCart() {
		/* This method is straight forward enough. If we want to empty the cart, all
		   we have to do is reset the cart property of the ShoppingCart with an empty
		   object */
		console.log('clearing...');
		this.cart = {};
		document.getElementById("cart-box").innerHTML = '';
		document.cookie = '';
		console.log(document.cookie);
		$('.total').empty();
		$('#cart-main').slideToggle();
		$('.overlay').fadeToggle();
	}

}