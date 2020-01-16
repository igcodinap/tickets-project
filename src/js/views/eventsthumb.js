import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const EventsThumbnails = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="row justify-content-right">
				<div className="input-group mb-3 col-10 ">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon1">
							<FontAwesomeIcon icon={faSearch} />
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="Te ayudo a encontrar tu destino..."
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-2 bg-light">
					<h2>Filtros</h2>
					<br />
					<div className="accordion" id="accordionExample">
						<div className="card">
							<div className="card-header" id="headingOne">
								<h2 className="mb-0">
									<button
										className="btn btn-link"
										type="button"
										data-toggle="collapse"
										data-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne">
										Region
									</button>
								</h2>
							</div>

							<div
								id="collapseOne"
								className="collapse show"
								aria-labelledby="headingOne"
								data-parent="#accordionExample">
								<div className="card-body">
									{store.region.map((item, index) => {
										return (
											<div className="form-check ml-2" key={index}>
												<input
													className="form-check-input"
													type="checkbox"
													value={item.nombre}
												/>
												<label className="form-check-label">{item.nombre}</label>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header" id="headingTwo">
								<h2 className="mb-0">
									<button
										className="btn btn-link collapsed"
										type="button"
										data-toggle="collapse"
										data-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo">
										Categoria
									</button>
								</h2>
							</div>
							<div
								id="collapseTwo"
								className="collapse"
								aria-labelledby="headingTwo"
								data-parent="#accordionExample">
								<div className="card-body">
									{store.categoria.map((item, index) => {
										return (
											<div className="form-check ml-2" key={index}>
												<input className="form-check-input" type="checkbox" value="" />
												<label className="form-check-label">{item}</label>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row col-10 float-right">
					{store.eventsDetails.map((item, index) => {
						return (
							<div className="col-2 mb-4" key={index}>
								<Link to="/events-category/event" className="text-decoration-none">
									<div className="card">
										<img
											src="https://via.placeholder.com/140x100"
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">{item.event_name}</h5>
										</div>
										<div className="card-footer">
											<small className="text-muted">{item.event_category}</small>
											<FontAwesomeIcon icon={faPlusSquare} />
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
