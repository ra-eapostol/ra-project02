export default class ShoppingCartView {
	constructor() {
		this.cartView = document.getElementsByClassName("cart-box");
	}


	viewCart(theApp) {
		let cartButton = document.getElementById("cart");
		let clearButton = document.getElementById("clearCartButton");
		cartButton.addEventListener('click', this.cartBuilder(theApp), false);		


	}

	cartBuilder(theApp) {
		let that = this;
		let eventHandler = function(e) {
			that.results(e,theApp);
		};
		return eventHandler;
	}

	results(e, theApp) {
		
		let cart = theApp.ShoppingCart.cart;
		let cartBox = document.getElementById('cart-box');
		cartBox.innerHTML = '';
		theApp.ShoppingCart.updateTotal();
		let total = theApp.ShoppingCart.total;
		console.log(total);
		if (Object.keys(cart).length > 0) {
			for (let sku in cart) {
				console.log('Creating new row');

				let product = cart[sku];
				let sku = sku;				

				let home = $("#cart-box");
				let productRow = $(".temp").clone();
			
				productRow.children('.product-image')
				.attr('style', `width:20%; background-image: url('${product.image}'); background-size: contain; background-repeat: no-repeat; background-position: center;`);
				
				productRow.children('.product-name')
				.html(`<p>${product.name}</p>`);

				productRow.children('.product-price')
				.html(`<p>${product.price}</p>`);

				productRow.children('.product-quantity')
				.children('.quantity-input')
				.attr({id: `${sku}`,
					   'data-sku': `${sku}`,
						value: `${product.quantity}`});


				productRow.children('.cart-buttons')
				.children('.updateButton')
				.attr('data-sku', `${sku}`);

				productRow.children('.cart-buttons')
				.children('.deleteButton')
				.attr('data-sku', `${sku}`);

				productRow.attr('data-sku', `${sku}`);

				productRow.removeClass('temp');
				productRow.addClass('flex-row justify-content-space-between');
				productRow.appendTo("#cart-box");			
			}
			$('.overlay').fadeToggle();
			$('#cart-main').fadeToggle();
        	$('#cart-main').css('display','flex');			
		}
		if(total > 0) {
			$('.total').html(total);
		}


        $('.deleteButton').on('click', function() {
        	let rowID = this.dataset.sku;        
        	let row = this.parentNode.parentNode;
        	let cartBox = document.getElementById('cart-box');
        	$(this).parent().parent().fadeToggle( function() {cartBox.removeChild(row);});
        	   
        	
        	
        	delete cart[rowID];
        	console.log(cart);
        	theApp.ShoppingCart.updateTotal();
        	total = theApp.ShoppingCart.total;

        	$('.total').html(total);
        	if(total == 0) {
        		$('.overlay').fadeToggle();
        		$('.cart-main').fadeToggle();
        	}
        	document.cookie = JSON.stringify(theApp.ShoppingCart.cart);
        	
        	
        	$(this).parent().parent().fadeToggle();

        })

        $('.updateButton').on('click', function() {

        	let skuID = this.dataset.sku;        	
        	let input = document.getElementById(skuID);
        	let row = this.parentNode.parentNode;
        	console.log(input.value);
        	
        	if (input.value == 0) {
        		delete cart[skuID];
        		theApp.ShoppingCart.updateTotal();
        		cartBox.removeChild(row);
        	} else {
        		theApp.ShoppingCart.cart[skuID].quantity = input.value;
        		theApp.ShoppingCart.updateTotal();
        		total = theApp.ShoppingCart.total;
        		$('.total').html(total);
        	}
        


        	document.cookie = JSON.stringify(theApp.ShoppingCart.cart);
        	
        	

        })
		
		let updateCart = function(cart) {
			let value = 0;
			for (let item in cart) {
				let product = cart[item];
				value +=  (parseFloat(product.quantity).toFixed(2) * parseFloat(product.price).toFixed(2));
			}
			return value;

		}
        
	}







}