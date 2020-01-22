import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Calendar } from "./views/calendar";
import { Event } from "./views/event";
import { EventsThumbnails } from "./views/eventsthumb";
import { Register } from "./views/register";
import { Profile } from "./views/profile";
import { LoginForm } from "./component/LoginForm";
import { CalendarEvents } from "./views/calendar_events";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CreateCalendar } from "./views/calendar_create";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route path="/events-category/event" component={Event} />
						<Route path="/events-category" component={EventsThumbnails} />
						<Route path="/calendar" component={Calendar} />
						<Route path="/register" component={Register} />
						<Route path="/profile" component={Profile} />
						<Route path="/login" component={LoginForm} />
						<Route path="/calendarevents" component={CalendarEvents} />
						<Route exact path="/" component={Home} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
