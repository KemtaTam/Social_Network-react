import React from "react";
import { useFormik } from "formik";
import { Button, TextField, Checkbox } from "@mui/material";

import { ContactsType, ProfileDataType } from "../../../../types/types";
import { useAppDispatch } from "../../../../hooks/redux";
import { saveProfile } from "../../../../redux/reducers/profile-reducer";
import p from "./ProfileData.module.css";

type PropsType = {
	usersData: ProfileDataType;
	setEditMode: (editMode: boolean) => void;
};

const ProfileDataForm: React.FC<PropsType> = ({ usersData, setEditMode }) => {
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: {
			userId: usersData.userId,
			photos: usersData.photos,
			aboutMe: usersData.aboutMe,
			lookingForAJob: usersData.lookingForAJob,
			lookingForAJobDescription: usersData.lookingForAJobDescription,
			fullName: usersData.fullName,
			contacts: {
				facebook: usersData.contacts.facebook,
				website: usersData.contacts.website,
				vk: usersData.contacts.vk,
				twitter: usersData.contacts.twitter,
				instagram: usersData.contacts.instagram,
				youtube: usersData.contacts.youtube,
				github: usersData.contacts.github,
				mainLink: usersData.contacts.mainLink,
			},
		},
		onSubmit: (values, { setSubmitting, setStatus }) => {
			dispatch(saveProfile(values, setStatus, setEditMode));
			setSubmitting(false);
		},
	});
	debugger;
	const contactsTitle = Object.keys(usersData.contacts).map((key) => {
		return (
			<TextField
				key={key}
				label={key}
				size="small"
				value={formik.values.contacts[key as keyof ContactsType]}
				onChange={formik.handleChange}
				variant="filled"
				name={"contacts." + key}
			/>
		);
	});

	return (
		<form onSubmit={formik.handleSubmit} className={[formik.status && p.error, p.form].join(" ")}>
			<div className={p.form_wrapper}>
				<div className={p.errorText}>{formik.status}</div>
				<TextField
					label="fullName"
					size="small"
					value={formik.values.fullName}
					onChange={formik.handleChange}
					variant="filled"
					name="fullName"
				/>
				<TextField
					label="aboutMe"
					size="small"
					value={formik.values.aboutMe}
					onChange={formik.handleChange}
					variant="filled"
					name="aboutMe"
				/>
				<div className={p.lookingForAJob_wraper}>
					<Checkbox
						name="lookingForAJob"
						checked={formik.values.lookingForAJob}
						onChange={formik.handleChange}
					/>
					<span className={p.lookingForAJob}>Looking for a job</span>
				</div>
				<TextField
				className={p.lookingForAJobDescription}
					label="lookingForAJobDescription"
					value={formik.values.lookingForAJobDescription}
					onChange={formik.handleChange}
					variant="filled"
					name="lookingForAJobDescription"
				/>
				<div className={p.contacts_title}>Contacts:</div> 
				{contactsTitle}
				<Button
					variant="contained"
					type="submit"
					disabled={formik.isSubmitting}
					size="small"
					sx={{mt: 1}}>
					Save
				</Button>
			</div>
		</form>
	);
};

export default ProfileDataForm;
