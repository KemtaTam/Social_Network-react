import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import p from "./ProfileData.module.css";

const ProfileDataForm = (props) => {
	let contactsTitle = Object.keys(props.usersData.contacts).map((key) => {
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
				aboutMe: props.usersData.aboutMe,
				lookingForAJob: props.usersData.lookingForAJob,
				lookingForAJobDescription: props.usersData.lookingForAJobDescription,
				fullName: props.usersData.fullName,
				contacts: {
					facebook: props.usersData.contacts.facebook,
					website: props.usersData.contacts.website,
					vk: props.usersData.contacts.vk,
					twitter: props.usersData.contacts.twitter,
					instagram: props.usersData.contacts.instagram,
					youtube: props.usersData.contacts.youtube,
					github: props.usersData.contacts.github,
					mainLink: props.usersData.contacts.mainLink,
				},
			}}
			validationSchema={Yup.object({})}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				props.saveProfile(values, setStatus, props.setEditMode);
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
