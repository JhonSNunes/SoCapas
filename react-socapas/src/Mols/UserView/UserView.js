import React, { Component } from "react";
import { object, string } from "prop-types";
import "Mols/UserView/styles.scss";

export default class Presentation extends Component {
	render() {
		const me = this;
		const {
			size,
			imgPath
		} = me.props;

		return (
			<img
				src={imgPath}
				width={size}
				height={size}
				className={"UserView--circle"}
			/>
		);
	}
}
Presentation.contextTypes = {
	router: object
}
Presentation.propTypes = {
	imgPath: string.isRequired
}
Presentation.defaultProps = {
	size: "50"
}