var Product = require('./Product');
var ProductList = require('./ProductList');

function getProduct(id) {
    var data = {
        "sku": "mtk000c",
        "name": "A Product!",
        "id": id,
        "has_rating_summary": null,
        "product_link": "http://127.0.0.1:8080/men/tees-knits-and-polos/chelsea-tee-585.html?___SID=U",
        "price_html": "<div class=\"price-box\"><span class=\"regular-price\" id=\"product-price-"+id+"\"><span class=\"price\">$75.00</span></span></div>",
        "img_src": "http://www.placecage.com/gif/301/300",
        "name_after_htmls": [
            "<ul class=\"configurable-swatch-list configurable-swatch-color clearfix\"><li class=\"option-black is-media\" data-product-id=\""+id+"\" data-option-label=\"black\"><a href=\"javascript:void(0)\" name=\"black\" class=\"swatch-link swatch-link-92 has-image\" title=\"black\" style=\"height: 17px; width: 17px;\">     <span class=\"swatch-label\" style=\"height: 15px; width: 15px; line-height: 15px;\"><img src=\"http://127.0.0.1:8081/media/catalog/swatches/1/15x15/media/black.png\" alt=\"black\" width=\"15\" height=\"15\" /></span></a></li><li class=\"option-white is-media\" data-product-id=\""+id+"\" data-option-label=\"white\"><a href=\"javascript:void(0)\" name=\"white\" class=\"swatch-link swatch-link-92 has-image\" title=\"white\" style=\"height: 17px; width: 17px;\"><span class=\"swatch-label\" style=\"height: 15px; width: 15px; line-height: 15px;\"><img src=\"http://127.0.0.1:8081/media/catalog/swatches/1/15x15/media/white.png\" alt=\"white\" width=\"15\" height=\"15\" /></span></a></li><li class=\"option-blue is-media\" data-product-id=\""+id+"\" data-option-label=\"blue\"><a href=\"javascript:void(0)\" name=\"blue\" class=\"swatch-link swatch-link-92 has-image\" title=\"blue\" style=\"height: 17px; width: 17px;\"><span class=\"swatch-label\" style=\"height: 15px; width: 15px; line-height: 15px;\"><img src=\"http://127.0.0.1:8081/media/catalog/swatches/1/15x15/media/blue.png\" alt=\"blue\" width=\"15\" height=\"15\" /></span></a></li></ul>"
        ],
        "wishlist_add_url": "http://127.0.0.1:8080/wishlist/index/add/product/"+id+"/form_key/pSNv59aD5zYvOYyR/?___SID=U",
        "compare_add_url": "http://127.0.0.1:8080/catalog/product_compare/add/product/"+id+"/uenc/aHR0cDovLzEyNy4wLjAuMTo4MDgwL21lbi90ZWVzLWtuaXRzLWFuZC1wb2xvcy5odG1s/form_key/pSNv59aD5zYvOYyR/?___SID=U"
    };
    return new Product(data);
}

var products = new ProductList([
    getProduct(1),
    getProduct(2),
    getProduct(3),
    getProduct(4),
    getProduct(5)
]);

module.exports = products;