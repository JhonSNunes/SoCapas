import axios from "axios";
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

export const fetchProducts = ( params ) => (
	( dispatch ) => {
		dispatch( setIsLoading( true ) );

		axios({
			method: "post",
			url: "http://localhost:81/Socapas/wwwroot/products/products.php",
			data: {
				teste: "Oi"
			}
		}).then( ( response ) => {
			debugger;
			dispatch( setLoadProducts( {} ) );
		} );
	}
);