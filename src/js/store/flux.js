const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			filtrocategoria: [],
			filtroregion: [],
			filtrotexto: [],
			usuario: [
				{
					nombre: "Ivan Muñoz",
					email: "munoz.romero.ivan@gmail.com",
					password: "1234abc"
				}
			],
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

			usuarioconectado: true,

			userLogin: [{ email: "" }],
			userPass: [{ pass: "" }],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			categoria: ["Musica", "Deportes", "Teatro y Cine", "Otros", "Danza", "Infantil"],
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
			pokemon: []
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

			changeUserStatus: () => {
				const store = getStore();

				if (store.usuarioconectado == true) {
					setStore({ usuarioconectado: false });
				} else {
					setStore({ usuarioconectado: true });
				}
			},

			guardaEventos: data => {
				const eventsDetails = data;

				setStore({ eventsDetails: eventsDetails });
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
			}
		}
	};
};

export default getState;
