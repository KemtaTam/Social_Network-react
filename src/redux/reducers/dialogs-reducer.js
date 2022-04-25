const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE-MESSAGE-VALUE';

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
	newMessageValue: '',
}

const dialogsReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let stateCopy = {...state};
			stateCopy.messageData = [...state.messageData];
			let len = stateCopy.messageData.length + 1;		
			stateCopy.messageData.push({id: len, message: state.newMessageValue});
			stateCopy.newMessageValue = '';
			return stateCopy;
		}
		case CHANGE_MESSAGE_VALUE: {
			let stateCopy = {...state};
			stateCopy.newMessageValue = action.text;
			return stateCopy;
		}
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE
})
export const onMessageChangeActionCreator = (text) => ({
	type: CHANGE_MESSAGE_VALUE,
	text: text
})

export default dialogsReducer;