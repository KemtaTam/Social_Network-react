import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {
	let dialogsItem = props.dialogPage.dialogsData.map(el => <DialogItem id={el.id} name={el.name} />)
	let messageItem = props.dialogPage.messageData.map(el => <MessageItem message={el.message}/>)

	let sendMess = React.useRef(null);
		let addPost = () => {
			let text = sendMess.current.value;
			alert(text);
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
					<textarea ref={sendMess} name="sendMessage" cols="30" rows="5"></textarea>
					<button className={d.bSend} onClick={addPost}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;