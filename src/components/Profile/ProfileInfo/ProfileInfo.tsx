import React from "react";
import { useState } from "react";

import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import { UsersDataType } from "../../../types/types";

import p from "./ProfileInfo.module.css";
import defaultAva from "../../../images/default.png";
import Preloader from "../../common/Preloader/Preloader";

type PropsType = {
	usersData: UsersDataType | null;
	isOwner: boolean;
	status: string;
	savePhoto: (file: any) => void;
	updateStatus: (status: string) => void;
	saveProfile: (
		profile: UsersDataType,
		setStatus: (status: string) => void,
		setEditMode: (editMode: boolean) => void
	) => void;
};

const ProfileInfo: React.FC<PropsType> = ({ usersData, isOwner, savePhoto, status, updateStatus, saveProfile }) => {
	let [editMode, setEditMode] = useState(false);

	if (!usersData) {
		return <Preloader />;
	}

	let sendPhoto = (e: any) => {
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
					<ProfileStatusHooks isOwner={isOwner} status={status} updateStatus={updateStatus} />
					<hr />
					{editMode ? (
						<ProfileDataForm usersData={usersData} setEditMode={setEditMode} saveProfile={saveProfile}/>
					) : (
						<ProfileData
							usersData={usersData}
							isOwner={isOwner}
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
