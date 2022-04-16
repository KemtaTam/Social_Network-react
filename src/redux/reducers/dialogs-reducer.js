const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE-MESSAGE-VALUE';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let len = state.messageData.length + 1;	
			state.messageData.push({id: len, message: state.newMessageValue});
			state.newMessageValue = '';
			return state;
		case CHANGE_MESSAGE_VALUE:
			state.newMessageValue = action.text;
			return state;
	
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