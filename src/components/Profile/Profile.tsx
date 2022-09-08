import React from "react";

import PostsContainer from "./Posts/PostsContainer.tsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.tsx";

import p from "./Profile.module.css"

const Profile: React.FC = (props) => {
	return (
		<section className={p.content}>
			<div className={p.profile}>
				<ProfileInfo {...props}/>
				<PostsContainer />
			</div>
		</section>
	)
}

export default Profile;