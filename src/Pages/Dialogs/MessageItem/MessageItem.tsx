import React from "react";
import { Link } from "react-router-dom";
import defaultAva from "../../../images/default.png";
import s from "./MessageItem.module.css";

type PropsType = {
	message: string;
	photo: string;
	userName: string;
	userId: number;
};
const MessageItem: React.FC<PropsType> = React.memo(({ message, photo, userName, userId }) => {
	return (
		<li className={s.message_item}>
			<img className={s.ava} src={photo || defaultAva} alt="ava" />
			<div className={s.name_and_message}>
				<div className={s.name}>
					<Link to={"/profile/" + userId}>{userName}</Link>
				</div>
				<div className={s.message}>{message}</div>
			</div>
		</li>
	);
});

export default MessageItem;


