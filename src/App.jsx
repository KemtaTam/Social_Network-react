import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
	return (
		<BrowserRouter>
		<div className="app-wrapper">	
			<Header />
			<Sidebar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile" 
						element={<Profile postData={props.postData}/>} 
					/> 
					<Route path="/dialogs/*" 
						element={<Dialogs text="dialogs" dialogsData={props.dialogsData} messageData={props.messageData}/>} 
					/> 
					<Route path="/news" 
						element={<Dialogs text="news" dialogsData={props.dialogsData} messageData={props.messageData}/>} 
					/> 
					<Route path="/music" 
						element={<Dialogs text="music" dialogsData={props.dialogsData} messageData={props.messageData}/>} 
					/> 
					<Route path="/settings" 
						element={<Dialogs text="settings" dialogsData={props.dialogsData} messageData={props.messageData}/>} 
					/> 
				</Routes>
			</div>
		</div>
		</BrowserRouter>
	);
};

export default App;
