import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [registro, guardaRegistro] = useState({
		email: "",
		password: "",
		name: "",
		last_name: "",
		birthday_date: ""
	});

	const obtenerRegistro = e => {
		guardaRegistro({
			...registro,
			[e.target.title]: e.target.value
		});
	};
	console.log(registro);
	const registration = () => {
		fetch(`${store.url_prefix}/signup`, {
			method: "POST",
			body: JSON.stringify(registro),
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
	};

	return (
		<div className="container col-4">
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email</label>
					<input
						onChange={obtenerRegistro}
						title="email"
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Nombre</label>
					<input
						onChange={obtenerRegistro}
						title="name"
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Example input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Apellido</label>
					<input
						onChange={obtenerRegistro}
						title="last_name"
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Example input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Fecha de Nacimiento</label>
					<input
						onChange={obtenerRegistro}
						title="birthday_date"
						type="date"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Example input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Contraseña</label>
					<input
						onChange={obtenerRegistro}
						title="password"
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Confirmar Contraseña</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>

				<h5>Selecciona tus Preferencias</h5>
				<div className="form-group form-check">
					{store.categoria.map((item, index) => {
						return (
							<div key={index}>
								<input type="checkbox" className="form-check-input" id={item.categoryid} />
								<label className="form-check-label" htmlFor="exampleCheck1">
									{item.categoryname}
								</label>
							</div>
						);
					})}
				</div>
				<Link to="/">
					<button onClick={registration} type="submit" className="btn btn-primary">
						Enviar
					</button>
				</Link>
			</form>
		</div>
	);
};
