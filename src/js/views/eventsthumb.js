import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
import img6 from "../../img/6.jpg";

export const EventsThumbnails = () => {
	const { store, actions } = useContext(Context);

	const [filtros, guardaFiltros] = useState();

	const [eventos, filtraEventos] = useState(store.eventsDetails);

	const obtenerFiltros = e => {
		guardaFiltros({
			...filtros,
			[e.target.name]: e.target.value
		});
	};

	const seleccionaEvento = e => {
		actions.selectEvent(e.target.title);
	};

	return (
		<div>
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
										Categorias
									</button>
								</h2>
							</div>

							<div
								id="collapseOne"
								className="collapse show"
								aria-labelledby="headingOne"
								data-parent="#accordionExample">
								<div className="card-body">
									{store.categoria.map((item, index) => {
										return (
											<div className="form-check ml-2" key={index}>
												<input
													className="form-check-input"
													type="checkbox"
													value={item.categoryname}
													onChange={obtenerFiltros}
													name="categoria"
												/>
												<label className="form-check-label">{item.categoryname}</label>
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
										Region
									</button>
								</h2>
							</div>
							<div
								id="collapseTwo"
								className="collapse"
								aria-labelledby="headingTwo"
								data-parent="#accordionExample">
								<div className="card-body">
									{store.region.map((item, index) => {
										return (
											<div className="form-check ml-2" key={index}>
												<input
													className="form-check-input"
													type="checkbox"
													value={item.nombre}
													name="ciudad"
													onChange={obtenerFiltros}
												/>
												<label className="form-check-label">{item.nombre}</label>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row col-10 float-right">
					{store.eventos_filtrados.map((item, index) => {
						return (
							<div className="col-2 mb-4" key={item.event_id}>
								<Link
									to="/events-category/event"
									className="text-decoration-none"
									onClick={seleccionaEvento}>
									<div className="card">
										<img
											src={item.event_photo_url}
											className="card-img-top"
											alt="..."
											title={item.event_id}
										/>
										<div className="card-body" value={item.event_id}>
											<h5
												className="card-title"
												title={item.event_id}
												data-lat="1"
												data-longi="1">
												{item.event_name}
											</h5>
										</div>
										<div className="card-footer">
											<small className="text-muted" title={item.event_id}>
												{item.event_category}
											</small>
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
