import immutable from "immutable";
import {
	IS_LOADING,
	IS_OPEN,
	LOAD_PRODUCT_DATA
} from "components/ProductModal/redux/constants";

const inicial = immutable.fromJS({
	isLoading: false,
	isOpen: false,
	data: immutable.fromJS({})
});

export default ( state = inicial, action ) => {
	let newState = state;

	switch( action.type ) {
		case IS_LOADING:
			newState = newState.set( "isLoading", action.isLoading );
			break;

		case IS_OPEN:
			newState = newState.set( "isOpen", action.isOpen );
			break;			

		case LOAD_PRODUCT_DATA:
			newState = newState.set( "data", immutable.fromJS( action.data ) ).set( "isLoading", false );
			break;

		default:
			break;
	}
	return newState;
};