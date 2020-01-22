import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CalendarEvents } from "./calendar_events.js";
import "../../styles/home.scss";
import { Button, InputGroup, Label, Input, InputGroupAddon } from "reactstrap";

export const CreateCalendar = () => {
	const { store, actions } = useContext(Context);

	const [datosNuevoCalendario, guardaDatosNuevoCalendario] = useState({
		name_calendar: "",
		description: "",
		calendar_id_owner: store.data_usuario_conectado[1].user_id
	});

	const obtenerDatosNuevoCalendario = e => {
		guardaDatosNuevoCalendario({
			...datosNuevoCalendario,
			[e.target.title]: e.target.value
		});
	};

	const calendarCreation = e => {
		e.preventDefault();
		fetch(`${store.url_prefix}/calendars`, {
			method: "POST",
			body: JSON.stringify(datosNuevoCalendario),
			headers: { "Content-Type": "application/json" }
		})
			.then(resp => resp.json())
			.then(data => {
				if (data.success) {
					M.toast({ html: "User created succesully" });
					history.push("/login");
				}
			})
			.catch(err => console.log(err));
		fetch(`${store.url_prefix}/user/${store.data_usuario_conectado[1].user_id}`)
			.then(response => response.json())
			.then(data => actions.guardaCalendariosUsario(data.calendars));
	};

	return (
		<Fragment>
			<h3>CREAR NUEVO CALENDARIO</h3>
			<form>
				<div className="form-row align-items-center">
					<div className="col-auto">
						<label className="sr-only" htmlFor="inlineFormInput">
							Name
						</label>
						<input
							onChange={obtenerDatosNuevoCalendario}
							type="text"
							className="form-control mb-2"
							placeholder="Nombre Calendario"
							title="name_calendar"
						/>
					</div>
					<div className="col-auto">
						<label className="sr-only" htmlFor="inlineFormInput">
							Name
						</label>
						<input
							onChange={obtenerDatosNuevoCalendario}
							type="text"
							className="form-control mb-2"
							placeholder="Descripcion"
							title="description"
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-primary mb-2" onClick={calendarCreation}>
							Enviar
						</button>
					</div>
				</div>
			</form>
		</Fragment>
	);
};
