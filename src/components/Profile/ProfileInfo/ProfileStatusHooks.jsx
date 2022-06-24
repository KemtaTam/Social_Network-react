import React, { useState } from "react";

const ProfileStatusHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	let changeEditMode = () => {
		setEditMode(!editMode);
		if(editMode) props.updateStatus(status);
	}
	let onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return ( 
		<div>
			{!editMode ? 
				<div onClick={changeEditMode}>{!props.status ? 'status' : props.status}</div> : 
				<input onChange={onStatusChange} autoFocus={true} onBlur={changeEditMode} value={status} />
			}
		</div>
	)
}

export default ProfileStatusHooks;