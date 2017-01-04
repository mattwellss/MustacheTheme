<?php
$file = $_SERVER['DOCUMENT_ROOT'] . $_SERVER['REQUEST_URI'];
if (file_exists($file) && is_file($file)) {
    return false;
} ?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
</head>
<body>
<div class="category-products">
    <ul class="products-grid"></ul>
</div>
<script>
    function templateRegistry (name) {
        var templates = {'catalog/product/listed_product.mustache':
            '<?= str_replace(PHP_EOL, "\\n", file_get_contents(__DIR__ . '/../design/template/catalog/product/listed_product.mustache')) ?>'};
        return templates[name];
    };
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js"></script>
<script src="/built/app.js"></script>
</body>
</html>
