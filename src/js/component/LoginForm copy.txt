import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Context } from "../store/appContext";
import Myfblogin from "./loginFB.js";

export const LoginForm = () => {
	const { store, actions } = useContext(Context);

	return (
		<div
			className="modal fade"
			id="exampleModalCenter"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalCenterTitle"
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-body">
						{/*aca comienza el codigo insertado*/}
						<div className="container d-flex justify-content-center">
							<div className="row">
								<div className="mx-auto">
									<div className="card card-signin my-5">
										<div className="card-body">
											<h5 className="card-title text-center">Iniciar Sesion</h5>
											<form className="form-signin">
												<div className="form-label-group">
													<input
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
														type="password"
														id="inputPassword"
														className="form-control"
														placeholder="Password"
														required
													/>
													<label htmlFor="inputPassword">Password</label>
												</div>

												<div className="custom-control custom-checkbox mb-3">
													<input
														type="checkbox"
														className="custom-control-input"
														id="customCheck1"
													/>
													<label className="custom-control-label" htmlFor="customCheck1">
														Recuerdame
													</label>
												</div>
												<button
													className="btn btn-lg btn-primary btn-block text-uppercase"
													type="submit"
													onClick={actions.changeUserStatus}>
													Ingresar
												</button>
												<div className="text-center">o</div>
												<Link to="/register">
													<button
														className="btn btn-lg btn-success btn-block text-uppercase"
														type="submit">
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
						{/*aca termina*/}
					</div>
				</div>
			</div>
		</div>
	);
};
