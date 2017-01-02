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
<script src="/built/app.js"></script>
</body>
</html>
