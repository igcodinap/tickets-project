import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Context } from "../store/appContext";
import Myfblogin from "./loginFB.js";

export const LoginForm = () => {
	const { store, actions } = useContext(Context);

	const [datos, guardaDatos] = useState({
		email: "",
		password: ""
	});

	const obtenerDatos = e => {
		guardaDatos({
			...datos,
			[e.target.type]: e.target.value
		});
		console.log(datos);
	};

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

	const submitLogin = e => {
		if (store.usuarioconectado === false) {
			e.preventDefault();
			fetch("http://120755e9.ngrok.io/login", {
				method: "POST",
				body: JSON.stringify(datos),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(response => actions.changeUserStatus(response))
				.catch(error => console.error("Error:", error));
		}
	};

	return (
		<div className="container d-flex justify-content-center">
			<div className="row">
				<div className="mx-auto">
					<div className="card card-signin my-5">
						<div className="card-body">
							<h5 className="card-title text-center">Iniciar Sesion</h5>
							<form className="form-signin">
								<div className="form-label-group">
									<input
										onChange={obtenerDatos}
										type="email"
										id="inputEmail"
										className="form-control"
										placeholder="Email address"
										required
										autoFocus
									/>
									<label htmlFor="inputEmail">Email</label>
								</div>

								<div className="form-label-group">
									<input
										onChange={obtenerDatos}
										type="password"
										id="inputPassword"
										className="form-control"
										placeholder="Password"
										required
									/>
									<label htmlFor="inputPassword">Password</label>
								</div>

								<div className="custom-control custom-checkbox mb-3">
									<input type="checkbox" className="custom-control-input" id="customCheck1" />
									<label className="custom-control-label" htmlFor="customCheck1">
										Recuerdame
									</label>
								</div>
								<button
									className="btn btn-lg btn-primary btn-block text-uppercase"
									type="submit"
									onClick={submitLogin}>
									Ingresar
								</button>
								<div className="text-center">o</div>
								<Link to="/register">
									<button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">
										Registrarse
									</button>
								</Link>
								<hr className="my-4" />
								<Myfblogin />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
