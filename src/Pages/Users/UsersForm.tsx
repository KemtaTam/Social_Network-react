import React from "react";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { FilterType } from "../../redux/reducers/users-reducer";
import s from "./Users.module.css";

type PropsType = {
	onFilterChanged: (filter: FilterType) => void;
};

export const UsersForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
	const [searchParams] = useSearchParams();
	const friendFromURL = (searchParams.get("friend") as "null" | "true" | "false") || "null";
	const termFromURL = searchParams.get("term") || "";

	const formik = useFormik({
		initialValues: { term: termFromURL, friend: friendFromURL },
		onSubmit: (values, { setSubmitting }) => {
			let friend: null | boolean = null;
			if (values.friend !== "null") friend = values.friend === "true" ? true : false;
			onFilterChanged({ term: values.term, friend });
			setSubmitting(false);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className={s.form}>
			<TextField
				name="term"
				size="small"
				value={formik.values.term}
				onChange={formik.handleChange}
				label="Search..."
				variant="filled"
				sx={{ width: "405px" }}
			/>
			<Select
				name="friend"
				value={formik.values.friend}
				onChange={formik.handleChange}
				size="small"
				label="Users">
				<MenuItem value="null">All</MenuItem>
				<MenuItem value="true">Friends</MenuItem>
				<MenuItem value="false">Not friends</MenuItem>
			</Select>
			<Button
				className={s.bSend}
				type="submit"
				variant="contained"
				size="small"
				disabled={formik.isSubmitting}>
				Search
			</Button>
		</form>
	);
});
