import React, { Suspense } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { compose } from "redux";

import store, { AppStateType } from "./redux/redux-store";
import { initializeApp } from "./redux/reducers/app-reducer";

import { withRouter } from "./hoc/withRouter";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
import "./App.css";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
	initializeApp: () => void;
};

class App extends React.Component<MapStatePropsType & MapDispatchPropsType> {
	catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
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

const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized,
});

const AppContainer = compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App);

const MainApp: React.FC<{}> = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

export default MainApp;
