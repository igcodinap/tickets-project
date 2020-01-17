import React, { useEffect, useContext, useState } from "react";
import eventMusicImg from "../../img/musica.jpg";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";
import "../../styles/event.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import App from "../component/mapApp.js";

export const Event = () => {
	const { store, actions } = useContext(Context);

	const [evento, capturaEvento] = useState({});

	useEffect(() => {
		const datos = fetch("http://2b4eafef.ngrok.io/event/" + store.selectedEvent)
			.then(response => response.json())
			.then(data => capturaEvento(data));
	}, []);

	console.log(evento);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-6">
					<div className="card bg-dark text-white">
						<img src={eventMusicImg} className="card-img" alt="..." />
						<div className="card-img-overlay d-flex flex-column justify-content-end">
							<div className="container">
								<div className="row justify-content-end">
									<div className="col-9" />
									<div className="col-3 align-self-end">
										<button type="button" className="btn btn-warning">
											<i className="fa fa-calendar" aria-hidden="true" />
											AddMyCalendar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title">{evento.event_name}</h2>
						</div>
						<div className="jumbotron">
							<h1 className="display-4 center">
								<App />{" "}
							</h1>
						</div>

						<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="pills-home-tab"
									data-toggle="pill"
									href="#pills-home"
									role="tab"
									aria-controls="pills-home"
									aria-selected="true">
									Description
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="pills-profile-tab"
									data-toggle="pill"
									href="#pills-profile"
									role="tab"
									aria-controls="pills-profile"
									aria-selected="false">
									Fechas y Horarios
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="pills-contact-tab"
									data-toggle="pill"
									href="#pills-contact"
									role="tab"
									aria-controls="pills-contact"
									aria-selected="false">
									Donde Comprar
								</a>
							</li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="pills-home"
								role="tabpanel"
								aria-labelledby="pills-home-tab">
								{evento.description}
							</div>
							<div
								className="tab-pane fade"
								id="pills-profile"
								role="tabpanel"
								aria-labelledby="pills-profile-tab">
								{evento.start_time}
							</div>
							<div
								className="tab-pane fade"
								id="pills-contact"
								role="tabpanel"
								aria-labelledby="pills-contact-tab">
								{evento.ticket_url}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
