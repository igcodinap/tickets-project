const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			filtros: [{ categoria: [], region: [], texto: "" }],
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
			eventsDetails: [
				{
					eventid: "001",
					event_title: "Super Clasico",
					description:
						"El Superclásico del fútbol chileno es el partido entre los dos clubes más laureados a nivel masculino en cuanto a títulos de Primera División, así como los más populares del país: Colo-Colo y Universidad de Chile. ​​​​​​",
					city: "Santiago",
					lat: -33.5066621,
					long: -70.6081981,
					street: "Marathon 5300, Macul, Región Metropolitana",
					start_time: "2019-01-01",
					end_time: "2019-01-02",
					category: "Deportes",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "002",
					event_title: "David Bisbal en Movistar Arena",
					description:
						"David Bisbal, uno de los artistas españoles de mayor éxito internacional, regresará el próximo 4 de diciembre a Santiago de Chile para presentar en directo al público chileno su TOUR 2019, un espectacular y enérgico concierto con el que este año ha recorrido con gran éxito y numerosos sold outs varias ciudades de USA, MÉXICO y EUROPA, y con el que en estos momentos está inmerso en plena gira por ESPAÑA.",
					city: "Santiago",
					lat: -33.4626827,
					long: -70.6639613,
					street: "Tupper 1941, Santiago",
					start_time: "2019-12-04",
					end_time: "2019-12-04",
					category: "Musica",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "003",
					event_title: "La Tumba de las Luciérnagas a $1.000",
					description:
						"Isao Takahata, de la mano de Studio Ghibli, nos entrega este relato sobre dos niños en la Segunda Guerra Mundial, basada en una novela de Akiyuki Nosaka, un sobreviviente de la Guerra que plasmó sus experiencias en el libro.",
					city: "Santiago",
					lat: -33.4474793,
					long: -70.6542181,
					street: "Tarapaca 1181, Santiago",
					start_time: "2020-02-18",
					end_time: "2020-02-18",
					category: "Teatro y Cine",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "004",
					event_title: "Miami? en Teatro Regional de Rancagua - Rancagua",
					description:
						"MIAMI? Monólogo crítico y absurdo del estilo de vida del chileno aspiracional y egoísta",
					city: "Rancagua",
					lat: -34.1754966,
					long: -70.742716,
					street: "Av. Capitán Antonio Millán 342, Rancagua",
					start_time: "2019-12-13",
					end_time: "2019-12-13",
					category: "Cine y Teatro",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "005",
					event_title: "Ballet Nacional ofrecerá clases de danza abiertas y gratuitas en el GAM",
					description:
						"Si siempre quisiste aprender danza, ahora tienes la oportunidad de hacerlo con los bailarines del Ballet Nacional Chileno. Acá todos los detalles de las clases.",
					city: "Santiago",
					lat: -33.4392484,
					long: -70.6419692,
					street: "Av Libertador Bernardo O'Higgins 227, Santiago",
					start_time: "2019-12-20",
					end_time: "2019-12-20",
					category: "Danza",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "006",
					event_title: "Un Sueño de Navidad, Show Musical Infantil.",
					description:
						"El sábado 7 de Diciembre estrenamos “Un Sueño de Navidad”, a partir de las 12.30 horas en la",
					city: "Santiago",
					lat: -33.4319112,
					long: -70.6394393,
					street: "Ernesto Pinto Lagarrigue 214, Recoleta",
					start_time: "2019-12-07",
					end_time: "2019-12-07",
					category: "Infantil",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "007",
					event_title: "Tour Nocturno: Sombras del Portal",
					description: "Tour nocturno, Sombras del Portal, Santiago Centro, sábado 30 de noviembre 21:00 hrs",
					city: "Santiago",
					lat: -33.4408187,
					long: -70.6512473,
					street: "Agustinas, int, Ramon Nieto 170, Santiago",
					start_time: "2019-12-15",
					end_time: "2019-12-15",
					category: "Otros",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "008",
					event_title: "Colo-Colo vs Tricolor de Paine",
					description:
						"El Superclásico del fútbol chileno es el partido entre los dos clubes más laureados a nivel masculino en cuanto a títulos de Primera División, así como los más populares del país: Colo-Colo y Universidad de Chile. ​​​​​​",
					city: "Santiago",
					lat: -33.5066621,
					long: -70.6081981,
					street: "Marathon 5300, Macul, Región Metropolitana",
					start_time: "2020-03-01",
					end_time: "2020-03-02",
					category: "Deportes",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "009",
					event_title: "ASL Aniversario IX - Lucha Libre Concepción",
					description:
						"¡La lucha libre cumple nueve años en Concepción! Ya estamos en camino a la mayor fiesta del año en Acción Sin Límites, con un evento que presentará todas las repercusiones de Supremacía",
					city: "Concepcion",
					lat: -36.8223399,
					long: -73.0563546,
					street: "Caupolicán 955, Concepción",
					start_time: "2019-12-07",
					end_time: "2019-12-07",
					category: "Deportes",
					image: "https://via.placeholder.com/140x100"
				},
				{
					eventid: "010",
					event_title: "Menú Degustación Peruana en Valparaíso - Puerto Limeño",
					description:
						"En Puerto Limeño podrás conocer, disfrutar y probar la gran variedad de platos peruanos en uno de los mejores restaurantes de Valparaíso. ",
					city: "Valparaiso",
					lat: -33.0440135,
					long: -71.625436,
					street: "Bernardo O'Higgins 1215, Valparaíso",
					start_time: "2019-12-30",
					end_time: "2019-12-30",
					category: "Otros",
					image: "https://via.placeholder.com/140x100"
				}
			],
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

			addFilter: valor => {
				console.log(valor);
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
				const store = getStore();

				const pokemon = data;

				setStore({ pokemon: pokemon });
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
