import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";	
import Presentation from "components/MakeABudget/Presentation";

export default compose(
	connect(
		( state ) => ({

		}),
		( dispatch ) => ({

		})
	),
	reduxForm({
		form: "makeABudget",
		onSubmit: ( props ) => {
			debugger;
		}
	})
)( Presentation );