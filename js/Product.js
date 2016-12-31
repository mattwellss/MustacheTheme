var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    __: function () {
        return function (text) {
            return text;
        }
    },
    quoteEscape: function () {
        return function (text) {
            return text;
        }
    },
    stripTags: function () {
        return function (text) {
            return text;
        }
    }
});