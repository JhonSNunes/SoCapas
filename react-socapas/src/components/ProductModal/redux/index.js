import reducer from "components/ProductModal/redux/reducer";

import * as Selectors from "components/ProductModal/redux/selectors";

const getSlice = ( state ) => ( state.ProductModal );
export const getIsLoading = ( state ) => ( Selectors.getIsLoading( getSlice( state ) ) );
export const getIsOpen = ( state ) => ( Selectors.getIsOpen( getSlice( state ) ) );
export const getProduct = ( state ) => ( Selectors.getProduct( getSlice( state ) ) );

export {
	setIsOpen,
	fetchProductData
} from "components/ProductModal/redux/actions";

export default reducer;