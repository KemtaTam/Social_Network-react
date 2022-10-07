import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { DialogType, MessageType } from "../../types/dialogs-types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { actions } from "../../redux/reducers/dialogs-reducer";
import { useIdFromURL } from "../../hooks/id";
import { DialogsForm } from "./DialogsForm";
import s from "./Dialogs.module.css";

const wsChannel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");

const Dialogs = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		wsChannel.addEventListener("message", (e) => {
			dispatch(actions.setMessageData(JSON.parse(e.data)));
		});
	}, []);

	const { dialogsData } = useAppSelector((state) => state.dialogPage);
	const { isAuth } = useAppSelector((state) => state.auth);

	const pathname = useLocation().pathname;
	let dialogId = useIdFromURL(pathname);

	let dialogsItem = dialogsData.map((el: DialogType) => (
		<DialogItem id={el.id} name={el.name} key={el.id} />
	));
	let messageItem =
		dialogId !== 0 &&
		dialogsData[dialogId - 1]?.messagesData.map((el: MessageType) => (
			<MessageItem
				message={el.message}
				key={el.userId + el.message + Math.random()}
				photo={el.photo}
				userName={el.userName}
				userId={el.userId}
			/>
		));

	if (!isAuth) {
		return <Navigate to={"/login"} />;
	}

	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>
				<ul className={s.dialogs_ul}>{dialogsItem}</ul>
			</div>
			<div className={s.messageWrapper}>
				<ul className={s.messages}>{messageItem}</ul>
				<DialogsForm
					addMessage={actions.addMessage}
					dialogId={dialogId}
					wsChannel={wsChannel}
				/>
			</div>
		</div>
	);
};

export default Dialogs;
