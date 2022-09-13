import { InferActionsTypes } from './../redux-store';
import { DialogType, MessageType } from "./../../types/dialogs-types";
const ADD_MESSAGE = "dialogs/ADD_MESSAGE";

let initialState = {
	dialogsData: [
		{ id: 1, name: "Andrey" },
		{ id: 2, name: "Dmitry" },
		{ id: 3, name: "Sasha" },
		{ id: 4, name: "Sveta" },
	] as Array<DialogType>,
	messageData: [
		{ id: 1, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, a?" },
		{ id: 2, message: "Lorem." },
		{ id: 3, message: "Lorem ipsum dolor sit" },
		{ id: 4, message: "Lorem ipsum dolor sit amet" },
		{
			id: 5,
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur labore iusto, aut excepturi nulla?",
		},
	] as Array<MessageType>,
};
export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let len: number = state.messageData.length + 1;
			return {
				...state,
				messageData: [...state.messageData, { id: len, message: action.newMessage }],
			};
		}
		default:
			return state;
	}
};

//Actions:

export const actions = {
	addMessage: (newMessage: string) => ({ type: ADD_MESSAGE, newMessage } as const),
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export default dialogsReducer;
