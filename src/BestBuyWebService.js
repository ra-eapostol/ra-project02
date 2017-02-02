
export default class BestBuyWebService {
	constructor() {
		// this.apiKey = "8ccddf4rtjz5k5btqam84qak";
		this.apiKey = 'SXkiDh8lcFEAqyG6rDmJjlH4';
		this.url = `https://api.bestbuy.com/v1/products(categoryPath.id=abcat0501000)?apiKey=${this.apiKey}&format=json`;
		this.jsonData = null;
		this.products = null;
	};


	getData(theApp) {
		let serviceChannel = new XMLHttpRequest();
		let url = this.url;
		serviceChannel.addEventListener('readystatechange', this.dataProcessor(theApp), false);
		serviceChannel.open("GET", url, true);
		serviceChannel.send();
	}

	dataProcessor(theApp) {
		let that = this;
		let eventHandler = function(e) {
			that.results(e,theApp);
		};
		return eventHandler;
	}

	results(e, theApp) {
		if (e.target.readyState == 4 && e.target.status == 200) {
			this.jsonData = e.target.responseText;
			theApp.jsonData = e.target.responseText;
			theApp.prepCart();
			theApp.passProductData();
		}

	}

	getProducts() {
		if(this.jsonData != null) {
			let jsonData = JSON.parse(this.jsonData);
			this.products = jsonData.products;
			return this.products
		}
		return;
	}

}




