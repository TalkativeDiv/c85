// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

// Creating a Root
ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<GlobalStyles />
		<App />
	</BrowserRouter>,
);
