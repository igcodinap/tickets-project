import React, { useEffect, useContext, useState } from "react";
import "../../styles/event.scss";
import AppEvent from "./mapEvent.js";
import { Context } from "../store/appContext";

export const AddToCalendar = () => {
	const { store, actions } = useContext(Context);

	if (store.usuarioconectado == true) {
		return (
			<div className="col-3 align-self-end">
				<button type="button" className="btn btn-warning" onClick={actions.agregaEventoACalendario}>
					<i className="fa fa-calendar" aria-hidden="true" />
					AddMyCalendar
				</button>
			</div>
		);
	} else {
		return null;
	}
};
