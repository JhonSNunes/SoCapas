import React, { Component } from "react";
import { object } from "prop-types";

export default class Presentation extends Component {
	render() {
		return (
			<div>
				<b>Home</b>
			</div>
		);
	}
}
Presentation.contextTypes = {
	router: object 
}