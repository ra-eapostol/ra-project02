webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BestBuyWebService = function () {\n\tfunction BestBuyWebService() {\n\t\t_classCallCheck(this, BestBuyWebService);\n\n\t\t// this.apiKey = \"8ccddf4rtjz5k5btqam84qak\";\n\t\tthis.apiKey = 'SXkiDh8lcFEAqyG6rDmJjlH4';\n\t\tthis.url = 'https://api.bestbuy.com/v1/products(categoryPath.id=abcat0501000)?apiKey=' + this.apiKey + '&format=json';\n\t\tthis.jsonData = null;\n\t\tthis.products = null;\n\t}\n\n\t_createClass(BestBuyWebService, [{\n\t\tkey: 'getData',\n\t\tvalue: function getData(theApp) {\n\t\t\tif (localStorage.getItem('products') == null) {\n\t\t\t\tvar serviceChannel = new XMLHttpRequest();\n\t\t\t\tvar url = this.url;\n\n\t\t\t\tserviceChannel.addEventListener('readystatechange', this.dataProcessor(theApp), false);\n\t\t\t\tserviceChannel.open(\"GET\", url, true);\n\t\t\t\tserviceChannel.send();\n\t\t\t} else {\n\t\t\t\tconsole.log('getting localStorage');\n\t\t\t\tthis.products = JSON.parse(localStorage.getItem('products')).products;\n\t\t\t\ttheApp.products = this.products;\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'dataProcessor',\n\t\tvalue: function dataProcessor(theApp) {\n\t\t\tvar that = this;\n\t\t\tvar eventHandler = function eventHandler(e) {\n\t\t\t\tthat.results(e, theApp);\n\t\t\t};\n\t\t\treturn eventHandler;\n\t\t}\n\t}, {\n\t\tkey: 'results',\n\t\tvalue: function results(e, theApp) {\n\t\t\tif (e.target.readyState == 4 && e.target.status == 200) {\n\t\t\t\tthis.jsonData = e.target.responseText;\n\t\t\t\ttheApp.jsonData = e.target.responseText;\n\t\t\t\ttheApp.prepCart();\n\t\t\t\ttheApp.passProductData();\n\t\t\t\tvar d = new Date();\n\t\t\t\tvar timeSet = d.getTime();\n\t\t\t\tlocalStorage.setItem('products', JSON.stringify(theApp.jsonData));\n\t\t\t\tlocalStorage.setItem('time', timeSet);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'getProducts',\n\t\tvalue: function getProducts() {\n\t\t\tif (this.jsonData != null) {\n\t\t\t\tvar jsonData = JSON.parse(this.jsonData);\n\t\t\t\t// let d = new Date();\n\t\t\t\t// let timeSet = d.getTime();\n\t\t\t\tthis.products = jsonData.products;\n\t\t\t\t// localStorage.setItem('products', JSON.stringify(jsonData.products));\n\t\t\t\t// localStorage.setItem('time', timeSet);\n\t\t\t\treturn this.products;\n\t\t\t}\n\t\t\treturn;\n\t\t}\n\t}]);\n\n\treturn BestBuyWebService;\n}();\n\nexports.default = BestBuyWebService;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQmVzdEJ1eVdlYlNlcnZpY2UuanM/ODQzYyJdLCJuYW1lcyI6WyJCZXN0QnV5V2ViU2VydmljZSIsImFwaUtleSIsInVybCIsImpzb25EYXRhIiwicHJvZHVjdHMiLCJ0aGVBcHAiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2VydmljZUNoYW5uZWwiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhUHJvY2Vzc29yIiwib3BlbiIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwidGhhdCIsImV2ZW50SGFuZGxlciIsImUiLCJyZXN1bHRzIiwidGFyZ2V0IiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInByZXBDYXJ0IiwicGFzc1Byb2R1Y3REYXRhIiwiZCIsIkRhdGUiLCJ0aW1lU2V0IiwiZ2V0VGltZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDcUJBLGlCO0FBQ3BCLDhCQUFjO0FBQUE7O0FBQ2I7QUFDQSxPQUFLQyxNQUFMLEdBQWMsMEJBQWQ7QUFDQSxPQUFLQyxHQUFMLGlGQUF1RixLQUFLRCxNQUE1RjtBQUNBLE9BQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0E7Ozs7MEJBR09DLE0sRUFBUTtBQUNmLE9BQUlDLGFBQWFDLE9BQWIsQ0FBcUIsVUFBckIsS0FBb0MsSUFBeEMsRUFBOEM7QUFDN0MsUUFBSUMsaUJBQWlCLElBQUlDLGNBQUosRUFBckI7QUFDQSxRQUFJUCxNQUFNLEtBQUtBLEdBQWY7O0FBRUFNLG1CQUFlRSxnQkFBZixDQUFnQyxrQkFBaEMsRUFBb0QsS0FBS0MsYUFBTCxDQUFtQk4sTUFBbkIsQ0FBcEQsRUFBZ0YsS0FBaEY7QUFDQUcsbUJBQWVJLElBQWYsQ0FBb0IsS0FBcEIsRUFBMkJWLEdBQTNCLEVBQWdDLElBQWhDO0FBQ0FNLG1CQUFlSyxJQUFmO0FBQ0EsSUFQRCxNQU9PO0FBQ05DLFlBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLFNBQUtYLFFBQUwsR0FBZ0JZLEtBQUtDLEtBQUwsQ0FBV1gsYUFBYUMsT0FBYixDQUFxQixVQUFyQixDQUFYLEVBQTZDSCxRQUE3RDtBQUNBQyxXQUFPRCxRQUFQLEdBQWtCLEtBQUtBLFFBQXZCO0FBQ0E7QUFDRDs7O2dDQUVhQyxNLEVBQVE7QUFDckIsT0FBSWEsT0FBTyxJQUFYO0FBQ0EsT0FBSUMsZUFBZSxTQUFmQSxZQUFlLENBQVNDLENBQVQsRUFBWTtBQUM5QkYsU0FBS0csT0FBTCxDQUFhRCxDQUFiLEVBQWVmLE1BQWY7QUFDQSxJQUZEO0FBR0EsVUFBT2MsWUFBUDtBQUNBOzs7MEJBRU9DLEMsRUFBR2YsTSxFQUFRO0FBQ2xCLE9BQUllLEVBQUVFLE1BQUYsQ0FBU0MsVUFBVCxJQUF1QixDQUF2QixJQUE0QkgsRUFBRUUsTUFBRixDQUFTRSxNQUFULElBQW1CLEdBQW5ELEVBQXdEO0FBQ3ZELFNBQUtyQixRQUFMLEdBQWdCaUIsRUFBRUUsTUFBRixDQUFTRyxZQUF6QjtBQUNBcEIsV0FBT0YsUUFBUCxHQUFrQmlCLEVBQUVFLE1BQUYsQ0FBU0csWUFBM0I7QUFDQXBCLFdBQU9xQixRQUFQO0FBQ0FyQixXQUFPc0IsZUFBUDtBQUNBLFFBQUlDLElBQUksSUFBSUMsSUFBSixFQUFSO0FBQ0EsUUFBSUMsVUFBVUYsRUFBRUcsT0FBRixFQUFkO0FBQ0F6QixpQkFBYTBCLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNoQixLQUFLaUIsU0FBTCxDQUFlNUIsT0FBT0YsUUFBdEIsQ0FBakM7QUFDQUcsaUJBQWEwQixPQUFiLENBQXFCLE1BQXJCLEVBQTZCRixPQUE3QjtBQUNBO0FBRUQ7OztnQ0FFYTtBQUNiLE9BQUcsS0FBSzNCLFFBQUwsSUFBaUIsSUFBcEIsRUFBMEI7QUFDekIsUUFBSUEsV0FBV2EsS0FBS0MsS0FBTCxDQUFXLEtBQUtkLFFBQWhCLENBQWY7QUFDQTtBQUNBO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkQsU0FBU0MsUUFBekI7QUFDQTtBQUNBO0FBQ0EsV0FBTyxLQUFLQSxRQUFaO0FBQ0E7QUFDRDtBQUNBOzs7Ozs7a0JBMURtQkosaUIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVzdEJ1eVdlYlNlcnZpY2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvLyB0aGlzLmFwaUtleSA9IFwiOGNjZGRmNHJ0ano1azVidHFhbTg0cWFrXCI7XG5cdFx0dGhpcy5hcGlLZXkgPSAnU1hraURoOGxjRkVBcXlHNnJEbUpqbEg0Jztcblx0XHR0aGlzLnVybCA9IGBodHRwczovL2FwaS5iZXN0YnV5LmNvbS92MS9wcm9kdWN0cyhjYXRlZ29yeVBhdGguaWQ9YWJjYXQwNTAxMDAwKT9hcGlLZXk9JHt0aGlzLmFwaUtleX0mZm9ybWF0PWpzb25gO1xuXHRcdHRoaXMuanNvbkRhdGEgPSBudWxsO1xuXHRcdHRoaXMucHJvZHVjdHMgPSBudWxsO1xuXHR9O1xuXG5cblx0Z2V0RGF0YSh0aGVBcHApIHtcblx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2R1Y3RzJykgPT0gbnVsbCkge1xuXHRcdFx0bGV0IHNlcnZpY2VDaGFubmVsID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHRsZXQgdXJsID0gdGhpcy51cmw7XG5cdFx0XG5cdFx0XHRzZXJ2aWNlQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgdGhpcy5kYXRhUHJvY2Vzc29yKHRoZUFwcCksIGZhbHNlKTtcblx0XHRcdHNlcnZpY2VDaGFubmVsLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblx0XHRcdHNlcnZpY2VDaGFubmVsLnNlbmQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ2dldHRpbmcgbG9jYWxTdG9yYWdlJylcblx0XHRcdHRoaXMucHJvZHVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0cycpKS5wcm9kdWN0cztcblx0XHRcdHRoZUFwcC5wcm9kdWN0cyA9IHRoaXMucHJvZHVjdHM7XG5cdFx0fVxuXHR9XG5cblx0ZGF0YVByb2Nlc3Nvcih0aGVBcHApIHtcblx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0bGV0IGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHRoYXQucmVzdWx0cyhlLHRoZUFwcCk7XG5cdFx0fTtcblx0XHRyZXR1cm4gZXZlbnRIYW5kbGVyO1xuXHR9XG5cblx0cmVzdWx0cyhlLCB0aGVBcHApIHtcblx0XHRpZiAoZS50YXJnZXQucmVhZHlTdGF0ZSA9PSA0ICYmIGUudGFyZ2V0LnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdHRoaXMuanNvbkRhdGEgPSBlLnRhcmdldC5yZXNwb25zZVRleHQ7XG5cdFx0XHR0aGVBcHAuanNvbkRhdGEgPSBlLnRhcmdldC5yZXNwb25zZVRleHQ7XG5cdFx0XHR0aGVBcHAucHJlcENhcnQoKTtcblx0XHRcdHRoZUFwcC5wYXNzUHJvZHVjdERhdGEoKTtcblx0XHRcdGxldCBkID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCB0aW1lU2V0ID0gZC5nZXRUaW1lKCk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZHVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGVBcHAuanNvbkRhdGEpKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgdGltZVNldCk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXRQcm9kdWN0cygpIHtcblx0XHRpZih0aGlzLmpzb25EYXRhICE9IG51bGwpIHtcblx0XHRcdGxldCBqc29uRGF0YSA9IEpTT04ucGFyc2UodGhpcy5qc29uRGF0YSk7XG5cdFx0XHQvLyBsZXQgZCA9IG5ldyBEYXRlKCk7XG5cdFx0XHQvLyBsZXQgdGltZVNldCA9IGQuZ2V0VGltZSgpO1xuXHRcdFx0dGhpcy5wcm9kdWN0cyA9IGpzb25EYXRhLnByb2R1Y3RzO1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEucHJvZHVjdHMpKTtcblx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lJywgdGltZVNldCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9kdWN0c1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxufVxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQmVzdEJ1eVdlYlNlcnZpY2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
])