import { combineReducers } from "redux";
import reducer from "components/Products/redux/reducer";
import AdvancedSearch from "components/AdvancedSearch/redux/index";

import * as Selectors from "components/Products/redux/selectors";

const getSlice = ( state ) => ( state.Product.Record );
export const getIsLoading = ( state ) => ( Selectors.getIsLoading( getSlice( state ) ) );
export const getProducts = ( state ) => ( Selectors.getProducts( getSlice( state ) ) );

export {
	fetchProductData
} from "components/Products/redux/actions";

export default combineReducers({
	Record: reducer,
	AdvancedSearch	
});