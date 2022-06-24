import PostsContainer from "./Posts/PostsContainer";
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

	return (
		<section className={p.content}>
			<div className={p.profile}>
				<ProfileInfo {...props}/>
				<PostsContainer store={props.store} />
			</div>
		</section>
	)
}

export default Profile;