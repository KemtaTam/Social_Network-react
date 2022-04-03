import s from "./MessageItem.module.css"

const MessageItem = (props) => { 
	return (
		<div className={s.message_item}>
			{props.message}
		</div>
	)
}

export default MessageItem;