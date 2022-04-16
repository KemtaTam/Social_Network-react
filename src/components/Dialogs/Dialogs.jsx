import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/reducers/dialogs-reducer";

const Dialogs = (props) => {
	let dialogsItem = props.dialogPage.dialogsData.map(el => <DialogItem id={el.id} name={el.name} />)
	let messageItem = props.dialogPage.messageData.map(el => <MessageItem message={el.message}/>)
	let newMessageValue = props.dialogPage.newMessageValue;

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}
	let onMessageChange = (event) => {
		let text = event.target.value;
		props.dispatch(onMessageChangeActionCreator(text));
	}

	return (
		<div className={d.wrapper}>
			<div className={d.dialogs}>
				<ul className={d.dialogs_ul}>
					{dialogsItem}
				</ul>
			</div>
			<div className={d.messageWrapper}>
				<div className={d.messages}>
					{messageItem}
				</div>
				<div className={d.sendMessage}>
					<textarea onChange={onMessageChange} value={newMessageValue} 
						placeholder="Write a message...">
					</textarea>
					<button className={d.bSend} onClick={addMessage}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;