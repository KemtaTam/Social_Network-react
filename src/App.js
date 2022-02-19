import "./App.css";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
//import React, {Component} from "react";		//чтобы использовать классовые компоненты (устаревшее)
//import React from "react"; //или так

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Sidebar />
			<Profile />
		</div>
	);
};

export default App;
