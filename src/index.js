import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'
import { subscribe } from './redux/state';

export let renderApp = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderApp();

subscribe(renderApp);

reportWebVitals();

