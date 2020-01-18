import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./loginbutton";
import { DiaryButton } from "./DiaryButton";
import logo from "./../../img/logo.png";
import { Context } from "../store/appContext.js";

import "../../styles/modal.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<a className="navbar-brand" href="#">
					<img src={logo} width="150" height="60" alt="" />
				</a>
			</Link>

			<DiaryButton />

			<LoginButton />
		</nav>
	);
};
