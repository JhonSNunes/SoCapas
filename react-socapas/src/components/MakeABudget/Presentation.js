import React, { Component } from "react";
import { object } from "prop-types";
import {
	Field
} from "redux-form";
import {
	InputForm
} from "Mols/InputForm/InputForm";
import {
	NumericInputForm
} from "Mols/NumericInputForm/NumericInputForm";
import {
	Label,
	Button
} from "reactstrap";
import UploadImageForm from "Mols/UploadImageForm/UploadImageForm";
import "components/MakeABudget/styles.scss";

export default class Presentation extends Component {
	constructor( props ) {
		super( props );

		this.onDrop = this.onDrop.bind( this );

		this.state = {
			pictures: []
		}
	}

	onDrop( picture ) {
		this.setState({
			pictures: this.state.pictures.concat( picture )
		})
	}

	render() {
		const me = this;
		const {
			isLogged,
			handleSubmit
		} = me.props;

		return (
			<div className={"MakeABudget--container mt-3 mb-3"}>
				<form>
					<div className={"MakeABudget--header"}>
					</div>
					<div className={"MakeABudget--body"}>
						<Field
							name={"title"}
							title={"Título"}
							component={InputForm}
							type={"text"}
							placeholder={"Assunto do orçamento..."}
						/>
						<Field
							name={"product"}
							title={"Produto"}
							component={InputForm}
							type={"text"}
							placeholder={"Isso vai virar um lookup depois..."}
						/>
						<Field
							name={"qtproduct"}
							title={"Quantidade"}
							min={1}
							component={NumericInputForm}
						/>
						<UploadImageForm 
							onDrop={me.onDrop}
						/>
						<Field
							name={"dsproduct"}
							title={"Descrição"}
							component={InputForm}
							type={"textarea"}
							placeholder={"Descreva seu produto aqui..."}
							style={{height: "200px"}}
						/>
					</div>
					<div className={"MakeABudget--footer"}>
						<div className={"MakeABudget--footerContent"}>
							<Button color={"primary"} onClick={handleSubmit}>
								Solicitar orçamento
							</Button>
						</div>
					</div>
				</form> 
			</div>
		);
	}
}
Presentation.contextTypes = {
	router: object 
}