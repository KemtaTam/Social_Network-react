import { connect } from "react-redux";

import { actions } from "../../../redux/reducers/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";

import Posts from "./Posts";

let mapStateToProps = (state: AppStateType) => {
	return {
		postData: state.profilePage.postData,
	};
};

const PostsContainer = connect(mapStateToProps, {
	addLike: actions.addLike,
	addPost: actions.addPost,
	delPost: actions.delPost,
})(Posts);

export default PostsContainer;
