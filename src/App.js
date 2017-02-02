import BestBuyWebService from './BestBuyWebService';
import ShoppingCart from './ShoppingCart';
import CatalogView from './CatalogView';
import ShoppingCartView from './ShoppingCartView';

export default class App {

	constructor() {
		console.log(document.cookie);
		this.products = null;
		this.jsonData = null;
		this.ShoppingCart = new ShoppingCart();
		this.catalogView = new CatalogView();
		this.initBestBuyWebService();

		if (document.cookie != '') {
			console.log("found something");
			this.ShoppingCart.cart = JSON.parse(document.cookie);
		}

	}

	initBestBuyWebService() {
		this.bbws = new BestBuyWebService();
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
		if(this.jsonData != null) {

			this.products = this.bbws.getProducts();
			this.catalogView.addProductsToCarousel(this.products);

		// this.showCatalog();
		// console.log(this.products);
		}
	}


}