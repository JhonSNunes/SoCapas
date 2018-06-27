import { connect } from "react-redux";
import Presentation from "components/ProductCard/Presentation";
import {
	setIsOpen,
	getIsOpen
} from "components/ProductModal/redux/index";

export default connect(
	( state ) => ({
		isOpen: getIsOpen( state ) 
	}),
	( dispatch ) => ({
		openProductModal() {
			dispatch( setIsOpen( true ) );
		}
	})
)( Presentation );