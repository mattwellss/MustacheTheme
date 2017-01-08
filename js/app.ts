import ProductListView from './ProductListView';
import products from './fakedata';
import * as jQuery from 'jquery';
import * as Backbone from 'backbone';
import { Renderer } from 'backbone.marionette';
import Mustache = require('mustache');

Backbone.$ = jQuery;
Renderer.render = function (template, data) {
    return Mustache.render(template, data);
};

console.time('start');

let pl = new ProductListView({
    collection: products,
    el: document.querySelector('.products-grid'),
});
pl.render();

console.timeEnd('start');