import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { UsersDataType } from "../../../../types/types";
import p from "./ProfileData.module.css";

type PropsType = {
	usersData: UsersDataType;
	setEditMode: (editMode: boolean) => void;
	saveProfile: (
		profileData: UsersDataType,
		setStatus: (status: string) => void,
		setEditMode: (editMode: boolean) => void
	) => void;
};

const ProfileDataForm: React.FC<PropsType> = ({ usersData, setEditMode, saveProfile }) => {
	let contactsTitle = Object.keys(usersData.contacts).map((key) => {
		return (
			<div key={key}>
				<Field name={"contacts." + key} placeholder={key} />
				<ErrorMessage className={p.errorMes} name={key} component="div" />
			</div>
		);
	});

	return (
		<Formik
			initialValues={{
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
			}}
			validationSchema={Yup.object({})}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				saveProfile(values, setStatus, setEditMode);
				setSubmitting(false);
			}}>
			{({ isSubmitting, status }) => (
				<Form className={status && p.error}>
					<div className={p.errorText}>{status}</div>
					<div>
						<Field name="fullName" placeholder="fullName" />
						<ErrorMessage className={p.errorMes} name="fullName" component="div" />
					</div>
					<div>
						<Field name="aboutMe" as="textarea" placeholder="aboutMe" />
						<ErrorMessage className={p.errorMes} name="aboutMe" component="div" />
					</div>
					<div>
						lookingForAJob: <Field name="lookingForAJob" type="checkbox" />
					</div>
					<div>
						<Field
							name="lookingForAJobDescription"
							as="textarea"
							placeholder="lookingForAJobDescription"
						/>
						<ErrorMessage
							className={p.errorMes}
							name="lookingForAJobDescription"
							component="div"
						/>
					</div>
					Contacts: <br />
					{contactsTitle}
					<button type="submit" disabled={isSubmitting}>
						Save
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ProfileDataForm;
