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
<h1>hi</h1>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js"></script>
<script src="/built/app.js"></script>
</body>
</html>
