import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/redux-store";
import App from "./App";
import "./index.css";

ReactDOM.render(
	<BrowserRouter >
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

// "homepage": "https://kemtatam.github.io/Social_Network-react",
