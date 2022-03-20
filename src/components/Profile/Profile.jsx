import Posts from "./Posts/Posts";
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
	return (
		<section className={p.content}>
			<div className={p.profile}>
				<ProfileInfo />
				<Posts postData={props.postData}/>
			</div>
		</section>
	)
}

export default Profile;