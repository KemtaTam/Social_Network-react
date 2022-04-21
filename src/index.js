import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

export let renderApp = () => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App state={store.getState()} 
					dispatch={store.dispatch.bind(store)} 
					store={store}
				/>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderApp();

store.subscribe(renderApp);

reportWebVitals();

