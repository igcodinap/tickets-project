import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-deck">
			<div className="card">
				<h5 className="card-header">Tus Datos</h5>
				<div className="card-body">
					<div className="form-group row">
						<label htmlFor="staticEmail" className="col-sm-5 col-form-label">
							Nombre
						</label>
						<div className="col-sm-5">
							<input
								type="text"
								readOnly
								className="form-control-plaintext"
								id="staticEmail"
								value="Nombre de Usuario"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label htmlFor="staticEmail" className="col-sm-5 col-form-label">
							Fecha de Nacimiento
						</label>
						<div className="col-sm-5">
							<input
								type="date"
								readOnly
								className="form-control-plaintext"
								id="staticEmail"
								value="02-09-1987"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label htmlFor="staticEmail" className="col-sm-5 col-form-label">
							Email
						</label>
						<div className="col-sm-5">
							<input
								type="text"
								readOnly
								className="form-control-plaintext"
								id="staticEmail"
								value="usuario@example.cl"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="card">
				<h5 className="card-header">Tus Preferencias</h5>
				<div className="card-body">
					<div className="form-group form-check">
						{store.categoria.map((item, index) => {
							return (
								<div key={index}>
									<input type="checkbox" className="form-check-input" id="exampleCheck1" />
									<label className="form-check-label" htmlFor="exampleCheck1">
										{item.categoryname}
									</label>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="card">
				<h5 className="card-header">Cambiar Contraseña</h5>
				<div className="card-body">
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Contraseña Actual</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Nueva Contraseña</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Confirmar Nueva Contraseña</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
