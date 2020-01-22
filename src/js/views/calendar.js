import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CalendarEvents } from "./calendar_events.js";
import { CreateCalendar } from "./calendar_create.js";
import "../../styles/home.scss";
import { Button, InputGroup, Label, Input, InputGroupAddon } from "reactstrap";

export const Calendar = () => {
	const { store, actions } = useContext(Context);

	{
		/*Selecciona uno de los calendarios para usar en el resto de la aplicacion*/
	}

	const [calendario, guardaCalendario] = useState({
		calendar_id: store.data_usuario_conectado[1].calendars[0].calendar_id
	});

	const [eventosCalendario, guardaEventosCalendario] = useState([]);

	const obtenerCalendario = e => {
		guardaCalendario({
			[e.target.title]: e.target.value
		});
		fetch(`${store.url_prefix}/calendars/${calendario.calendar_id}`)
			.then(response => response.json())
			.then(data => {
				guardaEventosCalendario(data);
				console.log(data);
				actions.guardaEventosDeCalendarioSeleccionado(data);
			});
	};

	console.log(eventosCalendario);

	const actualizaStore = e => {
		actions.guardaCalendarioSeleccionado(calendario);
		fetch(`${store.url_prefix}/calendars/${calendario.calendar_id}`)
			.then(response => response.json())
			.then(data => {
				guardaEventosCalendario(data);
				console.log(data);
				actions.guardaEventosDeCalendarioSeleccionado(data);
			});
	};

	const actualiza = () => {
		setActualizacion(actualizacion == 0 ? 1 : 0);
	};

	return (
		<div className="container">
			<h3>SELECCIONAR CALENDARIO</h3>

			<InputGroup>
				<Input type="select" name="select" id="exampleSelect" title="calendar_id" onChange={obtenerCalendario}>
					<option>Selecciona un Calendario</option>
					{store.selectedUserCalendars.map((item, index) => {
						return (
							<option title="calendar_id" value={item.calendar_id} key={index}>
								{item.name_calendar}
							</option>
						);
					})}
				</Input>
				<InputGroupAddon addonType="append">
					<Link to={"/calendarevents"} className="text-decoration-none">
						<Button onClick={actualizaStore} color="primary">
							Seleccionar
						</Button>
					</Link>
				</InputGroupAddon>
			</InputGroup>

			<br />
			<br />
			<br />
			<CreateCalendar />
			<br />
			<br />
			<br />
		</div>
	);
};
