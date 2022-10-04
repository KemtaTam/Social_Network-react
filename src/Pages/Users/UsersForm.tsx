import React from "react";
import { Field, Form, Formik } from "formik";
import { FilterType } from "../../redux/reducers/users-reducer";
import { useSearchParams } from "react-router-dom";
import s from "./Users.module.css";

type PropsType = {
	onFilterChanged: (filter: FilterType) => void;
};
type ValuesType = {
	term: string;
	friend: "null" | "true" | "false";
};
export const UsersForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
	const onSubmitHandler = (
		values: ValuesType,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		let friend: null | boolean = null;
		if (values.friend !== "null") friend = values.friend === "true" ? true : false;
		onFilterChanged({ term: values.term, friend });
		setSubmitting(false);
	};

	const [searchParams] = useSearchParams();
	const friendFromURL = searchParams.get("friend") as "null" | "true" | "false";
	const termFromURL = searchParams.get("term") || "";

	return (
		<Formik enableReinitialize initialValues={{ term: termFromURL, friend: friendFromURL }} onSubmit={onSubmitHandler}>
			{({ isSubmitting }) => (
				<Form>
					<Field name="term" placeholder="Search..." />
					<Field as="select" name="friend">
						<option value="null">All</option>
						<option value="true">Friends</option>
						<option value="false">Not friends</option>
					</Field>
					<button className={s.bSend} type="submit" disabled={isSubmitting}>
						Search
					</button>
				</Form>
			)}
		</Formik>
	);
});
