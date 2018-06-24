import React, { Component } from "react";
import { object } from "prop-types";
import QuickSearch from "components/QuickSearch/QuickSearch";
import AdvancedSearch from "components/AdvancedSearch/AdvancedSearch";
import ProductCard from "Mols/ProductCard/ProductCard";
import "components/Products/styles.css";

export default class Presentation extends Component {
	constructor( props ) {
		super( props );

		this.renderProductCards = this.renderProductCards.bind( this );
	}

	renderProductCards() {
		const me = this;
		const {
			products
		} = me.props;

		const parsedProducts = products.toJS();
		const cards = parsedProducts.map( ( el ) => (
			<ProductCard {...el} />
		) );

		return (
			<div style={{display: "flex", flexWrap: "wrap"}}>
				{cards}
			</div>
		);
	}

	render() {
		const me = this;

		return (
			<div className={"mx-3 mt-3"}>
				<div style={{display: "flex"}}>
					<div style={{width: "50%"}}>
						<QuickSearch />
					</div>
					<div style={{paddingLeft: "10px"}}>
						<AdvancedSearch />
					</div>
				</div>
				<div className={"Body mt-2 mb-3"}>
					{me.renderProductCards()}
				</div>
			</div>
		);
	}
}
Presentation.contextTypes = {
	router: object 
}