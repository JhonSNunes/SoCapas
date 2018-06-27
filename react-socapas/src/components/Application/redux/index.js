import { combineReducers } from "redux";

import reducer from "components/Application/redux/reducer";
import Product from "components/Products/redux/index";
import ProductModal from "components/ProductModal/redux/index";

import * as Selectors from "components/Application/redux/selectors";

export const getIsLogged = ( state ) => ( Selectors.getIsLogged( state ) );
export const getUserData = ( state ) => ( Selectors.getUserData( state ) );

export default combineReducers({
	Data: reducer,
	Product,
	ProductModal
});