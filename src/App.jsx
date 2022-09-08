import React, { Suspense } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar/Sidebar.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import { initializeApp } from "./redux/reducers/app-reducer.ts";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store.ts";

import "./App.css";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.tsx"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer.tsx"));
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer.tsx"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer.tsx"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer.tsx"));

class App extends React.Component {
	catchAllUnhandledErrors = (reason, promise) => {
		alert("Some error occured");
	};
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}

	render() {
		return !this.props.initialized ? (
			<Preloader />
		) : (
			<div className="app-wrapper">
				<HeaderContainer />
				<Sidebar />
				<div className="app-wrapper-content">
					<Suspense fallback={<Preloader />}>
						<Routes>
							<Route path="/profile/:userId" element={<ProfileContainer />} />
							<Route path="/profile" element={<ProfileContainer />} />
							<Route path="/dialogs/*" element={<DialogsContainer />} />
							<Route path="/friends" element={<FriendsContainer />} />
							<Route path="/users" element={<UsersContainer />} />
							<Route path="/login" element={<LoginContainer />} />
							<Route path="/" element={<Navigate to="/profile" />} />
							<Route path="*" element={<div>404 NOT FOUND</div>} />
						</Routes>
					</Suspense>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

let MainApp = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

export default MainApp;
