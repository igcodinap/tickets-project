import React, { useState, useEffect, useContext } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Context } from "../store/appContext";

export const LoginButton = () => {
	const { store, actions } = useContext(Context);

	if (store.fbobject.isLoggedin == true) {
		return (
			<>
				<div className="btn-group ml-auto" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-danger" onClick={actions.changeUserStatus}>
						Logout
					</button>
					<div className="media">
						<img
							src={store.fbobject.pictureurl}
							className="align-self-center mr-3"
							alt="..."
							eight="50px"
							width="50px"
						/>
						<div className="media-body">
							<h6 className="mt-0">Bienvenid@</h6>
							{store.fbobject.first_name}
						</div>
					</div>
					<img />
				</div>
			</>
		);
	} else if (store.usuarioconectado == true) {
		return (
			<>
				<div className="btn-group ml-auto" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-danger" onClick={actions.changeUserStatus}>
						Logout
					</button>
					<Link to="/profile">
						<button type="button" className="btn btn-success">
							Profile
						</button>
					</Link>
				</div>
				<div className="media">
					<img
						src="https://www.uprm.edu/natatorio/wp-content/uploads/sites/142/2018/11/profile-placeholder.png"
						className="align-self-center mr-3"
						alt="..."
						eight="50px"
						width="50px"
					/>
					<div className="media-body">
						<h6 className="mt-0">Bienvenid@</h6>
						{store.data_usuario_conectado[1].name}
					</div>
				</div>
			</>
		);
	} else {
		return (
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
						Login
					</button>
				</Link>
			</div>
		);
	}
};
