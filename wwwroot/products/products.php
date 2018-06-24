<?php
	require_once "../../src/products/class.productsmodel.inc";

	$model = new ProductsModel( $_REQUEST );
	$products = $model->selectAllUsers();

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json");

	echo json_encode( $products );