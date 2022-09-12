import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
	status: string;
	isOwner: boolean;
	updateStatus: (status: string) => void;
};

const ProfileStatusHooks: React.FC<PropsType> = ({ status, isOwner, updateStatus }) => {
	let [editMode, setEditMode] = useState(false);
	let [_status, setStatus] = useState(status);

	useEffect(() => {
		setStatus(status);
	}, [status]);

	let changeEditMode = () => {
		if (isOwner) {
			setEditMode(!editMode);
			if (editMode) updateStatus(_status);
		}
	};
	let onStatusChange = (e: any) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			{!editMode ? (
				<div onClick={changeEditMode} className={isOwner ? s.status : s.non_owner_status}>
					{!status ? "status" : status}
				</div>
			) : (
				<input
					onChange={onStatusChange}
					autoFocus={true}
					onBlur={changeEditMode}
					value={_status}
				/>
			)}
		</div>
	);
};

export default ProfileStatusHooks;
