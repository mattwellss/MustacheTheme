const ProductList = require('./ProductListView');
const products = require('./fakedata');
const jQuery = require('jquery');
require('backbone').$ = jQuery;

require('backbone.marionette').Renderer.render = function (template, data) {
    return template.render(data);
};

jQuery(function () {
    const pl = new ProductList({
        collection: products,
        el: document.querySelector('.products-grid')
    });
    pl.render();
});