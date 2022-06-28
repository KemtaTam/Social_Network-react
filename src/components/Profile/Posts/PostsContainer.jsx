import { connect } from "react-redux";
import { addLike, addPost, delPost } from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
	return {
		postData: state.profilePage.postData,
	}
}

const PostsContainer = connect(mapStateToProps, {addLike, addPost, delPost})(Posts);

export default PostsContainer;