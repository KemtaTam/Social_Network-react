import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

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
