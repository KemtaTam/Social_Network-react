import Posts from "./Posts/Posts";
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
	return (
		<section className={p.content}>
			<div className={p.profile}>
				<ProfileInfo />
				<Posts 
					postData={props.profilePage.postData} 
					dispatch={props.dispatch}
					newPostValue={props.profilePage.newPostValue}
				/>
			</div>
		</section>
	)
}

export default Profile;