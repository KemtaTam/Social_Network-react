import React, { KeyboardEvent, useEffect, useState } from "react";
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
	wsChannel: WebSocket | null;
	setInternetConnection: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DialogsForm: React.FC<PropsFormType> = ({
	addMessage,
	dialogId,
	wsChannel,
	setInternetConnection,
}) => {
	const dispatch = useAppDispatch();
	const { usersData } = useAppSelector((state) => state.profilePage);
	const [readyStatus, setReadyStatus] = useState<"ready" | "pending">("pending");

	const openHandler = () => setReadyStatus("ready");

	useEffect(() => {
		if (wsChannel) {
			wsChannel.addEventListener("open", openHandler);
			setInternetConnection(true);
		}

		return () => {
			wsChannel?.removeEventListener("open", openHandler);
		};
	}, [wsChannel]);

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
							) as unknown as AnyAction // todo
					  )
					: wsChannel?.send(values.message);

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
							) as unknown as AnyAction // todo
					  )
					: readyStatus === "ready" && wsChannel?.send(formik.values.message);
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
					disabled={formik.isSubmitting || readyStatus !== "ready"}
					type="submit"
					variant="text"
					size="small">
					<SendIcon />
				</Button>
			</div>
		</form>
	);
};
