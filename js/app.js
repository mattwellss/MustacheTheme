var ProductList = require('./ProductListView');
var products = require('./fakedata');

$(function () {
    var pl = new ProductList({
        model: products
    });
    pl.render();
});