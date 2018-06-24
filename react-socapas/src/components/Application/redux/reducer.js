import immutable from "immutable";
import {
	IS_LOGGED,
	USER_DATA
} from "components/Application/redux/constants";

const inicial = immutable.fromJS({
	isLogged: false,
	userData: immutable.fromJS({
		login: undefined,
		nmuser: undefined,
		email: undefined,
		photo: undefined
	})
});

export default ( state = inicial, action ) => {
	let newState = state;

	switch( action.type ) {
		case IS_LOGGED:
			newState = newState.set( "isLogged", immutable.fromJS( action.isLogged ) );
			break;

		case USER_DATA:
			newState = newState.set( "userData", immutable.fromJS( action.userData ) ).set( "isLogged", action.isLogged );
			break;

		default:
			break;
	}
	return newState;
};