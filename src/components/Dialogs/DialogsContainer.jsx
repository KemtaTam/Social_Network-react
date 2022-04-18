import React from "react";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let state = props.store.getState();

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}
	let onMessageChange = (text) => {
		props.store.dispatch(onMessageChangeActionCreator(text));
	}

	return (
		<Dialogs addMessage={addMessage}
				onMessageChange={onMessageChange}
				dialogsData={state.dialogPage.dialogsData}
				messageData={state.dialogPage.messageData}
				newMessageValue={state.dialogPage.newMessageValue}
		/>
	)
}

export default DialogsContainer;