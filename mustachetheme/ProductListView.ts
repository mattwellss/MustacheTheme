import { CollectionView, View } from 'backbone.marionette';
import { Model } from 'backbone';
import templateContext from './templateContext';
import GetsTemplates from './getstemplates';
import CollectionViewOptions = Marionette.CollectionViewOptions;
import ViewOptions = Backbone.ViewOptions;

interface ProductViewOptions <TModel extends Model> extends Backbone.ViewOptions <TModel> {
    templateRegistry: GetsTemplates
}

interface ProductListViewOptions <TModel extends Model> extends CollectionViewOptions <TModel> {
    childViewOptions: any
}

class ProductView extends View <Model> {
    tagName: 'li';
    className: 'item';
    template: string;
    templateContext: Object;
    templateRegistry: GetsTemplates;

    /**
     * Set the view's template context and template
     * @param options
     */
    constructor(options?: ProductViewOptions <Model>) {
        super(options);
        this.templateContext = templateContext;
        this.template = options.templateRegistry('catalog/product/listed_product.mustache');
    }
}

class EmptyProductListView extends View<Model> {
    template: string;
    templateContext: Object;
    constructor(options?: ProductViewOptions <Model>) {
        super(options);
        this.templateContext = templateContext;
        this.template = options.templateRegistry('catalog/product/list.mustache');
    }
}

export default class ProductListView extends CollectionView <Model, ProductView> {
    templateContext: Object;

    /**
     * Set view's template context and some child options
     * @param options
     */
    constructor(options?: ProductListViewOptions <Model>) {
        super(options);
        this.childView = ProductView;
        this.childViewOptions = options.childViewOptions;
        this.emptyView = EmptyProductListView;
        this.emptyViewOptions = options.childViewOptions;
        this.templateContext = templateContext;
    }
}