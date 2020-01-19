import React, { useState, useEffect, useContext } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { Context } from "../store/appContext";

export const LoginButton = () => {
	const logged = false;

	const { store, actions } = useContext(Context);

	const validaDato = () => {
		console.log(store.data_usuario_conectado[1].name);
	};

	if (store.usuarioconectado == true) {
		return (
			<div className="btn-group ml-auto" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-success" onClick={validaDato}>
					Hola po olvidon {store.data_usuario_conectado[1].name}
				</button>
				<button type="button" className="btn btn-danger" onClick={actions.changeUserStatus}>
					Logout
				</button>
				<Link to="/profile">
					<button type="button" className="btn btn-success">
						Profile
					</button>
				</Link>
			</div>
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
