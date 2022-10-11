import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { DialogsForm } from "./DialogsForm";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { actions } from "../../redux/reducers/dialogs-reducer";
import { useIdFromURL } from "../../hooks/id";
import { DialogType, MessageType } from "../../types/dialogs-types";
import { getUserProfile } from "../../redux/reducers/profile-reducer";
import s from "./Dialogs.module.css";

const Dialogs = () => {
	const dispatch = useAppDispatch();
	const { userId: authId } = useAppSelector((state) => state.auth);

	const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
	const [isInternetConnection, setInternetConnection] = useState(true);

	const messageHandler = (e: MessageEvent<any>) => {
		dispatch(actions.setMessageData(JSON.parse(e.data)));
	};

	useEffect(() => {
		wsChannel?.addEventListener("message", messageHandler);
		return () => wsChannel?.removeEventListener("message", messageHandler);
	}, [wsChannel]);

	useEffect(() => {
		if (authId) dispatch(getUserProfile(authId));

		let ws: WebSocket;
		const closeHandler = () => {
			console.log("CLOSE");
			setInternetConnection(false);
			setTimeout(createWebSocketChanel, 3000);
		};

		const createWebSocketChanel = () => {
			ws?.removeEventListener("close", closeHandler);
			ws?.close();

			ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
			ws.addEventListener("close", closeHandler);
			setWsChannel(ws);
		};
		createWebSocketChanel();

		return () => {
			ws.removeEventListener("close", closeHandler);
			ws.close();
		};
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
					setInternetConnection={setInternetConnection}
				/>
			</div>
			{!isInternetConnection && "Internet connection error"}		{/* todo: проверить */}
		</div>
	);
};

export default Dialogs;
