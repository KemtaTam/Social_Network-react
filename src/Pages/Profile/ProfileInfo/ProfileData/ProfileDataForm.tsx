import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ProfileDataType } from "../../../../types/types";
import { useAppDispatch } from "../../../../hooks/redux";
import p from "./ProfileData.module.css";
import { saveProfile } from "../../../../redux/reducers/profile-reducer";

type PropsType = {
	usersData: ProfileDataType;
	setEditMode: (editMode: boolean) => void;
};

const ProfileDataForm: React.FC<PropsType> = ({ usersData, setEditMode }) => {
	const dispatch = useAppDispatch();

	const contactsTitle = Object.keys(usersData.contacts).map((key) => {
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
			}}
			validationSchema={Yup.object({})}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				dispatch(saveProfile(values, setStatus, setEditMode));
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
