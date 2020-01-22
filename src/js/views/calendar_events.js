import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

export const CalendarEvents = () => {
	const { store, actions } = useContext(Context);

	const seleccionaEvento = e => {
		actions.selectEvent(e.target.title);
	};

	if (store.selectedCalendarEvents.events_assistance.length > 0) {
		return (
			<div className="container">
				<h2 className="d-flex justify-content-center">
					Eventos del Calendario: {store.selectedCalendar.name_calendar}
				</h2>
				<div className="media d-flex justify-content-center">
					<ul className="list-unstyled">
						{store.selectedCalendarEvents.events_assistance.map((item, index) => {
							return (
								<div className="container" key={index}>
									<div className="row">
										<Link
											to="/events-category/event"
											className="text-decoration-none"
											onClick={seleccionaEvento}
											key={index}>
											<li className="media" key={index}>
												<img
													src={item.event_photo_url}
													className="mr-3"
													alt="..."
													width="65 px"
													eight="65px"
													title={item.event_id}
												/>
												<div className="media-body">
													<h5 className="mt-0 mb-1" title={item.event_id}>
														{item.event_name}
													</h5>
													<p title={item.event_id}>{item.start_time}</p>
												</div>
											</li>
										</Link>
										<div>
											<button
												type="button"
												className="close  align-top d-flex justify-content-end"
												aria-label="Close">
												<span className="text-danger" aria-hidden="true">
													&times;
												</span>
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Selecciona un Calendario</h1>
			</div>
		);
	}
};
