# Example Mustache Magento Theme

This theme can be used in combination with the `mattwellss/magestache` plugin to render layered category products with Mustache templates.

## Installation

Run `composer require mattwellss/mustache-theme` in your Magento app's root (or wherever `composer.json` is found).

## WIP JavaScript frontend

In the `frontend` folder is a work-in-progress JS frontend. To see what's (possibly) planned, do the following:

* `yarn install` (get [yarn](https://yarnpkg.com/en/docs/install) first, of course)
* `php -S 127.0.0.1:8000 -t js js/index.php`
  * N.B. the `fakedata.js` data points to images available at `127.0.0.1:8080`. This probably won't work for you.
  * Also, be sure to run the parent command from the project's root directory!