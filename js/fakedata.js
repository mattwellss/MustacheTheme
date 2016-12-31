var Product = require('./Product');
var ProductList = require('./ProductList');

function getProduct() {
    return new Product({
        "sku": "mtk000c",
        "name": "Chelsea Tee",
        "entity_id": "408",
        "has_rating_summary": null,
        "product_link": "http://127.0.0.1:8080/men/tees-knits-and-polos/chelsea-tee-585.html?___SID=U",
        "price_html": "<div class=\"price-box\"> <span class=\"regular-price\" id=\"product-price-408\">  <span class=\"price\">$75.00</span> </span>    </div>",
        "img_src": 'http://127.0.0.1:8081/media/catalog/product/cache/1/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/m/t/mtk000t.jpg',
        "name_after_htmls": [
            "<ul class=\"configurable-swatch-list configurable-swatch-color clearfix\">  <li class=\"option-black is-media\" data-product-id=\"408\" data-option-label=\"black\"> <a href=\"javascript:void(0)\" name=\"black\" class=\"swatch-link swatch-link-92 has-image\" title=\"black\" style=\"height: 17px; width: 17px;\">     <span class=\"swatch-label\" style=\"height: 15px; width: 15px; line-height: 15px;\"><img src=\"http://127.0.0.1:8081/media/catalog/swatches/1/15x15/media/black.png\" alt=\"black\" width=\"15\" height=\"15\" />    </span>      </a>    </li>  <li class=\"option-white is-media\" data-product-id=\"408\" data-option-label=\"white\"> <a href=\"javascript:void(0)\" name=\"white\" class=\"swatch-link swatch-link-92 has-image\" title=\"white\" style=\"height: 17px; width: 17px;\">     <span class=\"swatch-label\" style=\"height: 15px; width: 15px; line-height: 15px;\"><img src=\"http://127.0.0.1:8081/media/catalog/swatches/1/15x15/media/white.png\" alt=\"white\" width=\"15\" height=\"15\" />    </span>      </a>    </li>  <li class=\"option-blue is-media\" data-product-id=\"408\" data-option-label=\"blue\"> <a href=\"javascript:void(0)\" name=\"blue\" class=\"swatch-link swatch-link-92 has-image\" title=\"blue\" style=\"height: 17px; width: 17px;\">     <span class=\"swatch-label\" style=\"height: 15px; width: 15px; line-height: 15px;\"><img src=\"http://127.0.0.1:8081/media/catalog/swatches/1/15x15/media/blue.png\" alt=\"blue\" width=\"15\" height=\"15\" />    </span>      </a>    </li>    </ul>"
        ],
        "wishlist_add_url": "http://127.0.0.1:8080/wishlist/index/add/product/408/form_key/pSNv59aD5zYvOYyR/?___SID=U",
        "compare_add_url": "http://127.0.0.1:8080/catalog/product_compare/add/product/408/uenc/aHR0cDovLzEyNy4wLjAuMTo4MDgwL21lbi90ZWVzLWtuaXRzLWFuZC1wb2xvcy5odG1s/form_key/pSNv59aD5zYvOYyR/?___SID=U"
    });
}

var products = new ProductList([
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct()
]);

module.exports = products;