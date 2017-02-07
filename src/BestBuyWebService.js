
export default class BestBuyWebService {
	constructor() {
		this.apiKey = "8ccddf4rtjz5k5btqam84qak";
		// this.apiKey = 'SXkiDh8lcFEAqyG6rDmJjlH4';
		this.url = `https://api.bestbuy.com/v1/products(categoryPath.id=abcat0501000)?apiKey=${this.apiKey}&format=json`;
		this.jsonData = null;
		this.products = null;
	};


	getData(theApp) {
		// if (localStorage.getItem('bestBuyAPIData') === null) {
			let serviceChannel = new XMLHttpRequest();
			let url = this.url;
		
			serviceChannel.addEventListener('readystatechange', this.dataProcessor(theApp), false);
			serviceChannel.open("GET", url, true);
			serviceChannel.send();
		 // } else {
			// console.log('getting localStorage')
			
			// this.jsonData = JSON.parse(localStorage.getItem('bestBuyAPIData'));
			// theApp.jsonData = JSON.parse(localStorage.getItem('bestBuyAPIData'));
			// console.log(theApp.jsonData);
		// 	console.log(JSON.parse(localStorage.getItem('bestBuyAPIData')).products);
		// 	this.jsonData = JSON.parse(localStorage.getItem('bestBuyAPIData'));
		// 	// console.log(this.jsonData.products);
		// 	theApp.jsonData = this.jsonData;
		// 	theApp.products = this.jsonData.products;
		 // }
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
			console.log(typeof theApp.jsonData);
			let d = new Date();
			let timeSet = d.getTime();	
			localStorage.setItem('time', timeSet);

			localStorage.setItem('bestBuyAPIData', theApp.jsonData);
			console.log(localStorage);		
			theApp.prepCart();
			theApp.passProductData();

			// localStorage.setItem('products', JSON.stringify(theApp.jsonData));
			
		}

	}

	getProducts() {
		// if (localStorage.getItem('bestBuyAPIData') !== null) {
		// 	let jsonData = JSON.parse(localStorage.getItem('bestBuyAPIData'));
		// 	this.products = jsonData.products;
		// 	return this.products
		// }

		if(this.jsonData != null) {
			let jsonData = JSON.parse(this.jsonData);
			// let d = new Date();
			// let timeSet = d.getTime();
			this.products = jsonData.products;
			// localStorage.setItem('products', JSON.stringify(jsonData.products));
			// localStorage.setItem('time', timeSet);
			return this.products
		}
		return;
	}

}




