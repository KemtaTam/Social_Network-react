import React from "react";
import { useState } from "react";

import ProfileData from "./ProfileData/ProfileData.tsx";
import ProfileDataForm from "./ProfileData/ProfileDataForm.tsx";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks.tsx";
import { UsersDataType } from "../../../types/types";

import p from "./ProfileInfo.module.css";
import defaultAva from "../../../images/default.png";
import Preloader from "../../common/Preloader/Preloader";

type PropsType = {
	usersData: UsersDataType;
	isOwner: boolean;
	savePhoto: (file: any) => void;
};

const ProfileInfo: React.FC<PropsType> = ({ usersData, isOwner, savePhoto, ...props }) => {
	let [editMode, setEditMode] = useState(false);

	if (!usersData) {
		return <Preloader />;
	}

	let sendPhoto = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	return (
		<div className={p.profile_wrapper}>
			<div className={[p.profile_info_wrapper, isOwner && p.profile_wrapper_input].join(" ")}>
				<img
					className={p.profile_img}
					src={usersData.photos.small || defaultAva}
					alt="ava"></img>
				<div className={p.profile_info}>
					<div className={p.profile_name}>{usersData.fullName}</div>
					<ProfileStatusHooks isOwner={isOwner} {...props} />
					<hr />
					{editMode ? (
						<ProfileDataForm usersData={usersData} {...props} setEditMode={setEditMode} />
					) : (
						<ProfileData
							usersData={usersData}
							isOwner={isOwner}
							{...props}
							editModeOn={() => setEditMode(true)}
						/>
					)}
				</div>
			</div>
			{isOwner && <input className={p.loadImg} type="file" onChange={sendPhoto} />}
		</div>
	);
};

export default ProfileInfo;
