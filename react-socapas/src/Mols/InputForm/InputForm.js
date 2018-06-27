import React from "react";
import {
	Input,
	Label,
	FormGroup,
	FormFeedback
} from "reactstrap";
import "Mols/InputForm/styles.scss";

export const InputForm = ( props ) => {
	return (
		<FormGroup>
			<Label className={"InputForm--label"}>{props.title}</Label>
			<Input {...props} />
			<FormFeedback>Campo requerido!</FormFeedback>
		</FormGroup>
	);
};