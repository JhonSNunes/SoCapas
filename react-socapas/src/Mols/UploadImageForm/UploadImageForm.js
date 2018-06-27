import React, { Component } from "react";
import { func } from "prop-types";
import ImageUploader from "react-images-upload";
import {
	Label
} from "reactstrap";
import "Mols/UploadImageForm/styles.scss";

export default class Presentation extends Component {
	render() {
		const me = this;
		const {
			onDrop,
			title
		} = me.props;

		return (
			<div className={"UploadImageForm--body"}>
				<Label className={"UploadImageForm--label"}>{title}</Label>
				<div>
					<ImageUploader
						withPreview
		                className={"UploadImageForm--content"}
		                buttonType={"button"}
		                buttonText={"Escolher imagem"}
		                onChange={onDrop}
		                imgExtension={[".jpg", ".gif", ".png"]}
		                maxFileSize={20971520}
					/>
				</div>
			</div>
		);
	}
}
Presentation.propTypes = {
	onDrop: func.isRequired
};
Presentation.defaultProps = {
	title: "Imagem"
};