import { InferActionsTypes } from "./../redux-store";
import { DialogType, MessageType } from "./../../types/dialogs-types";

let initialState = {
	dialogsData: [
		{
			id: 1,
			name: "Chat",
			messagesData: [] as Array<MessageType>,
		},
		{
			id: 2,
			name: "Andrey",
			messagesData: [
				{
					userId: 1,
					message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, a?",
				},
			] as Array<MessageType>,
		},
		{
			id: 3,
			name: "Sveta",
			messagesData: [
				{
					userId: 1,
					message: "Lala",
				},
			] as Array<MessageType>,
		},
	] as Array<DialogType>,
};
export type InitialStateType = typeof initialState;

const ADD_MESSAGE = "dialogs/ADD_MESSAGE";
const SET_MESSAGE_DATA = "dialogs/SET_MESSAGE_DATA";

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case ADD_MESSAGE: {
			const messagesDataLength: number =
				state.dialogsData[action.dialogsId - 1].messagesData.length + 1;
			let stateCopy: InitialStateType = JSON.parse(JSON.stringify(state)); // deep copy

			stateCopy.dialogsData[action.dialogsId - 1].messagesData.push({
				userId: messagesDataLength,
				message: action.newMessage,
				photo: action.photo,
				userName: action.userName,
			});
			return stateCopy;
		}
		case SET_MESSAGE_DATA: {
			let stateCopy: InitialStateType = JSON.parse(JSON.stringify(state)); // deep copy
			stateCopy.dialogsData[0].messagesData = stateCopy.dialogsData[0].messagesData.concat(action.messageData);
			return stateCopy;
		}
		default:
			return state;
	}
};

//Actions:

export const actions = {
	addMessage: (newMessage: string, dialogsId: number, photo: string, userName: string) =>
		({ type: ADD_MESSAGE, newMessage, dialogsId, photo, userName} as const),
	setMessageData: (messageData: Array<MessageType>) =>
		({ type: SET_MESSAGE_DATA, messageData } as const),
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export default dialogsReducer;
