import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [ 
	{id: 1, name: 'Andrey'}, 
	{id: 2, name: 'Dmitry'},
	{id: 3, name: 'Sasha'},
	{id: 4, name: 'Sveta'},
]
let messageData = [ 
	{id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, a?'}, 
	{id: 2, message: 'Lorem.'},
	{id: 3, message: 'Lorem ipsum dolor sit'},
	{id: 4, message: 'Lorem ipsum dolor sit amet'},
	{id: 5, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur labore iusto, aut excepturi nulla?'},
]
let postData = [ 
	{id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi?', likesCount: 2}, 
	{id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias ex necessitatibus numquam ducimus consectetur porro nobis magni fuga quia.', likesCount: 22},
	{id: 3, text: 'Hi', likesCount: 10},
]

ReactDOM.render(
  <React.StrictMode>
	<App dialogsData={dialogsData} messageData={messageData} postData={postData}/>		
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
