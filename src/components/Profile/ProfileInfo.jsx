import Preloader from "../common/Preloader/Preloader";
import p from "./Profile.module.css"
import defaultAva from "../../images/default.png"

const ProfileInfo = (props) => {
	if(!props.usersData){
		return <Preloader />
	}
	return (
		<div>
			{!props.usersData.photos.large ? null : 
				<img className={p.back_img} src={props.usersData.photos.large} alt="back-img"></img> 
			}
			<div className={p.profile_info_wrapper}>
				 <img className={p.profile_img} 
					src={!props.usersData.photos.small ? defaultAva : props.usersData.photos.small} alt="ava">
				</img> 
				<div className={p.profile_info}>
					<div className={p.profile_name}>{props.usersData.fullName}</div> <hr/>
					<div className={p.profile_additional}>
						<div className={p.profile_additional_kind}>
							Date of Birth: <br/>
							City:<br/>
							Education:<br/>
							Web-Site:<br/>
							About:<br/>
							VK:<br/>
						</div>
						<div className={p.profile_additional_value}>
							01.01.2000<br/>
							Tomsk<br/>
							TSU<br/>
							https://lala.com<br/>
							{props.usersData.aboutMe}<br/>
							{!props.usersData.contacts.vk ? 'not specified' : props.usersData.contacts.vk}<br/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;