import React from "react";
import { ProfileDataType } from "../../../../types/types";
import p from "./ProfileData.module.css";

type PropsType = {
	usersData: ProfileDataType;
	editModeOn: () => void;
	isOwner: boolean;
};
type PropsTypeContacts = {
	contactTitle: string;
	contactValue: string;
	title: boolean;
};

const ProfileData: React.FC<PropsType> = ({ usersData, isOwner, editModeOn }) => {
	let contactsTitle = Object.keys(usersData.contacts).map((key) => {
		return (
			<Contacts
				key={key}
				contactTitle={key}
				contactValue={usersData.contacts[key]}
				title={true}
			/>
		);
	});
	let contactsValue = Object.keys(usersData.contacts).map((key) => {
		return (
			<Contacts
				key={key}
				contactTitle={key}
				contactValue={usersData.contacts[key]}
				title={false}
			/>
		);
	});

	return (
		<div>
			{isOwner && (
				<div>
					<button onClick={editModeOn}>Edit mode</button>
				</div>
			)}
			<div className={p.profile_additional}>
				<div className={p.profile_additional_kind}>
					<div>{usersData.aboutMe && "About:"}</div>
					<div>Looking for a job:</div>
					{contactsTitle}
				</div>
				<div className={p.profile_additional_value}>
					<div>{usersData.aboutMe && usersData.aboutMe}</div>
					<div>
						{!usersData.lookingForAJob ? "No" : usersData.lookingForAJobDescription}
					</div>
					{contactsValue}
				</div>
			</div>
		</div>
	);
};

const Contacts: React.FC<PropsTypeContacts> = ({ contactValue, title, contactTitle }) => {
	return (
		<div>
			{contactValue && (
				<div className={p.contacts}>{title ? contactTitle + ":" : contactValue}</div>
			)}
		</div>
	);
};

export default ProfileData;
