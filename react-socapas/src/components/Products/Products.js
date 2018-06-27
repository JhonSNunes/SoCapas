import { connect } from "react-redux";
import Presentation from "components/Products/Presentation";
import {
	getProducts,
	getIsLoading,
	fetchProducts
} from "components/Products/redux/index";

export default connect(
	( state ) => ({
		isLoading: getIsLoading( state ),
		products: getProducts( state ) 
	}),
	( dispatch ) => ({
		fetchProducts() {
			fetchProducts();
		}
	})
)( Presentation );