import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import exampleMap from "../../img/Map.png";
import App from "../component/mapApp.js";
import loginButton from "../component/loginbutton.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const capturaCategoria = e => {
		addFilterCategoria(e.target.title);
		console.log(e.target.title);
	};

	return (
		<div>
			<div className="container mb-3 d-flex justify-content-center">
				<App />{" "}
				<div>
					<loginButton />
				</div>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row">
					{store.categoria.map((item, index) => {
						return (
							<div className="col-4" key={index}>
								<div className="card" style={{ width: 18 + "rem" }}>
									<Link
										to={"/events-category/" + item.categoryname}
										className="text-decoration-none"
										value={item.categoryname}
										onClick={capturaCategoria}>
										<img src="" className="card-img-top" alt="" />

										<div className="card-body" value={item.categoryname}>
											<h5 className="card-title text-center" title={item.categoryname}>
												{item.categoryname}
											</h5>
										</div>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
