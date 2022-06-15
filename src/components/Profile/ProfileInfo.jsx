import Preloader from "../common/Preloader/Preloader";
import p from "./Profile.module.css"
import defaultAva from "../../images/default.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if(!props.usersData){
		return <Preloader />
	}

	return (
		<div>
			{/* !props.usersData.photos.large ? null : 
				<img className={p.back_img} src={props.usersData.photos.large} alt="back-img"></img> 
			 */}
			<div className={p.profile_info_wrapper}>
				 <img className={p.profile_img} 
					src={!props.usersData.photos.small ? defaultAva : props.usersData.photos.small} alt="ava">
				</img> 
				<div className={p.profile_info}>
					<div className={p.profile_name}>{props.usersData.fullName}</div> 
					<ProfileStatus status='laalla'/>
					<hr/>
					<div className={p.profile_additional}>
						<div className={p.profile_additional_kind}>
							<div>{!props.usersData.contacts.website ? null : "Web-Site:" }</div>
							<div>{!props.usersData.aboutMe ? null : "About:"}</div>
							<div>VK:</div>
							<div>Looking for a job:</div>
						</div>
						<div className={p.profile_additional_value}>
							<div>{!props.usersData.contacts.website ? null : props.usersData.contacts.website}</div>
							<div>{!props.usersData.aboutMe ? null : props.usersData.aboutMe}</div>
							<div>{!props.usersData.contacts.vk ? 'not specified' : props.usersData.contacts.vk}</div>
							<div>{!props.usersData.lookingForAJob ? "No" : props.usersData.lookingForAJobDescription}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;