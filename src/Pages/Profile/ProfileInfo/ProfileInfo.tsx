import React, { ChangeEvent } from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@mui/icons-material";

import { savePhoto } from "../../../redux/reducers/profile-reducer";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../../Components/common/Preloader/Preloader";
import defaultAva from "../../../images/default.png";
import p from "./ProfileInfo.module.css";

type PropsType = {
	isOwner: boolean;
};

const ProfileInfo: React.FC<PropsType> = ({ isOwner }) => {
	const [editMode, setEditMode] = useState(false);
	const dispatch = useAppDispatch();
	const { usersData, status } = useAppSelector((state) => state.profilePage);

	if (!usersData) {
		return <Preloader />;
	}

	const sendPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			dispatch(savePhoto(e.target.files[0]));
		}
	};

	return (
		<div className={p.profile_wrapper}>
			<div className={[p.profile_info_wrapper, isOwner && p.profile_wrapper_input].join(" ")}>
				<div className={p.profile_img_wrapper}>
					<img
						className={p.profile_img}
						src={usersData.photos.small || defaultAva}
						alt="ava"></img>
					<IconButton className={p.loadImg} color="primary" aria-label="upload picture" component="label">
						<input hidden accept="image/*" onChange={sendPhoto} type="file" />
						<PhotoCamera fontSize="large"/>
					</IconButton>
				</div>
				<div className={p.profile_info}>
					<div className={p.profile_name}>{usersData.fullName}</div>
					<ProfileStatus isOwner={isOwner} status={status} />
					<hr />
					{editMode ? (
						<ProfileDataForm usersData={usersData} setEditMode={setEditMode} />
					) : (
						<ProfileData
							usersData={usersData}
							isOwner={isOwner}
							editModeOn={() => setEditMode(true)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
