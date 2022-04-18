import React from "react";
import { addLikeActionCreator, addPostActionCreator, onPostChangeActionCreator } from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}
	let onPostChange = (text) => {
		props.store.dispatch(onPostChangeActionCreator(text));
	}
	let addLike = (id) => {
		props.store.dispatch(addLikeActionCreator(id));
	}

	return (
		<Posts onPostChange={ onPostChange } 
			addPost={ addPost }
			addLike={ addLike }
			postData={state.profilePage.postData} 
			newPostValue={state.profilePage.newPostValue}
		/>
	)
}

export default PostsContainer;