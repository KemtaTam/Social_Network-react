import React, { KeyboardEvent } from "react";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { AnyAction } from "redux";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { DialogType, MessageType } from "../../types/dialogs-types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { actions } from "../../redux/reducers/dialogs-reducer";
import s from "./Dialogs.module.css";

type PropsFormType = {
	addMessage: (newMessageBody: string) => void;
};
const DialogsForm: React.FC<PropsFormType> = ({ addMessage }) => {
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: { message: "" },
		validationSchema: Yup.object({
			message: Yup.string().required(""),
		}),
		onSubmit: (values, { setSubmitting }) => {
			// todo
			if (values.message.trim()) {
				dispatch(addMessage(values.message) as unknown as AnyAction);
				values.message = "";
			}
			setSubmitting(false);
		},
	});

	let pressed = new Set();
	const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		pressed.add(e.key);

		if (!pressed.has("Shift") && e.key === "Enter") {
			e.preventDefault();
			if (formik.values.message.trim()) {
				dispatch(addMessage(formik.values.message) as unknown as AnyAction); // todo
			}
			formik.values.message = "";
			pressed.clear();
		} else if (pressed.has("Enter") && pressed.has("Shift")) {
			formik.values.message += "\n";
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className={s.sendMessage}>
				<TextField
					label="Write a message..."
					onKeyDown={onKeyDownHandler}
					value={formik.values.message}
					onChange={formik.handleChange}
					multiline
					variant="filled"
					fullWidth
					name="message"
					sx={{ bgcolor: "#38393AFF" }}
				/>
				<Button
					className={s.bSend}
					type="submit"
					variant="text"
					size="small"
					disabled={formik.isSubmitting}>
					<SendIcon />
				</Button>
			</div>
		</form>
	);
};

const Dialogs = () => {
	const { dialogsData, messageData } = useAppSelector((state) => state.dialogPage);
	const { isAuth } = useAppSelector((state) => state.auth);

	let dialogsItem = dialogsData.map((el: DialogType) => (
		<DialogItem id={el.id} name={el.name} key={el.id} />
	));
	let messageItem = messageData.map((el: MessageType) => (
		<MessageItem message={el.message} key={el.id} />
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
				<div className={s.messages}>{messageItem}</div>
				<DialogsForm addMessage={actions.addMessage} />
			</div>
		</div>
	);
};

export default Dialogs;
