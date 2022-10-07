import React, { KeyboardEvent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AnyAction } from "redux";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import s from "./Dialogs.module.css";

type PropsFormType = {
	addMessage: (
		newMessageBody: string,
		dialogsId: number,
		photo: string,
		userName: string
	) => void;
	dialogId: number;
	wsChannel: WebSocket;
};
export const DialogsForm: React.FC<PropsFormType> = ({ addMessage, dialogId, wsChannel }) => {
	const dispatch = useAppDispatch();
	const { usersData } = useAppSelector((state) => state.profilePage);

	const formik = useFormik({
		initialValues: { message: "" },
		validationSchema: Yup.object({
			message: Yup.string().required(""),
		}),
		onSubmit: (values, { setSubmitting }) => {
			if (values.message.trim()) {
				dialogId !== 1
					? dispatch(
							addMessage(
								values.message,
								dialogId,
								usersData?.photos.small || "",
								usersData?.fullName || "Name"
							) as unknown as AnyAction
					  )
					: wsChannel.send(values.message);

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
				dialogId !== 1
					? dispatch(
							addMessage(
								formik.values.message,
								dialogId,
								usersData?.photos.small || "",
								usersData?.fullName || "Name"
							) as unknown as AnyAction
					  )
					: wsChannel.send(formik.values.message);
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
