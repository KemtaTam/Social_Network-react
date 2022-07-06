import Preloader from "../../common/Preloader/Preloader";
import p from "./ProfileInfo.module.css"
import defaultAva from "../../../images/default.png"
import { useState } from "react";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);

	if(!props.usersData){
		return <Preloader />
	}

	let sendPhoto = (e) => {
		if(e.target.files.length){
			props.savePhoto(e.target.files[0]);
		}
	}
	
	return (
		<div className={p.profile_wrapper}> 
			<div className={[p.profile_info_wrapper, props.isOwner && p.profile_wrapper_input].join(' ')} >
				<img className={p.profile_img} 
					src={props.usersData.photos.small || defaultAva} alt="ava">
				</img> 
				<div className={p.profile_info}>
					<div className={p.profile_name}>{props.usersData.fullName}</div> 
					<ProfileStatusHooks {...props}/>
					<hr/>
					{
						editMode ? 
							<ProfileDataForm {...props} setEditMode={setEditMode}/> : 
							<ProfileData {...props} editModeOn={() => setEditMode(true)}/>
					}
				</div>
			</div>
			{props.isOwner && <input className={p.loadImg} type="file" onChange={sendPhoto}/>}
		</div>
	)
}

export default ProfileInfo;