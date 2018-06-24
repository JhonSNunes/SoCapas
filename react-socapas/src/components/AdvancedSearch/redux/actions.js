import {
	IS_OPEN,
	NAME_PRODUCT,
	CODE_PRODUCT
} from "components/AdvancedSearch/redux/constants";

export const setIsOpen = ( isOpen ) => ({
	type: IS_OPEN,
	isOpen
});

export const setNameProduct = ( nameProduct ) => ({
	type: NAME_PRODUCT,
	nameProduct
});

export const setCodeProduct = ( codeProduct ) => ({
	type: CODE_PRODUCT,
	codeProduct
});