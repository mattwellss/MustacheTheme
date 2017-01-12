import ProductListView from 'mustachetheme/ProductListView';
import {products, addProduct, removeProduct} from './fakedata';
import {Renderer} from 'backbone.marionette';
import Mustache = require('mustache');
import templateRegistry from 'mustachetheme/templateRegistry';

Renderer.render = function (template, data) {
    return Mustache.render(template, data);
};

let productListView = new ProductListView({
    collection: products,
    el: document.querySelector('.products-grid'),
    childViewOptions: {templateRegistry: templateRegistry}
});
productListView.render();

document.querySelector('#add').addEventListener('click',  () => addProduct(products));
document.querySelector('#remove').addEventListener('click', () => removeProduct(products));
