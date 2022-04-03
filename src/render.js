//не работает с отдельной функцией????
//скорей всего из за того, что функции назодятся в объекте, а не отдельно

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let renderApp = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

