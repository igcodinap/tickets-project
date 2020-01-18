import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import mapStyles from "../../data/mapStyles.js";
import { Context } from "../store/appContext.js";
import imgPin from "../../img/logoPin.png";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function MapEvent() {
	const [selectedEvent, setSelectedEvent] = useState(null);

	useEffect(() => {
		const listener = e => {
			if (e.key === "Escape") {
				setSelectedEvent(null);
			}
		};
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);

	return (
		<div className="container">
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<GoogleMap
							defaultZoom={15}
							defaultCenter={{
								lat: Number(store.geomap.coords.latitude),
								lng: Number(store.geomap.coords.longitude)
							}}
							defaultOptions={{ styles: mapStyles }}>
							<Marker
								position={{
									lat: Number(store.geomap.coords.latitude),
									lng: Number(store.geomap.coords.longitude)
								}}
								title={"AQUI ESTAS"}
								icon={{
									url: imgPin,
									scaledSize: new google.maps.Size(50, 50),
									origin: new google.maps.Point(0, 0),
									anchor: new google.maps.Point(5, 50)
								}}
								onClick={() => {
									setSelectedEvent("Evento xxx");
								}}
							/>

							{selectedEvent && (
								<InfoWindow
									onCloseClick={() => {
										setSelectedEvent(null);
									}}
									position={{
										lat: Number(store.geomap.coords.latitude),
										lng: Number(store.geomap.coords.longitude)
									}}>
									<div>
										<h2>{} Evento XXX </h2>
										<p>Hora del Evento</p>
									</div>
								</InfoWindow>
							)}
						</GoogleMap>
					);
				}}
			</Context.Consumer>
		</div>
	);
}

const MapWrapped = withScriptjs(withGoogleMap(MapEvent));

export default function AppEvent() {
	return (
		<div style={{ width: "45vw", height: "55vh" }}>
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}
