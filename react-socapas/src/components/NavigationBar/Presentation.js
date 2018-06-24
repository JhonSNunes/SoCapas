import React, { Component } from "react";
import { object } from "prop-types";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
	Link
} from "react-router-dom";

export default class Presentation extends Component {
	constructor( props ) {
		super( props );

		this.handleClickProducts = this.handleClickProducts.bind( this );
		this.handleClickAbout = this.handleClickAbout.bind( this );
		this.handleClickMakeABudget = this.handleClickMakeABudget.bind( this );
	}

	handleClickProducts() {
		const me = this;

	}

	handleClickAbout() {
		const me = this;

	}

	handleClickMakeABudget() {
		const me = this;

	}

	render() {
		const me = this;

		return (
			<Navbar color="light" light expand="md">
				<NavbarBrand href={"/"}>So capas</NavbarBrand>
				<Nav className="ml-auto">
					<NavItem>
						<NavLink href={"/"} className={"icon-home-outline"}>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href={"/products"} className={"icon-th-large-outline"}>Produtos</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href={"/about"} className={"icon-doc-text"}>Sobre</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href={"/makeABudget"} className={"icon-basket"}>Faça um orçamento</NavLink>
					</NavItem>
				</Nav>
				<Nav className="ml-auto">
					<NavItem>
						<NavLink href={"/makeABudget"} className={"icon-login"}>Login</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}
Presentation.contextTypes = {
	router: object 
}