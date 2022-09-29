import React, { useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import { updateStatus } from "../../../../redux/reducers/profile-reducer";
import s from "./ProfileStatus.module.css";

type PropsType = {
	status: string;
	isOwner: boolean;
};

const ProfileStatus: React.FC<PropsType> = ({ status, isOwner }) => {
	const [editMode, setEditMode] = useState(false);
	const [_status, setStatus] = useState(status);

	const dispatch = useAppDispatch();

	useEffect(() => {
		setStatus(status);
	}, [status]);

	const changeEditMode = () => {
		if (isOwner) {
			setEditMode(!editMode);
			if (editMode) dispatch(updateStatus(_status));
		}
	};
	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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

export default ProfileStatus;
