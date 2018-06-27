import React, { Component } from "react";
import UserView from "Mols/UserView/UserView";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import photo from "components/About/image/joaoPhoto.png";
import "components/About/styles.scss";

const GoogleMapsWrapper = withScriptjs(
	withGoogleMap( ( props ) => (
		<GoogleMap {...props}>
			{props.children}
		</GoogleMap>
	) )
);

export default class Presentation extends Component {
	render() {
		return (
			<div className={"About--container mt-3"}>
				<div>
					<UserView
						imgPath={photo}
						size={"200"}
					/>
				</div>
				<div>
					Oiiii AAAAAAAAAAAAAAAAAH
				</div>
				<div>
					<GoogleMapsWrapper
  					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
						defaultZoom={8}
						defaultCenter={{ lat: -26.2691296, lng: -48.8664164 }}
					>
						{<Marker position={{ lat: -26.2691296, lng: -48.8664164 }} />}
					</GoogleMapsWrapper>
				</div>
			</div>
		);
	}
}