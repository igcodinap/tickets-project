import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
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
	};

	const actualizaStore = e => {
		e.preventDefault();
		actions.guardaCalendarioSeleccionado(calendario);
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
		fetch("http://120755e9.ngrok.io/calendars", {
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
		fetch(`http://120755e9.ngrok.io/user/${store.data_usuario_conectado[1].user_id}`)
			.then(response => response.json())
			.then(data => actions.guardaCalendariosUsario(data.calendars));
	};

	{
		/*Eliminar un calendario*/
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
				<button type="button" className="btn btn-success" onClick={actualizaStore}>
					Seleccionar Este Calendario
				</button>
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
			<div className="media">
				<img src="https://picsum.photos/id/237/200/300" className="mr-3" alt="..." height="64px" width="64" />
				<div className="media-body ">
					<h5 className="mt-0">Mes</h5>
					Posible resumen de la cantidad de eventos en el mes, o alguna descripcion graciosa del mes en
					particular, como por ejemplo, Septiembre: Mes de la primavera, perfecto para admirar la naturaleza
					(no aplica para Platanos Orientales)
					<ul className="list-unstyled">
						<li className="media">
							<img
								src="https://picsum.photos/id/237/200/300"
								className="mr-3"
								alt="imagen de la categoria del evento"
								height="64px"
								width="64"
							/>
							<div className="media-body">
								<h5 className="mt-0 mb-1">List-based media object</h5>
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
								sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
								condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							</div>
						</li>
						<li className="media my-4">
							<img
								src="https://picsum.photos/id/237/200/300"
								className="mr-3"
								alt="imagen de la categoria del evento"
								height="64px"
								width="64"
							/>
							<div className="media-body">
								<h5 className="mt-0 mb-1">List-based media object</h5>
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
								sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
								condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							</div>
						</li>
						<li className="media">
							<img
								src="https://picsum.photos/id/237/200/300"
								className="mr-3"
								alt="imagen de la categoria del evento"
								height="64px"
								width="64"
							/>
							<div className="media-body">
								<h5 className="mt-0 mb-1">List-based media object</h5>
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
								sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
								condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
