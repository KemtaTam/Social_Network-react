import { connect } from "react-redux";
import { addLikeActionCreator, addPostActionCreator, onPostChangeActionCreator } from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";

//старая контейнерная компонента
/* const PostsContainer = (props) => {
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
} */

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