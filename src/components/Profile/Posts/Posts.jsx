import p from "./Posts.module.css"
import Post from "./Post";
import React from "react";

const Posts = (props) => {
	let postItem = props.postData
		.map(el => <Post id={el.id} 
						text={el.text} numOfLike={el.likesCount} 
						addLike={props.addLike} key={el.id} 
					/>)
		.reverse();

	let newPostEl = React.useRef(null);

	let addPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostEl.current.value
		props.onPostChange(text);
	}

	return (
		<div className={p.profile_posts}>
			<div className={p.posts_wrapper}>
				<div className={p.profile_new_post}>
					<textarea ref={newPostEl} value={props.newPostValue} onChange={onPostChange} 
						cols="50" rows="3" placeholder="What's new?"
					/>
					<button className={p.bPublish} onClick={addPost}>Publish</button>
				</div>
				<div className={p.profile_title}>Publications</div>
				{postItem}
			</div>
		</div>
	)
}

export default Posts;