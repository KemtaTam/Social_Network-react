import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {
	let dialogsItem = props.dialogsData.map(el => <DialogItem id={el.id} name={el.name} key={el.id}/>)
	let messageItem = props.messageData.map(el => <MessageItem message={el.message} key={el.id}/>)
	let newMessageValue = props.newMessageValue;

	let addMessage = () => {
		props.addMessage();
	}
	let onMessageChange = (event) => {
		let text = event.target.value;
		props.onMessageChange(text);
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