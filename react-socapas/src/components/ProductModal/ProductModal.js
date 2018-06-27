import { compose } from "redux";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import Presentation from "components/ProductModal/Presentation";
import {
	getIsLoading,
	getIsOpen,
	setIsOpen,
	fetchProductData
} from "components/ProductModal/redux/index";

export default compose(
	connect(
		( state ) => ({
			isLoading: getIsLoading( state ),
			isOpen: getIsOpen( state ),
			initialValues: {
				nmproduct: 'aaaa'
			}
		}),
		( dispatch ) => ({
			toggleProductModal( isOpen ) {
				dispatch( setIsOpen( isOpen ) );
			},
			fetchProductData( cdproduct ) {
				fetchProductData( cdproduct );
			}
		})
	),
	reduxForm({
		form: "productModal",
		onSubmit: ( values, dispatch, props ) => {
			debugger;
		}
	})

)( Presentation );