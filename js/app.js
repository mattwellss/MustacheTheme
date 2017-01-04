var ProductList = require('./ProductListView');
var products = require('./fakedata');
var jQuery = require('jquery');
require('backbone').$ = jQuery;
var Mustache = require('mustache');

require('backbone.marionette').Renderer.render = function (template, data) {
    return Mustache.render(template, data);
};
console.time('start');
var pl = new ProductList({
    collection: products,
    el: document.querySelector('.products-grid'),
});
pl.render();
console.timeEnd('start');