import React, { Component } from "react";
import { FacebookProvider, LoginButton, Status } from "react-facebook";

export default class Myfblogin extends Component {
	handleResponse = data => {
		console.log(data);
	};

	handleError = error => {
		this.setState({ error });
	};

	handleChange = response => {
		console.log(response);
	};

	render() {
		return (
			<FacebookProvider appId="1030606370611311">
				<LoginButton scope="email" onCompleted={this.handleResponse} onError={this.handleError}>
					<button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
						<i className="fab fa-facebook-f mr-2" /> Ingresar con Facebook
						<br />
					</button>
				</LoginButton>

				<Status>{({ loading, status }) => <div> {status}</div>}</Status>
			</FacebookProvider>
		);
	}
}
