import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CalendarEvents } from "./calendar_events.js";
import "../../styles/home.scss";

export const Calendar = () => {
	const { store, actions } = useContext(Context);

	{
		/*Selecciona uno de los calendarios para usar en el resto de la aplicacion*/
	}

	const [calendario, guardaCalendario] = useState({
		calendar_id: store.data_usuario_conectado[1].calendars[0].calendar_id
	});

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

	const [eventosCalendario, guardaEventosCalendario] = useState([]);

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

	{
		/*Crea un nuevo calendario*/
	}

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

	{
		/*Eliminar un calendario*/
	}

	{
		/*Llama el detalle de un calendario para renderizar eventos*/
	}

	return (
		<div className="container">
			{/*	<div className="list-group">
			<a href="#" className="list-group-item list-group-item-action">
				<div className="d-flex w-100 justify-content-between">
					<h3 className="mb-1">Event Name</h3>
					<h5>Date</h5>
				</div>
				<p className="mb-1">Event Description. OnHover changes its color</p>
				<small>When clicked redirect to the event description view</small>
			</a>
</div>*/}

			<h3>SELECCIONAR CALENDARIO</h3>
			<div>
				<select onChange={obtenerCalendario} className="custom-select" title="calendar_id">
					<option selected>Selecciona un calendario</option>
					{store.selectedUserCalendars.map((item, index) => {
						return (
							<option value={item.calendar_id} key={index}>
								{item.name_calendar}
							</option>
						);
					})}
				</select>
				<Link to={"/calendarevents"} className="text-decoration-none">
					<button type="button" className="btn btn-success">
						Seleccionar Este Calendario
					</button>
				</Link>
			</div>
			<br />
			<br />
			<br />
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
							id="inlineFormInput"
							placeholder="Name_Calendar"
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
							id="inlineFormInput"
							placeholder="Description"
							title="description"
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-primary mb-2" onClick={calendarCreation}>
							Submit
						</button>
					</div>
				</div>
			</form>

			<br />
			<br />
			<br />

			<h3>ELIMINAR CALENDARIO</h3>

			<br />
			<br />
			<br />

			<h3>RENDERIZAR EVENTOS GUARDADOS EN EL CALENDARIO</h3>
		</div>
	);
};
