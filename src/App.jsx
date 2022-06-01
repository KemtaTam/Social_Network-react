import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
	return (
		<BrowserRouter>
		<div className="app-wrapper">	
			<Header />
			<Sidebar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile/*" 
						element={ <ProfileContainer store={props.store} /> }
					/> 
					<Route path="/dialogs/*" 
						element={<DialogsContainer store={props.store} />} 
					/>
					<Route path="/friends" 
						element={<FriendsContainer store={props.store} />}
					/>
					<Route path="/users" 
						element={<UsersContainer store={props.store} />}
					/>
				</Routes>
			</div>
		</div>
		</BrowserRouter>
	);
};

export default App;
