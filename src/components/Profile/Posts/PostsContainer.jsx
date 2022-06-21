import { connect } from "react-redux";
import { addLike, addPost } from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
	}
}

const PostsContainer = connect(mapStateToProps, {addLike, addPost})(Posts);

export default PostsContainer;