import {
	IS_LOADING,
	LOAD_PRODUCTS
} from "components/Products/redux/constants";

const setIsLoading = ( isLoading ) => ({
	type: IS_LOADING,
	isLoading
});

const setLoadProducts = ( products ) => ({
	type: LOAD_PRODUCTS,
	products
});