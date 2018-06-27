import immutable from "immutable";
import {
	IS_LOADING,
	LOAD_PRODUCTS
} from "components/Products/redux/constants";

const inicial = immutable.fromJS({
	isLoading: false,
	products: immutable.fromJS([
		immutable.fromJS({
			cdproduct: 1,
			idproduct: "idproduct_1",
			nmproduct: "produto_1",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 2,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 3,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 4,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 5,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 6,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 7,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 8,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 9,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 10,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		}),
		immutable.fromJS({
			cdproduct: 11,
			idproduct: "idproduct_2",
			nmproduct: "produto_2",
			description: "blalblalb",
			imgPath: undefined
		})
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