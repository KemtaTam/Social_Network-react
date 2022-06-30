import {Routes, Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";
import {initializeApp} from './redux/reducers/app-reducer'
import { connect } from 'react-redux';
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
	componentDidMount(){
		this.props.initializeApp();
	}

	render() {
		return !this.props.initialized ? <Preloader /> : (
			<div className="app-wrapper">	
				<HeaderContainer />
				<Sidebar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path='/profile/:userId' element={<ProfileContainer  />} />
						<Route path='/profile' element={<ProfileContainer  />} />
						<Route path="/dialogs/*"  element={<DialogsContainer  />}  />
						<Route path="/friends"  element={<FriendsContainer  />} />
						<Route path="/users"  element={<UsersContainer  />} />
						<Route path="/login"  element={<LoginContainer />} />
					</Routes>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);


