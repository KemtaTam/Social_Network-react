import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
	let dialogsItem = props.dialogsData.map(el => <DialogItem id={el.id} name={el.name} />)
	let messageItem = props.messageData.map(el => <MessageItem message={el.message}/>)

	return (
		<div>
			{props.text}
			<div className={d.wrapper}>
				<div className={d.dialogs}>
					<ul className={d.dialogs_ul}>
						{dialogsItem}
					</ul>
				</div>
				<div className={d.mesages}>
					{messageItem}
				</div>
			</div>
		</div>
	)
}

export default Dialogs;