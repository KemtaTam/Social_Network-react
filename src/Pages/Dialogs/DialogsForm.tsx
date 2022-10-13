import React, { KeyboardEvent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AnyAction } from "redux";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { sendMessage } from "../../redux/reducers/dialogs-reducer";
import s from "./Dialogs.module.css";

type PropsFormType = {
	addMessage: (newMessageBody: string, dialogsId: number, photo: string, userName: string) => void;
	dialogId: number;
	setAutoScrollIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DialogsForm: React.FC<PropsFormType> = ({ addMessage, dialogId, setAutoScrollIsActive }) => {
	const dispatch = useAppDispatch();
	const { usersData } = useAppSelector((state) => state.profilePage);
	const { status } = useAppSelector((state) => state.dialogPage);

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
					: dispatch(sendMessage(values.message));

				values.message = "";
				setAutoScrollIsActive(true);
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
					: status === "ready" && dispatch(sendMessage(formik.values.message));
			}
			formik.values.message = "";
			setAutoScrollIsActive(true);
			pressed.clear();
		} else if (pressed.has("Enter") && pressed.has("Shift")) {
			formik.values.message += "\n";
		}
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className={s.sendMessage}>
				<TextField
					onChange={formik.handleChange}
					onKeyDown={onKeyDownHandler}
					value={formik.values.message}
					name="message"
					label="Write a message..."
					variant="filled"
					sx={{ bgcolor: "#38393AFF" }}
					multiline
					fullWidth
				/>
				<Button
					className={s.bSend}
					disabled={formik.isSubmitting || status !== "ready"}
					type="submit"
					variant="text"
					size="small">
					<SendIcon />
				</Button>
			</div>
		</form>
	);
};
