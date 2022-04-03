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
					addPost={props.profilePage.addPost} 
					addLike={props.profilePage.addLike}
					newPostValue={props.profilePage.newPostValue}
					changePostValue={props.profilePage.changePostValue}
				/>
			</div>
		</section>
	)
}

export default Profile;