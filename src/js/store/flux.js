const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			filtros: {
				filtrocategoria: [],
				filtroregion: [],
				filtrotexto: []
			},
			user_data: {
				firstname: "",
				lastname: "",
				email: "",
				password: ""
			},
			fbobject: {
				isLoggedin: false,
				first_name: "Anótame -",
				email: "",
				name: "",
				pictureurl: ""
			},
			geomap: {
				locationState: "LOADING",
				error: null,
				coords: {
					latitude: -33.448891,
					longitude: -70.669266,
					altitude: null,
					accuracy: null,
					altitudeAccuracy: null,
					heading: null,
					speed: null
				}
			},
			usuarioconectado: false,
			data_usuario_conectado: {},
			categoria: [],
			region: [
				{
					nombre: "Aisén del G. Carlos Ibáñez del Campo",
					numero: "XI"
				},
				{
					nombre: "Antofagasta",
					numero: "II"
				},
				{
					nombre: "Arica y Parinacota",
					numero: "XV"
				},
				{
					nombre: "Atacama",
					numero: "III"
				},
				{
					nombre: "Biobío",
					numero: "VIII"
				},
				{
					nombre: "Coquimbo",
					numero: "IV"
				},
				{
					nombre: "La Araucanía",
					numero: "IX"
				},
				{
					nombre: "Libertador General Bernardo O’Higgins",
					numero: "VI"
				},
				{
					nombre: "Los Lagos",
					numero: "X"
				},
				{
					nombre: "Los Ríos",
					numero: "XIV"
				},
				{
					nombre: "Magallanes y de la Antártica Chilena",
					numero: "XII"
				},
				{
					nombre: "Maule",
					numero: "VII"
				},
				{
					nombre: "Metropolitana de Santiago",
					numero: "RM"
				},
				{
					nombre: "Ñuble",
					numero: "XVI"
				},
				{
					nombre: "Tarapacá",
					numero: "I"
				},
				{
					nombre: "Valparaíso",
					numero: "V"
				}
			],
			eventsDetails: [],
			selectedEvent: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFilterCategoria: valor => {
				const filtrocategoria = valor;

				setStore({ filtrocategoria: filtrocategoria });
			},

			changeUserStatus: data_usuario => {
				const store = getStore();
				if (store.usuarioconectado == true) {
					setStore({ usuarioconectado: false });
					setStore({ data_usuario_conectado: {} });
				} else {
					setStore({ data_usuario_conectado: data_usuario });
					setStore({ usuarioconectado: true });
				}
			},

			guardaEventos: data => {
				const eventsDetails = data;

				setStore({ eventsDetails: eventsDetails });
			},
			guardaCategorias: data => {
				const categoria = data;

				setStore({ categoria: categoria });
			},
			selectEvent: event => {
				const selectedEvent = event;

				setStore({ selectedEvent: selectedEvent });
			},
			selectEventDetails: event => {
				const selectedEvent = event;

				setStore({ selectedEvent: selectedEvent });
			},

			getCurrentPosition: (options = {}) => {
				return new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject, options);
				});
			},
			loadLocation: async () => {
				try {
					const position = await getActions().getCurrentPosition();
					let newgeomap = { coords: position.coords, locationState: "SUCCESS" };
					const store = getStore();
					setStore({ geomap: newgeomap });
				} catch (e) {
					let newgeomap = { locationState: "ERROR", error: e.message };
					setStore({ geomap: newgeomap });
				}
			},

			handleResponse: data => {
				console.log(data);
				setStore({
					fbobject: {
						isLoggedin: true,
						first_name: data.profile.first_name,
						email: data.profile.email,
						name: data.profile.name,
						pictureurl: data.profile.picture.data.url
					},
					submitLogin: e => {
						e.preventDefault();
						fetch("http://120755e9.ngrok.io/login", {
							method: "POST",
							body: JSON.stringify({
								email: "ivan.munoz.r1@outlook.com",
								password: "Enero2020"
							}),
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(res => res.json())
							.then(response => actions.changeUserStatus(response))
							.catch(error => console.error("Error:", error));
					},
					registration: () => {
						const store = getStore();
						fetch("http://120755e9.ngrok.io/signup", {
							method: "POST",
							body: JSON.stringify(store.user_data),
							headers: { "Content-Type": "application/json" }
						})
							.then(resp => resp.json())
							.then(data => {
								if (data.success) {
									M.toast({ html: "User created succesully" });
									history.push("/login");
								}
							})
							.catch(err => console.log(err));
					},
					handleChangeRegistration: e => {
						const store = getStore();
						let { user_data } = store;
						user_data[e.target.id] = e.target.value;
						setStore({ user_data: user_data });
					},

					submitRegistration: (e, history) => {
						e.preventDefault();
						const store = getStore();
						let { user_data } = store;
						let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
						let reEmail = /\S+@\S+\.\S+/;
						if (
							user_data.password === "" ||
							user_data.firstname === "" ||
							user_data.lastname === "" ||
							user_data.email === ""
						) {
							M.toast({ html: "A form field is currently in blank" });
						} else if (!re.test(user_data.password)) {
							M.toast({
								html:
									"Password must contain at least 6 characters long, one uppercase letter and one number.",
								displayLength: 6000
							});
						} else if (!reEmail.test(user_data.email)) {
							M.toast({ html: "Invalid email input" });
						} else {
							getActions().registration();
						}
					}
				});
			}
		}
	};
};

export default getState;
