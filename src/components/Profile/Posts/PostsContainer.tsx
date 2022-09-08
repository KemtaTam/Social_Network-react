import { connect } from "react-redux";

import { AppStateType } from "../../../redux/redux-store";
import { PostType } from "../../../types/types";

import Posts from "./Posts.tsx";
import { addLike, addPost, delPost } from "../../../redux/reducers/profile-reducer.ts";

type MapStatePropsType = {
	postData: PostType;
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		postData: state.profilePage.postData,
	};
};

const PostsContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {
	addLike,
	addPost,
	delPost,
})(Posts);

export default PostsContainer;
