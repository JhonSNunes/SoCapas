import React, { Component } from "react";
import ProductModal from "components/ProductModal/ProductModal";
import "components/ProductCard/styles.scss"

export default class Presentation extends Component {
	constructor( props ) {
		super( props );

		this.onClickEdit = this.onClickEdit.bind( this );
	}

	renderImage( imgPath ) {
		let image = (
			<a className={"icon-camera"} />
		);

		if ( imgPath ) {
			return (
				image = (
					<img src={imgPath} />
				)
			);
		}

		return (
			<div className={"CardBody--image"}>
				{image}
			</div>
		);
	};

	onClickEdit() {
		const me = this;
		const {
			isOpen,
			openProductModal
		} = me.props;

		if ( openProductModal && !isOpen ) {
			openProductModal( true );
		}
	}

	onClickDelete( cdproduct ) {
		const me = this;
		const {
			deleteProduct
		} = me.props;

		if ( deleteProduct && cdproduct ) {
			deleteProduct( cdproduct );
		}
	}

	render() {
		const me = this;
		const {
			cdproduct,
			idproduct,
			nmproduct,
			imgPath
		} = me.props;

		return (
			<div className={"CardBody"}>
				{me.renderImage( imgPath )}
				<div className={"CardBody--footer"}>
					<div className={"CardBody--title"}>
						{idproduct.toUpperCase()}
					</div>
					<div className={"CardBody--subtitle"}>
						{nmproduct}
					</div>
				</div>
				<div className={"CardBody--overlay"}>
					<div className={"CardBody--buttons"}>
						<a className={"icon-pencil"} onClick={me.onClickEdit} />
						<a className={"icon-trash"} onClick={me.onClickDelete.bind( me, cdproduct )} />
					</div>
				</div>
				<ProductModal cdproduct={cdproduct} />
			</div>
		);
	}
}