import reducer from "components/AdvancedSearch/redux/reducer";
import * as Selectors from "components/AdvancedSearch/redux/selectors";

const getSlice = ( state ) => ( state.Product.AdvancedSearch );
export const getIsOpen = ( state ) => ( Selectors.getIsOpen( getSlice( state ) ) );
export const getCodeProduct = ( state ) => ( Selectors.getCodeProduct( getSlice( state ) ) );
export const getNameProduct = ( state ) => ( Selectors.getNameProduct( getSlice( state ) ) );

export {
	setIsOpen,
	setNameProduct,
	setCodeProduct
} from "components/AdvancedSearch/redux/actions";

export default reducer;