import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import { Navigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { DialogType, MessageType } from "../../types/dialogs-types";

type PropsFormType = {
	addMessage: (newMessageBody: string) => void;
};
const DialogsForm: React.FC<PropsFormType> = ({ addMessage }) => {
	return (
		<Formik
			initialValues={{ message: "" }}
			validationSchema={Yup.object({
				message: Yup.string().required(""),
			})}
			onSubmit={(values, { setSubmitting }) => {
				addMessage(values.message);
				values.message = "";
				setSubmitting(false);
			}}>
			{({ isSubmitting }) => (
				<Form>
					<div className={s.sendMessage}>
						<Field as="textarea" name="message" placeholder="Write a message..." />
						<ErrorMessage className={s.errorMes} name="message" component="div" />
						<button className={s.bSend} type="submit" disabled={isSubmitting}>
							Send
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

type PropsType = {
	dialogsData: Array<DialogType>;
	messageData: Array<MessageType>;
	isAuth: boolean;
	addMessage: (newMessageBody: string) => void;
};
const Dialogs: React.FC<PropsType> = ({ dialogsData, messageData, isAuth, addMessage }) => {
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
				<DialogsForm addMessage={addMessage} />
			</div>
		</div>
	);
};

export default Dialogs;
