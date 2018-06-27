import {
	IS_LOADING,
	IS_OPEN,
	LOAD_PRODUCT_DATA
} from "components/ProductModal/redux/constants";

const setIsLoading = ( isLoading ) => ({
	type: IS_LOADING,
	isLoading
});

const setLoadProducts = ( data ) => ({
	type: LOAD_PRODUCT_DATA,
	data
});

export const setIsOpen = ( isOpen ) => ({
	type: IS_OPEN,
	isOpen
});

export const fetchProductData = ( cdproduct ) => (
	( dispatch, getState ) => {
		debugger;
		dispatch( setIsLoading( true ) );
		let a = 2;
		dispatch( setLoadProducts( {
			cdproduct: 1,
			idproduct: "bebé",
			nmproduct: "legal",
			dsproduct: "legal mesmo"
		} ) );
		return 1;
	}
);