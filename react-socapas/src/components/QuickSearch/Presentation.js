import React, { Component } from "react";
import { object } from "prop-types";
import { Input, Button } from "reactstrap";

export default class Presentation extends Component {
	render() {
		return (
			<div style={{display: "flex"}}>
				<Input type="input" name="quickSearch" placeholder="Pesquisa rápida" />
				<div style={{paddingLeft: "5px"}}>
					<Button>
						<spam className={"icon-search-1"}>Pesquisar</spam>
					</Button>
				</div>
			</div>
		);
	}
}
Presentation.contextTypes = {
	router: object 
}