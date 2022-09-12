import { connect } from "react-redux";

import { AppStateType } from "../../../redux/redux-store";
import { PostType } from "../../../types/types";

import Posts from "./Posts";
import { addLike, addPost, delPost } from "../../../redux/reducers/profile-reducer";

type MapStatePropsType = {
	postData: Array<PostType>;
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
