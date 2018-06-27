import React from "react";
import NumericInput from "react-numeric-input"
import {
	Label
} from "reactstrap";
import "Mols/NumericInputForm/styles.scss";

export const NumericInputForm = ( props ) => {
	return (
		<div className={"NumericInputForm--body"}>
			<Label className={"NumericInputForm--label"}>{props.title}</Label>
			<div>
				<NumericInput 
					{...props}
					className={"NumericInputForm--component"}
				/>
			</div>
		</div>
	);
};