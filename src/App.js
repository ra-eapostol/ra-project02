import BestBuyWebService from './BestBuyWebService';
import ShoppingCart from './ShoppingCart';
import CatalogView from './CatalogView';
import ShoppingCartView from './ShoppingCartView';
import StripePayment from './StripePayment.js';

export default class App {

	constructor() {
		// console.log(document.cookie);
		
		this.products = null;
		this.jsonData = null;
		this.ShoppingCart = new ShoppingCart();
		this.catalogView = new CatalogView();
		this.initBestBuyWebService();
		this.stripe = new StripePayment();
		this.stripe.stripeCreateToken(this);

		// non-existent localStorage returns null!


		if (sessionStorage.getItem('cart') != undefined && sessionStorage.getItem('cart')) {
			console.log("found something");
			this.ShoppingCart.cart = JSON.parse(sessionStorage.getItem('cart'));
		}
		this.ShoppingCart.updateTotal();

		if (this.ShoppingCart.quantityTotal > 0) {
			$('.cart-total').html(`${this.ShoppingCart.quantityTotal}`)
			$('.cart-total').fadeIn();
		} else {
			$('.cart-total').hide();
		}




		

	}

	initBestBuyWebService() {
		this.bbws = new BestBuyWebService();
		let d = new Date();
		let time = d.getTime();
		let interval = 24*60*60*1000;
		if (localStorage.getItem('time') !== null && (time - localStorage.getItem('time')) >= interval){
		 	localStorage.clear();
		 };
		this.bbws.getData(this);
	}

	passProductData() {
		this.ShoppingCart.passData(this);
	}

	buildCartView() {
		this.CartView = new ShoppingCartView();
		console.log('Built Cart');
		this.CartView.viewCart(this);
	}



	prepCart() {
		// if (localStorage.getItem('bestBuyAPIData') !== null) {
		// 	this.products = this.bbws.getProducts();
		// 	this.catalogView.addProductsToCarousel(this.products);
		// }
		if(this.jsonData != null || this.products != null) {

			this.products = this.bbws.getProducts();
			this.catalogView.addProductsToCarousel(this.products);
		
		}
	}


}