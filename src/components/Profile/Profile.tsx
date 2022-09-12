import React from "react";

import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { UsersDataType } from "../../types/types";

import p from "./Profile.module.css";

type PropsType = {
	isOwner: boolean;
	usersData: UsersDataType | null;
	status: string;
	savePhoto: (photo: any) => void;
	updateStatus: (status: string) => void;
	saveProfile: (
		profile: UsersDataType,
		setStatus: (status: string) => void,
		setEditMode: (editMode: boolean) => void
	) => void;
};
const Profile: React.FC<PropsType> = ({
	isOwner,
	usersData,
	savePhoto,
	status,
	updateStatus,
	saveProfile,
}) => {
	return (
		<section className={p.content}>
			<div className={p.profile}>
				<ProfileInfo
					isOwner={isOwner}
					usersData={usersData}
					savePhoto={savePhoto}
					status={status}
					updateStatus={updateStatus}
					saveProfile={saveProfile}
				/>
				<PostsContainer />
			</div>
		</section>
	);
};

export default Profile;
