import React, { Component } from "react";
import { object } from "prop-types";
import omit from "lodash/omit";
import {
	Input,
	Label,
	Button,
	Popover,
	PopoverHeader,
	PopoverBody
} from "reactstrap";

export default class Presentation extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isOpen: false
		};

		this.onTogglePopover = this.onTogglePopover.bind( this );
	}

	onTogglePopover() {
		const me = this;
		const {
			isOpen
		} = me.state;

		me.setState({
			isOpen: !isOpen
		});
	}

	render() {
		const me = this;
		const {
			body
		} = me.props;
		const {
			isOpen
		} = me.state;

		let omitedProps = omit( me.props, "body" );

		return (
			<div>
				<Button id="popover" onClick={me.onTogglePopover}>
					<spam className={"icon-cog-alt"}>Avançado</spam>
				</Button>
				<Popover placement="bottom" isOpen={isOpen} target={"popover"} toggle={me.onTogglePopover}>
					<PopoverHeader>
						Pesquisa avançada - Produtos
					</PopoverHeader>
					<PopoverBody>
						<div className={"mb-3"}>
							<Label className={"mb-0"}>Nome</Label>
							<Input type="input" name="name"/>
						</div>
						<div className={"mb-3"}>
							<Label className={"mb-0"}>Código do produto</Label>
							<Input type="input" name="code"/>
						</div>
						<Button className={"icon-search-1"}>Aplicar</Button>
					</PopoverBody>
				</Popover>
			</div>
		);
	}
}
Presentation.contextTypes = {
	router: object 
}