import { connect } from "react-redux";
import { addLikeActionCreator, addPostActionCreator, onPostChangeActionCreator } from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
		newPostValue: state.profilePage.newPostValue
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		onPostChange: (text) => {
			dispatch(onPostChangeActionCreator(text));
		},
		addLike: (id) => {
			dispatch(addLikeActionCreator(id));
		}
	}
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;