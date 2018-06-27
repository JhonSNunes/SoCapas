<?php
	require_once "../../src/products/class.productsmodel.inc";

	error_log("ENTRROUUUUUUUUUUUUUUUUUUUUUUU");

	$model = new ProductsModel( $_REQUEST );
	$products = $model->fetch();

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json");

	echo json_encode( $products );