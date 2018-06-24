import React from "react";
import "Mols/ProductCard/styles.css";

const renderImage = ( imgPath ) => {
	let image = (
		<a className={"icon-camera"} />
	);

	if ( imgPath == 1 ) {
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

export default ( { imgPath, code, name } ) => {
	return (
		<div className={"CardBody"}>
			{renderImage( imgPath )}
			<div className={"CardBody--footer"}>
				<div className={"CardBody--title"}>
					{code.toUpperCase()}
				</div>
				<div className={"CardBody--subtitle"}>
					{name}
				</div>
			</div>
			<div className={"CardBody--overlay"}>
				<div className={"CardBody--buttons"}>
					<a className={"icon-pencil"} onClick={() => ( alert("edit") )} />
					<a className={"icon-trash"} onClick={() => ( alert("delete") )} />
				</div>
			</div>
		</div>
	);
};