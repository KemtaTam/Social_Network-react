import React from "react";
import defaultAva from "../../../images/default.png";
import s from "./MessageItem.module.css";

type PropsType = {
	message: string;
	photo: string;
	userName: string;
	userId: number;
};
const MessageItem: React.FC<PropsType> = ({ message, photo, userName, userId }) => {

	return (
		<li className={s.message_item}>
			<img className={s.ava} src={photo || defaultAva} alt="ava" />
			<div className={s.name_and_message}>
				<div className={s.name}>
					<a href={"http://localhost:3000/profile/" + userId}>{userName}</a>
				</div>
				<div className={s.message}>{message}</div>
			</div>
		</li>
	);
};

export default MessageItem;

// https://kemtatam.github.io/Social_Network-react/#/profile/
