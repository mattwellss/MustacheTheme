const Hogan = require('hogan.js');
const Marionette = require('backbone.marionette');
const fs = require('fs');

const productTemplate = fs.readFileSync(__dirname + '/../design/template/catalog/product/listed_product.mustache').toString();

module.exports = Marionette.CollectionView.extend({
    childView: Marionette.View.extend({
        tagName: 'li',
        className: 'item',
        template: Hogan.compile(productTemplate)
    })
});