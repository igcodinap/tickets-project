import React, { useEffect, useContext, useState } from "react";
import "../../styles/home.scss";

export const Calendar = () => {
	const data = {
		email: "ivan.munoz.r1@outlook.com",
		password: "Enero2020",
		name: "Alfonso",
		last_name: "Romero",
		birthday_date: "1987-09-02"
	};

	const crearUsuario = () => {
		fetch("http://baaf8241.ngrok.io/signup", {
			method: "POST",
			body: JSON.stringify({
				email: "ivan.munoz.r1@outlook.com",
				password: "Enero2020",
				name: "Alfonso",
				last_name: "Romero",
				birthday_date: "1987-09-02"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
	};

	const login = () => {
		fetch("http://baaf8241.ngrok.io/login", {
			method: "POST",
			body: JSON.stringify({
				email: "ivan.munoz.r1@outlook.com",
				password: "Enero2020"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
	};

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

			<div className="media">
				<button type="button" className="btn btn-primary" onClick={crearUsuario}>
					Crear Usuario
				</button>

				<button type="button" className="btn btn-danger" onClick={login}>
					login
				</button>

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
