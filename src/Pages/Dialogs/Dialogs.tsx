import React from "react";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AnyAction } from "redux";

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

	return (
		<Formik
			initialValues={{ message: "" }}
			validationSchema={Yup.object({
				message: Yup.string().required(""),
			})}
			onSubmit={(values, { setSubmitting }) => {
				// todo
				dispatch(addMessage(values.message) as unknown as AnyAction);
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
