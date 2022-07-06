import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css"

const ProfileStatusHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	let changeEditMode = () => {
		if(props.isOwner) {
			setEditMode(!editMode);
			if(editMode) props.updateStatus(status);
		}
		
	}
	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return ( 
		<div>
			{!editMode ? 
				<div onClick={changeEditMode} className={props.isOwner ? s.status : s.non_owner_status}>{!props.status ? 'status' : props.status}</div> :
				<input onChange={onStatusChange} autoFocus={true} onBlur={changeEditMode} value={status} />
			}
		</div>
	)
}

export default ProfileStatusHooks;