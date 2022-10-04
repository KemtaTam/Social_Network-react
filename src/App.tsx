import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { initializeApp } from "./redux/reducers/app-reducer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Preloader from "./Components/common/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { NotFound404 } from "./Pages/NotFound404/NotFound404";
import "./App.css";

const Dialogs = React.lazy(() => import("./Pages/Dialogs/Dialogs"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));
const Friends = React.lazy(() => import("./Pages/Friends/Friends"));
const Users = React.lazy(() => import("./Pages/Users/Users"));
const Login = React.lazy(() => import("./Pages/Login/Login"));

const App = () => {
	const { initialized } = useAppSelector((state) => state.app);
	const dispatch = useAppDispatch();

	const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
		alert("Some error occured");
	};

	useEffect(() => {
		dispatch(initializeApp());
		window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
		return () => window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
	}, []);

	return !initialized ? (
		<Preloader />
	) : (
		<div className="app-wrapper">
			<Header />
			<Sidebar />
			<div className="app-wrapper-content">
				<Suspense fallback={<Preloader />}>
					<Routes>
						<Route path="/profile/:userId" element={<Profile />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/dialogs/*" element={<Dialogs />} />
						<Route path="/friends" element={<Friends />} />
						<Route path="/users" element={<Users />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Navigate to="/profile" />} />
						<Route path="*" element={<NotFound404 />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
};

export default App;
