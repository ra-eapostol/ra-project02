export default class CatalogView {
    constructor() {
        this.carousel = document.getElementsByClassName("owl-carousel");
    }

    initCarousel() {                           
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                loop: true,
                center: true,
                touchDrag: true,
                // autoWidth: true,
                // autoHeight: true,
                // autoHeight: true,
                mouseDrag: true,
                margin:10,
                // nav: true,
                dots: true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:2
                    },
                    1200:{
                        items:4
                    }
                }
            });
        });


    }

    addProductsToCarousel(products){
        if (products === undefined || products == null) {
            return;
        }
        for(let product of products) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "product-wrapper");
            newDiv.setAttribute("class", "owl-item");
            newDiv.setAttribute("width", "100%");
            newDiv.setAttribute("style", "margin-top: 10px; padding: 10px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px;");
            newDiv.setAttribute("data-sku", product.sku);
            newDiv.setAttribute("data-sku", product.sku);
    

            let prodImg = document.createElement("div");
            prodImg.setAttribute("class", "product-image flex-center");
            prodImg.setAttribute("style", `background-image: url('${product.image}'); background-size: contain; background-repeat: no-repeat; background-position: center; height: 200px;`);
            prodImg.setAttribute("data-image", product.image);
            prodImg.setAttribute("data-sku", product.sku);

            let prodDesc = document.createElement("div");
            prodDesc.setAttribute("class","product-type");
            prodDesc.innerHTML += "<p class='product-type'>"+product.longDescription+"</p>";
            prodDesc.setAttribute("data-desc", product.longDescription);
            prodDesc.setAttribute("data-sku", product.sku);    

            let prodName = document.createElement("h3");
            let newH3TagTextNode = document.createTextNode(product.name);
            prodName.setAttribute("class", "width-100 text-center product-name");
            prodName.setAttribute("data-name", product.name);
            prodName.appendChild(newH3TagTextNode);
            prodName.setAttribute("data-sku", product.sku);

            let prodPrice = document.createElement("p");
            prodPrice.setAttribute("class","price width-100 text-center product-price");
            prodPrice.setAttribute("data-price", product.regularPrice);
            let newPriceParaTextNode = document.createTextNode(product.regularPrice);
            prodPrice.appendChild(newPriceParaTextNode);
            prodPrice.setAttribute("data-sku", product.sku);

            let addToCartBtn = document.createElement("button");
            let cartButtonTextNode = document.createTextNode("Add to cart");
            addToCartBtn.appendChild(cartButtonTextNode);
            addToCartBtn.setAttribute("class", "addToCartButton");
            addToCartBtn.setAttribute("data-sku", product.sku);

            let quickViewBtn = document.createElement("button");
            let viewButtonTextNode = document.createTextNode("Quick View");
            quickViewBtn.appendChild(viewButtonTextNode);
            quickViewBtn.setAttribute("class", "quickViewButton");


            newDiv.appendChild(prodImg);
            newDiv.appendChild(prodName);
            newDiv.appendChild(prodPrice);
            newDiv.appendChild(addToCartBtn);
            newDiv.appendChild(quickViewBtn);


            this.carousel[0].appendChild(newDiv);    


        }
        this.initCarousel();
    }






}