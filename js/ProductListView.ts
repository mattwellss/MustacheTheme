import { CollectionView, View } from 'backbone.marionette';
import { Model } from 'backbone';
import templateContext from './templateContext';
import templateRegistry from './templateRegistry';
import { extend } from 'underscore';

class ProductView extends View <Model> {
    tagName: 'li';
    className: 'item';
    template: string;
    templateContext: Object;

    initialize(options?: Backbone.ViewOptions <Backbone.Model>): void {
        super.initialize(options);
        this.templateContext = templateContext;
        this.template = templateRegistry('catalog/product/listed_product.mustache');
    }
}

export default class ProductListView extends CollectionView <Model, ProductView> {
    templateContext: Object;
    initialize(options?: Backbone.ViewOptions <Backbone.Model>): void {
        this.childView = ProductView;
        this.templateContext = extend(templateContext, {
            has_products: function () {
                return this.length;
            }
        });
        super.initialize(options);
    }

}