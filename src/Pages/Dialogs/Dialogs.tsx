import React, { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { DialogsForm } from "./DialogsForm";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { actions, startMessagesListening, stopMessagesListening } from "../../redux/reducers/dialogs-reducer";
import { useIdFromURL } from "../../hooks/id";
import { DialogType, MessageType } from "../../types/dialogs-types";
import { getUserProfile } from "../../redux/reducers/profile-reducer";
import s from "./Dialogs.module.css";

const Dialogs = React.memo(() => {
	const { userId: authId, isAuth } = useAppSelector((state) => state.auth);
	const { status, dialogsData } = useAppSelector((state) => state.dialogPage);
	const [autoScrollIsActive, setAutoScrollIsActive] = useState(false);

	const dispatch = useAppDispatch();

	const pathname = useLocation().pathname;
	let dialogId = useIdFromURL(pathname);
	const messagesAnchorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (authId) dispatch(getUserProfile(authId));

		dispatch(startMessagesListening());
		return () => {
			dispatch(stopMessagesListening());
		};
	}, []);

	useEffect(() => {
		autoScrollIsActive && messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [dialogsData]);

	const scrollHandler = (e: React.UIEvent<HTMLUListElement>) => {
		const element = e.currentTarget;
		if (element.scrollHeight - element.scrollTop === element.clientHeight){
			setAutoScrollIsActive(true);
		} else setAutoScrollIsActive(false);
	}

	let dialogsItem = dialogsData.map((el: DialogType) => <DialogItem id={el.id} name={el.name} key={el.id} />);
	let messageItem =
		dialogId !== 0 &&
		dialogsData[dialogId - 1]?.messagesData.map((el: MessageType) => (
			<MessageItem
				message={el.message}
				key={ Math.random() * Date.now() + ""}
				photo={el.photo}
				userName={el.userName}
				userId={el.userId}
			/>
		));

	if (!isAuth) {
		return <Navigate to={"/login"} />;
	}

	return (
		<>
			{status === "error" && <p className={s.error}>Internet connection error</p>}
			<div className={s.wrapper}>
				<div className={s.dialogs}>
					<ul className={s.dialogs_ul}>{dialogsItem}</ul>
				</div>
				<div className={s.messageWrapper}>
					<ul className={s.messages} onScroll={scrollHandler}>
						{messageItem}
						<div ref={messagesAnchorRef}></div>
					</ul>
					<DialogsForm addMessage={actions.addMessage} dialogId={dialogId} setAutoScrollIsActive={setAutoScrollIsActive}/>
				</div>
			</div>
		</>
	);
})

export default Dialogs;
