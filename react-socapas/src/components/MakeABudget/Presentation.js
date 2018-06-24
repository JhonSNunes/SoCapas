import React, { Component } from "react";
import { object } from "prop-types";
import {
	Field
} from "redux-form";

export default class Presentation extends Component {
	render() {
		const me = this;
		const {
			handleSubmit
		} = me.props;

		return (
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Título</label>
						<Field
							name={"title"}
							component={"input"}
							type={"text"}
							placeholder={"Título"}
						/>
					</div>
					<div>
					</div>
					<div>
					</div>
				</form> 
			</div>
		);
	}
}
Presentation.contextTypes = {
	router: object 
}