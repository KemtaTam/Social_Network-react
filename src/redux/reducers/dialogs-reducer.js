const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

let initialState = {
	dialogsData: [ 
		{id: 1, name: 'Andrey'}, 
		{id: 2, name: 'Dmitry'},
		{id: 3, name: 'Sasha'},
		{id: 4, name: 'Sveta'},
	],
	messageData: [ 
		{id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, a?'}, 
		{id: 2, message: 'Lorem.'},
		{id: 3, message: 'Lorem ipsum dolor sit'},
		{id: 4, message: 'Lorem ipsum dolor sit amet'},
		{id: 5, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur labore iusto, aut excepturi nulla?'},
	],
}

const dialogsReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let len = state.messageData.length + 1;	
			return {
				...state,
				messageData: [...state.messageData, {id: len, message: action.newMessage}],
			};
		}
		default:
			return state;
	}
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export default dialogsReducer;