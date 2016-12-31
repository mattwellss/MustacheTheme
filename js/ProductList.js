var Backbone = require('backbone');
module.exports = Backbone.Collection.extend({
    __: function () {
        return function (text) {
            return text;
        }
    },
    has_products: function () {
        return this.length;
    },
    products: function () {
        return this.models.map(function (model) { return model.toJSON(); });
    }
});