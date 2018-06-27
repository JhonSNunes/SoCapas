import immutable from "immutable";
import {
	IS_LOADING,
	LOAD_PRODUCTS
} from "components/Products/redux/constants";

const inicial = immutable.fromJS({
	isLoading: false,
	products: immutable.fromJS([
		immutable.fromJS({})
	])
});

export default ( state = inicial, action ) => {
	let newState = state;

	switch( action.type ) {
		case IS_LOADING:
			newState = newState.set( "isLoading", action.isLoading );
			break;

		case LOAD_PRODUCTS:
			newState = newState.set( "products", immutable.fromJS( action.products ) ).set( "isLoading", false );
			break;

		default:
			break;
	}
	return newState;
};