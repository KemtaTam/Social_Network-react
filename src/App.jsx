import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
	return (
		<BrowserRouter>
		<div className="app-wrapper">	
			<Header />
			<Sidebar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile" 
						element={ <Profile store={props.store} /> }
					/> 
					<Route path="/dialogs/*" 
						element={<DialogsContainer store={props.store} />} 
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
