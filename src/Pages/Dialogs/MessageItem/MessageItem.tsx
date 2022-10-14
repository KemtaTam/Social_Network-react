import React from "react";
import { NavLink } from "react-router-dom";
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
					<NavLink to={"/profile/" + userId}>{userName}</NavLink>
				</div>
				<div className={s.message}>{message}</div>
			</div>
		</li>
	);
});

export default MessageItem;
