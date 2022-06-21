import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import { Navigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const DialogsForm = (props) => {
	return (
		<Formik
			initialValues={{ message: '' }}
			validationSchema={Yup.object({
				message: Yup.string().required(''),
			  })}
			onSubmit={(values, { setSubmitting }) => {
				props.addMessage(values.message);
				values.message = '';
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					 <div className={s.sendMessage}>
						<Field as="textarea" name="message" placeholder="Write a message..."/>
						<ErrorMessage className={s.errorMes} name="message" component="div" />
						<button className={s.bSend} type="submit" disabled={isSubmitting}>
							Send
						</button>
					</div>
				</Form>
			)}
		</Formik>
  );
}

const Dialogs = (props) => {
	let dialogsItem = props.dialogsData.map(el => <DialogItem id={el.id} name={el.name} key={el.id}/>)
	let messageItem = props.messageData.map(el => <MessageItem message={el.message} key={el.id}/>)
	
	if(!props.isAuth){
		return <Navigate to={"/login"}/>
	}

	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>
				<ul className={s.dialogs_ul}>
					{dialogsItem}
				</ul>
			</div>
			<div className={s.messageWrapper}>
				<div className={s.messages}>
					{messageItem}
				</div>
				<DialogsForm {...props}/>
			</div>
		</div>
	)
}

export default Dialogs;