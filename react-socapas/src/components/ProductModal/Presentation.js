import React, { Component } from "react";
import UploadImageForm from "Mols/UploadImageForm/UploadImageForm";
import {
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";
import {
	Field
} from "redux-form";
import {
	InputForm
} from "Mols/InputForm/InputForm";
import "components/ProductModal/styles.scss";

export default class Presentation extends Component {
	constructor( props ) {
		super( props );

		const {
			cdproduct,
			fetchProductData
		} = props;
 
		if ( fetchProductData && cdproduct ) {
			fetchProductData( cdproduct );
		}

		this.state = {
			pictures: []
		}

		this.onDrop = this.onDrop.bind( this );
		this.toggleModal = this.toggleModal.bind( this );
	}

	toggleModal() {
		const me = this;
		const {
			isOpen,
			toggleProductModal
		} = me.props;

		if ( toggleProductModal ) {
			toggleProductModal( !isOpen );
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
			isLoading,
			isOpen,
			handleSubmit
		} = me.props;

		return (
			<Modal
				isOpen={isOpen}
				toggle={me.toggleModal}
				centered
				className={"ProductModal"}
				backdropClassName={"ProductModalBackground"}
			>
				<form>
					<ModalHeader>
						Produto
					</ModalHeader>
					<ModalBody>
						<Field
							name={"idproduct"}
							title={"Identificador"}
							component={InputForm}
							type={"text"}
							placeholder={"Identificador do produto"}
							required
							// invalid
						/>
						<Field
							name={"nmproduct"}
							title={"Nome"}
							component={InputForm}
							type={"text"}
							placeholder={"Nome do produto"}
							required
							// invalid
						/>
						<Field
							name={"dsproduct"}
							title={"Descrição"}
							component={InputForm}
							type={"textarea"}
							placeholder={"Descrição do produto"}
							style={{height: "200px"}}
						/>
						<UploadImageForm
			                onDrop={me.onDrop}
						/>
					</ModalBody>
					<ModalFooter>
						<div className={"ProductModal--footerButtons"}>
							<div className={"ProductModal--button"}>
								<Button className={"mx-0"} onClick={me.toggleModal}>
									Cancelar
								</Button>
							</div>
							<div className={"ProductModal--button"}>
								<Button className={"mx-0"} color="primary" onClick={handleSubmit}>
									Salvar
								</Button>
							</div>
						</div>
					</ModalFooter>
				</form>
			</Modal>
		);
	}
}