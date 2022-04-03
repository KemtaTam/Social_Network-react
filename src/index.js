/* import reportWebVitals from './reportWebVitals';
import {renderApp} from './render'
import state from './redux/state'

renderApp(state);

reportWebVitals();

 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'

export let renderApp = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderApp();

reportWebVitals();

