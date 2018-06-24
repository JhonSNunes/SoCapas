import immutable from "immutable";
import {
	IS_OPEN,
	NAME_PRODUCT,
	CODE_PRODUCT
} from "components/AdvancedSearch/redux/constants";

const inicial = immutable.fromJS({
	isOpen: false,
	nameProduct: undefined,
	codeProduct: undefined
});

export default ( state = inicial, action ) => {
	let newState = state;

	switch( action.type ) {
		case IS_OPEN:
			newState = newState.set( "isOpen", action.isOpen );
			break;

		case NAME_PRODUCT:
			newState = newState.set( "nameProduct", action.nameProduct );
			break;

		case CODE_PRODUCT:
			newState = newState.set( "codeProduct", action.codeProduct );
			break;

		default:
			break;
	}
	return newState;
};