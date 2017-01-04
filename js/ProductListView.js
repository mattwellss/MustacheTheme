var Marionette = require('backbone.marionette');
var templateContext = require('./templateContext');

var productTemplate = require('./templateRegistry')('catalog/product/listed_product.mustache');
var extend = require('underscore').extend;

// Why aren't the products instances of Product?
module.exports = Marionette.CollectionView.extend({
    childView: Marionette.View.extend({
        tagName: 'li',
        className: 'item',
        template: productTemplate,
        templateContext: templateContext
    }),
    templateContext: extend(templateContext, {
        has_products: function () {
            return this.length;
        }
    })
});