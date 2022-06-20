import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
	return (
		<BrowserRouter>
		<div className="app-wrapper">	
			<HeaderContainer />
			<Sidebar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path='/profile/:userId'
             			element={<ProfileContainer  />}
					/>
					<Route path='/profile'
             			element={<ProfileContainer  />}
					/>
					<Route path="/dialogs/*" 
						element={<DialogsContainer  />} 
					/>
					<Route path="/friends" 
						element={<FriendsContainer  />}
					/>
					<Route path="/users" 
						element={<UsersContainer  />}
					/>
					<Route path="/login" 
						element={<LoginContainer />}
					/>
				</Routes>
			</div>
		</div>
		</BrowserRouter>
	);
};

export default App;
