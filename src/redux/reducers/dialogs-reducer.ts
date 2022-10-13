import { Dispatch } from "redux";
import { dialogsApi, StatusType } from "./../../api/dialogs-api";
import { DefaultThunkType, InferActionsTypes } from "./../redux-store";
import { DialogType, MessageType } from "./../../types/dialogs-types";

let initialState = {
	status: "pending" as StatusType,
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
const CLEAR_MESSAGE_DATA = "dialogs/CLEAR_MESSAGE_DATA";
const SET_STATUS = "dialogs/SET_STATUS";

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case ADD_MESSAGE: {
			const messagesDataLength: number = state.dialogsData[action.dialogsId - 1].messagesData.length + 1;
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
		case CLEAR_MESSAGE_DATA: {
			let stateCopy: InitialStateType = JSON.parse(JSON.stringify(state)); // deep copy
			stateCopy.dialogsData[0].messagesData = [];
			return stateCopy;
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		default:
			return state;
	}
};

//Actions:

export const actions = {
	addMessage: (newMessage: string, dialogsId: number, photo: string, userName: string) =>
		({ type: ADD_MESSAGE, newMessage, dialogsId, photo, userName } as const),
	setMessageData: (messageData: Array<MessageType>) => ({ type: SET_MESSAGE_DATA, messageData } as const),
	clearMessageData: () => ({ type: CLEAR_MESSAGE_DATA } as const),
	setStatus: (status: StatusType) => ({ type: SET_STATUS, status } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;

//Thunks:

type ThunkType = DefaultThunkType<ActionsTypes>;

let _newMessagesHandler: ((messages: Array<MessageType>) => void) | null = null;
const newMessagesHandlerCreator = (dispatch: Dispatch) => {
	if (_newMessagesHandler === null) {
		_newMessagesHandler = (messages) => {
			dispatch(actions.setMessageData(messages));
		};
	}

	return _newMessagesHandler;
};

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusHandlerCreator = (dispatch: Dispatch) => {
	if (_statusChangedHandler === null) {
		_statusChangedHandler = (status) => {
			dispatch(actions.setStatus(status));
		};
	}

	return _statusChangedHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
	dialogsApi.start();
	dialogsApi.subscribe("message-received", newMessagesHandlerCreator(dispatch));
	dialogsApi.subscribe("status-changed", statusHandlerCreator(dispatch));
};
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
	dialogsApi.unsubscribe("message-received", newMessagesHandlerCreator(dispatch));
	dialogsApi.unsubscribe("status-changed", statusHandlerCreator(dispatch));
	dispatch(actions.clearMessageData());
	dialogsApi.stop();
};
export const sendMessage =
	(message: string): ThunkType =>
	async (dispatch) => {
		dialogsApi.sendMessage(message);
	};

export default dialogsReducer;
