import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
/* import App from './App'; 
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"; */
import MainApp from './App';

/* ReactDOM.render(
	<React.StrictMode>
		 <BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter> 
		<MainApp />
	</React.StrictMode>,
	document.getElementById('root')
); */
ReactDOM.render(
		<MainApp />,
	document.getElementById('root')
);

reportWebVitals();

