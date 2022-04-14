import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'

export let renderApp = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={store.getState()}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderApp();

store.subscribe(renderApp);

reportWebVitals();

