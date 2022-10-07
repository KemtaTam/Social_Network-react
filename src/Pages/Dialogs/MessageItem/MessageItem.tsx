import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import defaultAva from "../../../images/default.png";
import { getUserProfile } from "../../../redux/reducers/profile-reducer";
import s from "./MessageItem.module.css";

type PropsType = {
	message: string;
	photo: string;
	userName: string;
	userId: number;
};
const MessageItem: React.FC<PropsType> = ({ message, photo, userName, userId }) => {
	const { userId: authId } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (authId) dispatch(getUserProfile(authId));
	}, [authId]);

	return (
		<li className={s.message_item}>
			<img className={s.ava} src={photo || defaultAva} alt="ava" />
			<div className={s.name_and_message}>
				<div className={s.name}>
					<a href={"/profile/" + userId}>{userName}</a>
				</div>
				<div className={s.message}>{message}</div>
			</div>
		</li>
	);
};

export default MessageItem;
