import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container col-4">
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email</label>
					<input
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
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Example input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Fecha de Nacimiento</label>
					<input
						type="date"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Example input"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Contraseña</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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
					<button type="submit" className="btn btn-primary">
						Enviar
					</button>
				</Link>
			</form>
		</div>
	);
};
