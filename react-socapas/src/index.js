import React from "react";
import ReactDOM from "react-dom";
import Application from "./components/Application/Application";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "font/css/animation.css";
import "font/css/socapas_font.css";
import "styles/index.css";

ReactDOM.render(
	<BrowserRouter>
		<Application />
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();