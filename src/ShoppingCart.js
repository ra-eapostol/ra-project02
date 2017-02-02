

export default class ShoppingCart {

	constructor() {
		/* When a new instance of ShoppingCart is created, it receives one
		   property, an empty cart object.*/
		this.cart = {};

	}



	passData(theApp) {
		theApp.buildCartView();
		let buttons = document.getElementsByTagName('button');
		for (let i=0; i<buttons.length; i++) {
			let button = buttons[i];
			button.addEventListener('click', this.productProcessor(theApp),false);
		}			
	}

	productProcessor(theApp) {
		let that = this;
		let eventHandler = function(e) {
			that.results(e,theApp);
		};
		return eventHandler;
	}

	results(e,theApp) {
		let className = e.path[0].className;
		// console.log(sku);
		// console.log(e.path);
		if (className == 'addToCartButton') {
			let sku = e.path[0].attributes[1].nodeValue;
			let name = document.querySelector(`.product-name[data-sku='${sku}']`).getAttribute('data-name');
			let image = document.querySelector(`.product-image[data-sku='${sku}']`).getAttribute('data-image');
			let price = parseFloat(document.querySelector(`.product-price[data-sku='${sku}']`).getAttribute('data-price'));			
			theApp.ShoppingCart.addToCart(sku,name,image,price);
			document.cookie = JSON.stringify(theApp.ShoppingCart.cart);
		} 
		else if (className == 'clearCartButton') {
			console.log('clearing');
			console.log(this);
			this.clearCart();
		}

		else if (className == 'quickViewButton'){
			console.log('...Nah');
		}
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