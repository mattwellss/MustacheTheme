/** @global jQuery */

var Hogan = require('hogan.js');
var Backbone = require('backbone');
var fs = require('fs');
Backbone.$ = jQuery;

var listTemplate = fs.readFileSync(__dirname + '/../design/template/catalog/product/list.mustache');
var productTemplate = fs.readFileSync(__dirname + '/../design/template/catalog/product/listed_product.mustache');

var list = Hogan.compile(listTemplate.toString());
var product = Hogan.compile(productTemplate.toString());

// var listTemplate = new Hogan.template(require('../../js/catalog/product/list.mustache'), '', Hogan);
// var productTemplate = new Hogan.template(require('../../js/catalog/product/listed_product.mustache'), '', Hogan);

module.exports = Backbone.View.extend({
    el: 'body',
    render: function () {
        this.$el.html(list.render(this.model, {'mustache.listed.product': product}));
        return this;
    }
});