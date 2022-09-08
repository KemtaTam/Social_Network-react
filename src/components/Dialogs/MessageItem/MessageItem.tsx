import React from "react";
import s from "./MessageItem.module.css"

type PropsType = {
	message: string;
}
const MessageItem: React.FC<PropsType> = ({message}) => { 
	return (
		<div className={s.message_item}>
			{message}
		</div>
	)
}

export default MessageItem;