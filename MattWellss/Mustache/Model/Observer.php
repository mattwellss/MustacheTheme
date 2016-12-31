<?php

namespace MattWellss\Mustache;

use Mage;

class Model_Observer
{
    /**
     * @param \Varien_Event_Observer $observer
     * @return void
     */
    public function copyCatalogProductFieldsetToMustache(\Varien_Event_Observer $observer)
    {
        /** @var \Varien_Object $target */
        $target = $observer->getTarget();

        /** @var \Mage_Catalog_Block_Product_List $source */
        $source = $observer->getSource();

        $target->addData([
            'has_products' => function () use ($source) {
                return count($source->getLoadedProductCollection()) > 0;
            },
            'products' => function () use ($source) {
                return $source->getLoadedProductCollection();
            }
        ]);
    }

    public function prepareProductDataForMustache(\Varien_Event_Observer $observer)
    {
        /** @var \Varien_Object $target */
        $target = $observer->getTarget();

        /** @var \MattWellss_MageStache_Block_Mustache_Template $source */
        $source = $observer->getSource();

        /** @var \Mage_Catalog_Model_Product $tempProduct */
        $tempProduct = Mage::getModel('catalog/product', $source->getData());

        /** @var \Mage_Catalog_Block_Product_List $productList */
        $productList = $source->getParentBlock()->getChild('product_list.nested');

        $wishlistHelper = Mage::helper('wishlist');
        $target->addData([
            'product_link' => $tempProduct->getProductUrl(),
            'price_html' => $productList->getPriceHtml($tempProduct, true),
            'img_src' => Mage::helper('catalog/image')->init($tempProduct, 'small_image')->keepFrame(false)->resize(400),
            'name_after_htmls' => array_map(function ($_nameAfterChildName) use ($productList, $tempProduct) {
                return $productList->getChild('name.after')
                    ->getChild($_nameAfterChildName)
                    ->setProduct($tempProduct)
                    ->toHtml();
            }, $productList->getChild('name.after')->getSortedChildren()),
            'wishlist_add_url' => $wishlistHelper->isAllow()
                ? $wishlistHelper->getAddUrl($tempProduct) : '',
            'compare_add_url' => $productList->getAddToCompareUrl($tempProduct)
        ]);

        if ($target->getData('has_rating_summary')) {
            $target->setData('rating_summary_html', $productList->getReviewsSummaryHtml($tempProduct, 'short'));
        }

    }
}