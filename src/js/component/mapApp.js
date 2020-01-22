import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
//import * as comunaData from "../../data/chile_with_regions.json";
import mapStyles from "../../data/mapStyles.js";
import { Context } from "../store/appContext.js";
import imgPin from "../../img/logoPin.png";

function Map() {
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
							defaultZoom={11}
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
								onClick={() => {}}
							/>
							{store.eventsDetails.map((geoevent, index) => (
								<Marker
									key={index}
									position={{
										lat: Number(geoevent.lat),
										lng: Number(geoevent.longi)
									}}
									onClick={() => {
										setSelectedEvent(geoevent);
									}}
									/*icon={{
                url: `/skateboarding.svg`,
                scaledSize: new window.google.maps.Size(25, 25)
            }} Para cambiar el icono del marcador*/
								/>
							))}
							{selectedEvent && (
								<InfoWindow
									onCloseClick={() => {
										setSelectedEvent(null);
									}}
									position={{
										lat: Number(selectedEvent.lat),
										lng: Number(selectedEvent.longi)
									}}>
									<div>
										<h2>{selectedEvent.event_name}</h2>
										<p>{selectedEvent.start_time}</p>
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

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
	return (
		<div style={{ width: "50vw", height: "50vh" }}>
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}
