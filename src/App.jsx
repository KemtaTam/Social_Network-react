import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";

const App = (props) => {
	return (
		<BrowserRouter>
		<div className="app-wrapper">	
			<Header />
			<Sidebar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile" 
						element={<Profile profilePage={props.state.profilePage} />} 
					/> 
					<Route path="/dialogs/*" 
						element={<Dialogs dialogPage={props.state.dialogPage} />} 
					/>
					<Route path="/friends" 
						element={<Friends friendPage={props.state.friendPage} />}
					/>
				</Routes>
			</div>
		</div>
		</BrowserRouter>
	);
};

export default App;
