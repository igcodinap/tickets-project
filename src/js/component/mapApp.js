import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as comunaData from "../../data/chile_with_regions.json";
import mapStyles from "../../data/mapStyles.js";

function Map() {
	const [selectedComuna, setSelectedComuna] = useState(null);

	useEffect(() => {
		const listener = e => {
			if (e.key === "Escape") {
				setSelectedComuna(null);
			}
		};
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);

	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: -33.448891, lng: -70.669266 }}
			defaultOptions={{ styles: mapStyles }}>
			{comunaData.Metropolitana.map((comunaM, index) => (
				<Marker
					key={index}
					position={{
						lat: Number(comunaM.lat),
						lng: Number(comunaM.lng)
					}}
					onClick={() => {
						setSelectedComuna(comunaM);
					}}
					/*icon={{
						url: `/skateboarding.svg`,
						scaledSize: new window.google.maps.Size(25, 25)
					}} Para cambiar el icono del marcador*/
				/>
			))}
			{selectedComuna && (
				<InfoWindow
					onCloseClick={() => {
						setSelectedComuna(null);
					}}
					position={{
						lat: Number(selectedComuna.lat),
						lng: Number(selectedComuna.lng)
					}}>
					<div>
						<h2>{selectedComuna.name}</h2>
						<p>Hora del Evento</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
	return (
		<div style={{ width: "50vw", height: "50vh" }}>
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
					process.env.REACT_APP_GOOGLE_KEY
				}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}
